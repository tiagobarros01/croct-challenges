import {render, screen} from '@testing-library/react'
import AccordionChild from './AccordionChild'

describe('AccordionChild', () => {
    test('Does the accordion opens', () => {
        render(
            <AccordionChild
                title='Teste Title'
                index={0}
                setOpenned={() => jest.fn()}
                openned={true}
            >
                <p>teste</p>
            </AccordionChild>
        )

        const paragraph = screen.getByText('teste');

        expect(paragraph).toBeInTheDocument();
    })

    test('Is the title correct', () => {
        render(
            <AccordionChild
                title='Teste Title'
                index={0}
                setOpenned={() => jest.fn()}
                openned={true}
            >
                <p>teste</p>
            </AccordionChild>
        )

        const paragraph = screen.getByText('Teste Title');

        expect(paragraph).toBeInTheDocument();
    })
})