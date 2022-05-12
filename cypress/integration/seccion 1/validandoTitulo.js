///<reference types="Cypress" />

describe("Seccion 1 Validando el titulo ", ()=>{
   let tiempo= 1500
    it("Test Validar el titulo ", ()=>{
       cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox/") 
       cy.title().should('eq','Prueba de campos Checkbox | TestingQaRvn')
       cy.wait(tiempo)
       cy.get("#wsf-1-field-29").type("Harold")
       cy.wait(tiempo)
       cy.get("#wsf-1-field-30").type("Mejia")
       cy.wait(tiempo)
       cy.get("#wsf-1-field-31").type("harold.mejia@encora.com")
       cy.wait(tiempo)
       cy.log("OK la funcion title funciono bien")
    })
    
    
    })//cierre de describe