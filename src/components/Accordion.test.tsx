
import { render, screen, fireEvent } from '@testing-library/react'
import AccordionChild from './AccordionChild/AccordionChild'
import Accordion from './Accordion'

describe('AccordionChild', () => {
    test('Does the accordion opens and close', () => {
        const btnTitle1 = 'teste 1'
        const btnTitle2 = 'teste 2'
        render(
            <Accordion>
                <AccordionChild
                    title={btnTitle1}
                    setOpenned={() => jest.fn()}
                    index={0}
                    openned={false}
                >
                    <p>teste</p>
                </AccordionChild>
                <AccordionChild
                    title={btnTitle2}
                    setOpenned={() => jest.fn()}
                    index={0}
                    openned={false}
                >
                    <p>teste 2</p>
                </AccordionChild>
            </Accordion>
        )

        const btn1 = screen.getByText(btnTitle1)

        fireEvent.click(btn1)

        expect(btn1).toBeInTheDocument()

        const paragraph = screen.getByText('teste');

        expect(paragraph).toBeInTheDocument();

        fireEvent.click(btn1)

        expect(paragraph).not.toBeInTheDocument();
    })

    test('If one accordion closes the other', () => {
        const btnTitle1 = 'teste 11'
        const btnTitle2 = 'teste 22'
        render(
            <Accordion>
                <AccordionChild
                    title={btnTitle1}
                    setOpenned={() => jest.fn()}
                    index={0}
                    openned={false}
                >
                    <p>teste</p>
                </AccordionChild>
                <AccordionChild
                    title={btnTitle2}
                    setOpenned={() => jest.fn()}
                    index={0}
                    openned={false}
                >
                    <p>teste 2</p>
                </AccordionChild>
            </Accordion>
        )

        const btn1 = screen.getByText(btnTitle1)
        const btn2 = screen.getByText(btnTitle2)

        fireEvent.click(btn1)

        expect(btn1).toBeInTheDocument()

        const paragraph = screen.getByText('teste');

        expect(paragraph).toBeInTheDocument();

        fireEvent.click(btn2)

        const paragraph2 = screen.getByText('teste 2')

        expect(paragraph).not.toBeInTheDocument();
        expect(paragraph2).toBeInTheDocument();
    })
})