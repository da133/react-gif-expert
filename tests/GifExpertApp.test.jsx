import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Puruebas en <GifExpertApp />', () => {

    test('should match initial snapshot', () => {

        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
        
    });

    test('should have initial value Greys Anatomy', () => {

        render(<GifExpertApp />);
        expect( screen.getByText('Greys Anatomy') ).toBeTruthy();
        expect( screen.getAllByText('Greys Anatomy').length ).toBe(1);

    });

});