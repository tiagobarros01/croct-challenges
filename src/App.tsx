import './App.css'
import Accordion from './components/Accordion'
import AccordionChild from './components/AccordionChild/AccordionChild'

function App() {
  return (
      <Accordion>
          <AccordionChild title='Accordion 1 aaaaaaaaaaaaaaaaaaaaaaaaaaaa'>
            <div>teste teste</div>
          </AccordionChild>
          <AccordionChild title='Accordion 2'>
            <div>teste 2 teste 2</div>
            <h1>teste 3</h1>
          </AccordionChild>
          <AccordionChild title='Accordion 2'>
            <div>teste 2 teste 2</div>
          </AccordionChild>
          <AccordionChild title='Accordion 2'>
            <div>teste 2 teste 2</div>
          </AccordionChild>
      </Accordion>
  )
}

export default App

{/*
<Accordion>
  <AccordionItem title="" content={...} />
  <AccordionItem title="" content={...} defautOpened />
  <AccordionItem title="" content={...} />
</Accordion>
*/}