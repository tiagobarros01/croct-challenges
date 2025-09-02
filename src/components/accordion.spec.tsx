import { render, screen } from "@testing-library/react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./accordion"
import {userEvent} from "@testing-library/user-event"


describe("Component: Accordion", () => {
  it("It should be possible to specify which accordion item should be opened by default", () => {
    render(
      <Accordion defaultValue={["item-2"]}>
        <AccordionItem id="item-1">
          <AccordionTrigger id="item-1">Is it accessible?</AccordionTrigger>
          <AccordionContent id="item-1">Yes. lorem</AccordionContent>
        </AccordionItem>

          <AccordionItem id="item-2">
            <AccordionTrigger id="item-2">Accordion Item 2</AccordionTrigger>
            <AccordionContent id="item-2">Accordion Content 2</AccordionContent>
          </AccordionItem>

          <AccordionItem id="item-3">
            <AccordionTrigger id="item-3">Accordion Item 3</AccordionTrigger>
            <AccordionContent id="item-3">Accordion Content 3</AccordionContent>
          </AccordionItem>
      </Accordion>
    )

    expect(screen.getByRole('button', { name: /accordion item 2/i })).toHaveClass("accordion-trigger open")
  })

   it("should be able another accordion item", async () => {
    const user = userEvent.setup()

    render(
      <Accordion defaultValue={["item-2"]}>
        <AccordionItem id="item-1">
          <AccordionTrigger id="item-1">Is it accessible?</AccordionTrigger>
          <AccordionContent id="item-1">Yes. lorem</AccordionContent>
        </AccordionItem>

          <AccordionItem id="item-2">
            <AccordionTrigger id="item-2">Accordion Item 2</AccordionTrigger>
            <AccordionContent id="item-2">Accordion Content 2</AccordionContent>
          </AccordionItem>

          <AccordionItem id="item-3">
            <AccordionTrigger id="item-3">Accordion Item 3</AccordionTrigger>
            <AccordionContent id="item-3">Accordion Content 3</AccordionContent>
          </AccordionItem>
      </Accordion>
    )

    const anotherAccordionTrigger = screen.getByRole('button', { name: /accordion item 3/i })

    await user.click(anotherAccordionTrigger)


    expect(screen.getByRole('button', { name: /accordion item 3/i })).toHaveClass("accordion-trigger open")
     expect(screen.getByRole('button', { name: /accordion item 2/i })).toHaveClass("accordion-trigger")
  })
})