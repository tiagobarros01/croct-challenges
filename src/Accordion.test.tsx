import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Accordion } from "./_components/Accordion";
import { AccordionItem } from "./_components/AccordionItem";

describe("Accordion", () => {
  function setup() {
    return render(
      <Accordion>
        <AccordionItem title="A">Content A</AccordionItem>
        <AccordionItem defaultExpanded title="B">Content B</AccordionItem>
        <AccordionItem title="C">Content C</AccordionItem>
      </Accordion>
    );
  }

  test("abre o item com defaultExpanded na montagem", () => {
    setup();

    const btnA = screen.getByRole("button", { name: "A" });
    const btnB = screen.getByRole("button", { name: "B" });
    const btnC = screen.getByRole("button", { name: "C" });

    expect(btnB).toHaveAttribute("aria-expanded", "true");
    expect(btnA).toHaveAttribute("aria-expanded", "false");
    expect(btnC).toHaveAttribute("aria-expanded", "false");

    expect(screen.getByText("Content B")).toBeInTheDocument();
    expect(screen.queryByText("Content A")).not.toBeInTheDocument();
    expect(screen.queryByText("Content C")).not.toBeInTheDocument();
  });

  test("abre um item fechado ao clicar e fecha o anteriormente aberto", async () => {
    const user = userEvent.setup();
    setup();

    await user.click(screen.getByRole("button", { name: "C" }));

    expect(screen.getByRole("button", { name: "C" })).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("button", { name: "B" })).toHaveAttribute("aria-expanded", "false");

    expect(screen.getByText("Content C")).toBeInTheDocument();
    expect(screen.queryByText("Content B")).not.toBeInTheDocument();
  });

  test("clicar no item já aberto fecha (nenhum fica aberto)", async () => {
    const user = userEvent.setup();
    setup();

    const btnB = screen.getByRole("button", { name: "B" });
    expect(btnB).toHaveAttribute("aria-expanded", "true");

    await user.click(btnB);

    expect(btnB).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByText("region")).not.toBeInTheDocument();
  });

  test("garante apenas um painel aberto por vez", async () => {
    const user = userEvent.setup();
    setup();

    await user.click(screen.getByRole("button", { name: "A" }));
    await user.click(screen.getByRole("button", { name: "C" }));

    expect(screen.getByRole("button", { name: "C" })).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("button", { name: "A" })).toHaveAttribute("aria-expanded", "false");
    expect(screen.getByRole("button", { name: "B" })).toHaveAttribute("aria-expanded", "false");
  });
});
