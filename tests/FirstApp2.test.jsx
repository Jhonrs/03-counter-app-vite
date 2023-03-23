import {
  getAllByAltText,
  getAllByText,
  getByText,
  render,
  screen
} from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirstApp />", () => {

    const title = 'Hola, soy Goku';
    const subTitle = 'Template del subtitulo';

    test('debe de hacer match con el snapshot', () => { 
        const { container } = render( <FirstApp title={title} />);
        expect ( container ).toMatchSnapshot();
    });

    test('debe de mostrar el mensaje "Hola, soy Goku"', () => { 
        render( <FirstApp title={title} />);
        expect( screen.getByText(title) ).toBeTruthy();
        /*  screen.debug(); */ /* sirve para ver el objeto */ 
    });
    
    test('debe buscarlo en un h1', () => { 
        render( <FirstApp title={title} />);
        expect( screen.getByRole('heading', { level: 2}).innerHTML ).toContain( title );
    });

    test('debe de mostrar el subtitulo enviado por props', () => { 
        render( 
            <FirstApp 
                title={ title }
                subTitle={ subTitle }
            />
        );
        expect( screen.getAllByText( subTitle ).length ).toBe(2);
    });
    
    
});
