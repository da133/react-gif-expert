import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas de GifItem', () => {

    const title = 'The Office';
    const url = 'https://the-office/series.jpg';

    test('debe hacer match con el snapshot', () => {
        const { container } = render( <GifItem title={ title } url={ url } /> );
        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render( <GifItem title={ title } url={ url } /> );
        // screen.debug();
        // expect( screen.getByRole('img').urñ ).toBe( url );
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    });

    test('debe de mostrar el titulo en el componente', () => {
        render( <GifItem title={ title } url={ url } /> );
        console.log( screen.getByAltText( title ) );
        expect( screen.getByAltText( title ) ).toBeTruthy();
    });

});