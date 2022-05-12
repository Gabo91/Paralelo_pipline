
describe("Bienvenido al curso de Cypress seccion 1", ()=>{
    let tiempo=1500
it("Mi primer Test -> Hola mundo",()=>{
    cy.log("Hola Mundo")
    cy.wait(tiempo)
})
it("Mi segundo Test --> campo name",()=>{
    cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox/")
    cy.get("#wsf-1-field-29").type("harold.mejia")
    cy.wait(tiempo)
   // cy.get("#userEmail").type("harold.mejia@encora.com")
   // cy.get("#currentAddress").type("asdasdasd")
    //cy.get("#permanentAddress").type("asdasdasd")
    
})

})//cierre de describe