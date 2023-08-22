import { render, screen, fireEvent } from "@testing-library/react";
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
 
    //Primero Debe agregar categorias nuevas:
    test('should Add new categories', () => {

        const newCategory = 'Friends';

        render(<GifExpertApp />);
        const input = screen.getByRole('textbox'); 
        const form = screen.getByRole('form'); 
 
        // Ahora disparo los eventos para agregar 3 categorias nuevas
        fireEvent.input(input, { target: { value: newCategory } });
        fireEvent.submit(form); //Agrega Friends
 
        // Espero que se hallan agregado 1 categoría cuyo nombre aparece en etiqueta h3 más la categoría que 
        // estaba por defecto
        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2);

    });
 
    // No debe agregar una categoría si ya existe
    test('Should not add a repeated category', () => {

        const newCategory = 'Friends';

        render(<GifExpertApp />);
        const input = screen.getByRole('textbox'); 
        const form = screen.getByRole('form'); 
 
        // Disparo los eventos para agregar una categoría
        fireEvent.input(input, { target: { value: newCategory } });
        fireEvent.submit(form);//agrega Friends
 
        // Intento agregar la misma categoria
        fireEvent.input(input, { target: { value: newCategory } });
        fireEvent.submit(form); //intento agregar Friends nuevamente
 
        // Espero que no agregue la misma categoría y sólo esté agregada la primera vez más la categoría que
        // estaba por defecto
        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2);
        
        screen.debug();
    });

});