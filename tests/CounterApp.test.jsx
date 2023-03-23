import { fireEvent, render, screen  } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


describe('pruebas en <CounterApp />', ()=>{
    const value = 10;
    test('debe de hacer match con el snapshot', () => { 
        const { container } = render( <CounterApp value={value} />);
        expect( container ).toMatchSnapshot(); 
    });

    test('debe de mostrar el valor inicial 100', () => { 
        render( <CounterApp value={100} />);
        expect( screen.getByText(100) ).toBeTruthy();
         /* screen.debug(); */ /* sirve para ver el objeto */ 
    });

    test('debe incrementar con el boton +1', () => { 

        render( <CounterApp value={value} />);
        fireEvent.click( screen.getByTestId('btn-increase') );
        expect( screen.getByText('11') ).toBeTruthy();

    })

    test('debe decrementar con el boton -1', () => { 

        render( <CounterApp value={value} />);
        fireEvent.click(screen.getByTestId('btn-decrease') );
        screen.debug();
        expect( screen.getByText('9') ).toBeTruthy();

    })


    test('debe funcionar el botón reset', () => { 

        render( <CounterApp value={value} />);
        fireEvent.click(screen.getByTestId('btn-decrease') );
        fireEvent.click(screen.getByTestId('btn-decrease') );
        fireEvent.click(screen.getByTestId('btn-decrease') );
        fireEvent.click(screen.getByTestId('btn-reset') );
        expect( screen.getByText(value) ).toBeTruthy();

    })


});