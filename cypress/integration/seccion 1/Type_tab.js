///<reference types="Cypress" />
 //para que funcionen los comandos
 //se intala un plugin para este ejercicio de esta pagina https://www.npmjs.com/package/cypress-plugin-tab
 //npm install -D cypress-plugin-tab
 require('cypress-plugin-tab')
describe("Ejemplo funcion Tab ", ()=>{
  let tiempo=1500
    it("Type con Tab",()=>{
       cy.visit("https://demoqa.com/automation-practice-form") 
       cy.wait(tiempo)
       cy.get("#firstName").type("Rodrigo").tab().
       type("Villanueva").tab().
       type("harold.mejia@encora.com")
        })
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          }) 
    
    })//cierre de describe