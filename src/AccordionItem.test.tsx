// import "@testing-library/jest-dom";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import { AccordionItem } from "./_components/AccordionItem.tsx";

// describe("AccordionItem", () => {
//   test("renderiza fechado por padrão (isOpen=false)", async () => {
//     render(<AccordionItem title="Title">Content</AccordionItem>);

//     const btn = screen.getByRole("button", { name: "Title" });
//     expect(btn).toHaveAttribute("aria-expanded", "false");

//     await userEvent.click(btn)

//     expect(screen.getByText('Content')).toBeInTheDocument();
//   });

//   test("renderiza aberto quando isOpen=true", () => {
//     render(<AccordionItem title="Title" isOpen>Content</AccordionItem>);

//     const btn = screen.getByRole("button", { name: "Title" });
//     expect(btn).toHaveAttribute("aria-expanded", "true");

//     const region = screen.getByRole("region", { name: "Title" });
//     expect(region).toBeVisible();
//   });

//   test("chama onToggle ao clicar no botão", async () => {
//     const user = userEvent.setup();
//     const onToggle = jest.fn();

//     render(<AccordionItem title="Title" onToggle={onToggle}>Content</AccordionItem>);

//     await user.click(screen.getByRole("button", { name: "Title" }));
//     expect(onToggle).toHaveBeenCalledTimes(1);
//   });

//   test("amarracao ARIA (id, aria-controls/labelledby) quando id é passado", () => {
//     render(<AccordionItem id="custom" title="Title">Content</AccordionItem>);

//     const btn = screen.getByRole("button", { name: "Title" });
//     const region = screen.getByRole("region", { name: "Title" });

//     expect(btn).toHaveAttribute("id", "custom-header");
//     expect(btn).toHaveAttribute("aria-controls", "custom-panel");
//     expect(region).toHaveAttribute("id", "custom-panel");
//     expect(region).toHaveAttribute("aria-labelledby", "custom-header");
//   });
// });
