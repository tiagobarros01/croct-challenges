// components/accordion.tsx
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  forwardRef,
  HTMLAttributes,
  ButtonHTMLAttributes,
  useRef,
  useEffect
} from "react"
import "./styles.css"

interface AccordionProps {
  children: ReactNode
  multiple?: boolean 
  defaultValue?: string[]
}

type AccordionContextProps = {
  openItems: string[]
  toggleItem: (id: string) => void
}

const AccordionContext = createContext<AccordionContextProps | null>(null)

export function Accordion({ children, multiple = false, defaultValue = [] }: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(defaultValue)

  function toggleItem(id: string) {
    setOpenItems((prev) => {
      const isOpen = prev.includes(id)
      if (multiple) {
        return isOpen ? prev.filter((item) => item !== id) : [...prev, id]
      }
      return isOpen ? [] : [id]
    })
  }

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  )
}

function useAccordion() {
  const ctx = useContext(AccordionContext)
  if (!ctx) throw new Error("Accordion components must be used inside <Accordion />")
  return ctx
}

interface AccordionItemProps {
  children: ReactNode
  id: string
}

export function AccordionItem({ children, id }: AccordionItemProps) {
  return (
    <div className="accordion-item" data-id={id}>
      {children}
    </div>
  )
}

interface AccordionTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  id: string
}

export const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, id, ...props }, ref) => {
    const { openItems, toggleItem } = useAccordion()
    const isOpen = openItems.includes(id)

    return (
      <button
        ref={ref}
        className={`accordion-trigger ${isOpen ? "open" : ""}`}
        onClick={() => toggleItem(id)}
        {...props}
      >
        {children}
      </button>
    )
  }
)
AccordionTrigger.displayName = "AccordionTrigger"

interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  id: string
}

export const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, id, ...props }, ref) => {
    const { openItems } = useAccordion()
    const isOpen = openItems.includes(id)
    const innerRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState("0px")

    useEffect(() => {
      if (isOpen && innerRef.current) {
        setHeight(`${innerRef.current.scrollHeight}px`)
      } else {
        setHeight("0px")
      }
    }, [isOpen])

    return (
      <div
        ref={ref}
        className={`accordion-content ${isOpen ? "open" : ""}`}
        style={{ maxHeight: height }}
        {...props}
      >
        <div ref={innerRef} className="accordion-inner">
          {children}
        </div>
      </div>
    )
  }
)
AccordionContent.displayName = "AccordionContent"

