import React, { useContext} from 'react';
import ContextAccodion from '../../Context/AccordionContext/AccordionContex';

type AccordionItemProps = {
  title: string,
  children: string,
  defaultExpanded?: boolean,
  id: string
}

function AccordionItem({ title, children, id }: AccordionItemProps) {
  const { openAccordion, setOpenAccordion } = useContext(ContextAccodion)

  function handleOpenAccordion(id: string) {
    console.log('id', id)
    if(openAccordion === id) {
      setOpenAccordion(undefined)
    } else {
      setOpenAccordion(id)
    }
  }

  return(
    <div>
      <button onClick={() => handleOpenAccordion(id)}>
        <p >
          {title}
        </p>
        <img src="/"/>
      </button>
      {openAccordion && 
        <>
          <p>{children}</p>
        </>
      }
    </div>
   
  )
}
export default AccordionItem;