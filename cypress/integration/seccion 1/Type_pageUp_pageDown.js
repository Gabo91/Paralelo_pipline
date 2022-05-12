///<reference types="Cypress" />
 //para que funcionen los comandos
describe("Ejemplo de Type pageUp, pageDown ", ()=>{
   let tiempo=1500
    it("Type pageUp ",()=>{
       cy.visit("https://demoqa.com/")
       cy.title().should('eq', 'ToolsQA')
       cy.wait(tiempo)
       cy.get("#app > div > div > div.home-body > div > div:nth-child(1)").click()
       cy.wait(tiempo)
       cy.get("#item-0").click()
       cy.wait(tiempo)
       cy.get("#userName").type('{pageup}')  
    })
    
    it("Type pageDown ",()=>{
      cy.visit("https://demoqa.com/")
      cy.title().should('eq', 'ToolsQA')
      cy.wait(tiempo)
      cy.get("#app > div > div > div.home-body > div > div:nth-child(1)").click()
      cy.wait(tiempo)
      cy.get("#item-0").click()
      cy.wait(tiempo)
      //cy.get("#userForm > div.mt-2.justify-content-end.row > div ").type('{pagedown}')
      cy.get("#userName").type('{pagedown}')
      
      
   })
   //Correra solo este por que tiene la funcion Only
   it("Type pageDown ultimo",()=>{
      cy.visit("https://demoqa.com/")
      cy.title().should('eq', 'ToolsQA')
      cy.wait(tiempo)
      cy.get("#app > div > div > div.home-body > div > div:nth-child(1)").click()
      cy.wait(tiempo)
      cy.get("#item-0").click()
      cy.wait(tiempo)
      //cy.get("#userForm > div.mt-2.justify-content-end.row > div ").type('{pagedown}')
      cy.get("#userName").type('{pagedown}')
      
      
   })
    
    
    })//cierre de describe