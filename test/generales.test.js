
describe("probando jest", ()=>{
    Test("prueba de objetos iguales", () => {
        const datos1 = {
           nombre: "ricardo Daniel",
             edad: 29
    };
    
    const datos2 ={
        nombre: "Ricardo Daniel",
        edad: 29 
    };
    expect(datos1).toequal(datos2);
    })
}); 