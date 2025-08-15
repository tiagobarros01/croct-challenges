import styles from './AccordionChild.module.css'

interface AccordionChildProps {
    openned?: boolean;
    index?: number;
    setOpenned?: React.Dispatch<React.SetStateAction<boolean[]>>;
    children: React.ReactNode;
    title: string;
}

const AccordionChild = ({
    openned,
    setOpenned,
    index,
    children,
    title,
}: AccordionChildProps) => {

    

    const click = () => {
        console.log(setOpenned)
        console.log(index)
        if (setOpenned && typeof index === 'number')
        {
            setOpenned((state) => {
                let copy = [...state];
                const newValue = !copy[index];
                copy[index] = newValue;
                if(newValue){
                    copy = copy.map(() => false);
                    copy[index] = newValue;
                }
                console.log(copy)
                return [...copy];
            })
        }
    }

    return <div>
        <button onClick={click} className={styles.btn}>
            {title}
        </button>
        {openned && <div className={`${styles.child}`}>
            {children}
        </div>}
    </div>

}

export default AccordionChild