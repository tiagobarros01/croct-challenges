

type AccodionPros = {
  children: React.ReactNode,
}

function Accordion({children} : AccodionPros) {
  
  return (
    <div className="container">
      <div className="content">
        {children}
      </div>
    </div>
  )
}


export default Accordion;