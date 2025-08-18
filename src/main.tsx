import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import  { AccordionContextComponent } from './Context/AccordionContext/AccordionContex.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AccordionContextComponent>
      <App />
    </AccordionContextComponent>
  </React.StrictMode>,
)
