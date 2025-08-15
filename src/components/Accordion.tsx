import { useState, useMemo, cloneElement } from "react";
import React from 'react';
import styles from './Accordion.module.css'

 interface AccordionProps{
    children: React.ReactElement[];
 }
 
 const Accordion = ({children}: AccordionProps) => {

    const defaultOpennedState: boolean[] = useMemo(() => children.map(() => false), [])
    const [openned, setOpenned] = useState<boolean[]>(defaultOpennedState);

    return (
        <div className={styles.accordion}>
            {children.map((child, i) => cloneElement(child, {
                openned: openned[i],
                index: i,
                setOpenned: setOpenned,
                key: i,
            }))}
        </div>
    )
}

export default Accordion