///<reference types="Cypress" />


 //para que funcionen los comandos
describe("Introduccion a los assert ", ()=>{
  let tiempo=1500
    it("Demos de los Assert ",()=>{
       cy.visit("https://demoqa.com/automation-practice-form") 
       cy.title().should('eq','ToolsQA')
       try {
        cy.wait(tiempo)
         cy.get("#firstName").should("be.visible").type("Harold")
         cy.wait(tiempo)
         cy.get("#lastName").should("be.visible").type("Mejia")
         cy.wait(tiempo)
         cy.get("#userEmail").should("be.visible").should("be.enabled").type("harold.mejia@encora.com")
       } catch (error) {
          
       }
      cy.wait(tiempo)
      cy.get("#firstName").should("be.visible").type("Harold")
      cy.wait(tiempo)
      cy.get("#lastName").should("be.visible").type("Mejia")
      cy.wait(tiempo)
      cy.get("#userEmail").should("be.visible").should("be.enabled").type("harold.mejia@encora.com")
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    }) 
    
    })//cierre de describe