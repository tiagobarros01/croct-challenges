import './App.css'
import Accoodion from './components/Accordion'
import AccordionItem from './components/AccodionItem'

function App() {

  return (
      <div className="app">
          <Accoodion>
            <AccordionItem title='Teste 1' children="teste 1" id='1'/>
            <AccordionItem title='Teste 2' children="teste 2" id='2'/>
            <AccordionItem title='Teste 3' children="teste 3" id='3'/>
          </Accoodion>
      </div>
  )
}

export default App