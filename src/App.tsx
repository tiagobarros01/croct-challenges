import './App.css'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../src/components/accordion"

function App() {
  return (
    <div className="app">
    <Accordion defaultValue={["item-2"]}>
      <AccordionItem id="item-1">
        <AccordionTrigger id="item-1">Is it accessible?</AccordionTrigger>
        <AccordionContent id="item-1">Yes. lorem</AccordionContent>
      </AccordionItem>

        <AccordionItem id="item-2">
          <AccordionTrigger id="item-2">Accordion Item 2</AccordionTrigger>
          <AccordionContent id="item-2">Accordion Item 2</AccordionContent>
        </AccordionItem>

        <AccordionItem id="item-3">
          <AccordionTrigger id="item-3">Accordion Item 3</AccordionTrigger>
          <AccordionContent id="item-3">Accordion Item 3</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default App
