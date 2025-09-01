import { Accordion } from './_components/Accordion'
import { AccordionItem } from './_components/AccordionItem'
import './App.css'

function App() {
  return (
    <div className="app">
      <Accordion>
        <AccordionItem defaultExpanded title='teste 1'>Teste 1</AccordionItem>
        <AccordionItem title='teste 2'>Teste 2</AccordionItem>
        <AccordionItem title='teste 3'>Teste 3</AccordionItem>        
        <AccordionItem title='teste 4'>Teste 4</AccordionItem>        
      </Accordion>
    </div>
  )
}

export default App
