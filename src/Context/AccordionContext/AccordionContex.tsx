import React, {createContext, useState} from 'react';

type ContextAccodionProps = {
  children: React.ReactNode
}

const ContextAccodion = createContext({})

export function AccordionContextComponent({children} : ContextAccodionProps) {
const [openAccordion, setOpenAccordion] = useState<object>({})

  return (
    <ContextAccodion.Provider value={{openAccordion, setOpenAccordion}} >
      {children}
    </ContextAccodion.Provider>
  )
}

export default ContextAccodion;