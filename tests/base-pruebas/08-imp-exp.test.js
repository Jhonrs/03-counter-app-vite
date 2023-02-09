import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas en 08-imp-exp", () => {
    test("getHeroeById retornar heroe por id", () => {
        const id = 1;
        const hero = getHeroeById( id );

        expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
        });
    });

    test("getHeroeById retornar heroe por id", () => {
        const id = 100;
        const hero = getHeroeById( id );

        expect(hero).toBeFalsy();
    });

    test("getHeroesByOwner retornar heroe por id", () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );
        expect( heroes.length ).toBe( 3 );
        expect( heroes ).toEqual( [{ id: 1, name: 'Batman', owner: 'DC' },
        { id: 3, name: 'Superman', owner: 'DC' },
        { id: 4, name: 'Flash', owner: 'DC' }]);
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) );
    });

    test("getHeroesByOwner retornar heroe por id", () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );
        expect( heroes.length ).toBe( 2 );
        expect( heroes ).toEqual( [{"id": 2, "name": "Spiderman", "owner": "Marvel"}, {"id": 5, "name": "Wolverine", "owner": "Marvel"}]);
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) );
      
    });

});
