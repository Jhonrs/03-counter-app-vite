describe("Pruebas en <Demo/>", () => {
    test("Esta prueba no debe fallar", () => {
        // inicialización
        const mesage1 = "hola mundo";

        // estimulo
        const mesage2 = mesage1.trim();

        // Observar el comportamiento
        expect(mesage1).toBe(mesage2);
    });
});
