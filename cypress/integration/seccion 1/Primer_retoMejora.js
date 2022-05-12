///<reference types="Cypress" />
 //para que funcionen los comandos
  
 describe("Verificacion de conocimiento", ()=>{
    let tiempo =1500
 //Rellenar el formulario correctamente.
  it("ADD FROM",()=>{ 
      
      cy.visit("https://demoqa.com/webtables") 
       cy.title("ToolsQA").should('eq','ToolsQA')
       cy.wait(tiempo)
       cy.get("#addNewRecordButton").should("be.visible").click()
       cy.wait(tiempo)
       cy.get("#firstName").should("be.visible").type("harold")
       cy.wait(tiempo)
       cy.get("#lastName").should("be.visible").type("mejia")
       cy.wait(tiempo)
       cy.get("#userEmail").should("be.visible").type("harold@gmail.com")
       cy.wait(tiempo)
       cy.get("#age").should("be.visible").type("16")
       cy.wait(tiempo)
       cy.get("#salary").should("be.visible").type("3600")
       cy.wait(tiempo)
       cy.get("#department").should("be.visible").type("cochabamba")
       cy.wait(tiempo)
       cy.get("#submit").should("be.visible").click()
       cy.wait(tiempo)
    })  
    //Editamos un formulario previamente creado
    it(" EDIT FROM - SEARCH",()=>{ 
       cy.visit("https://demoqa.com/webtables") 
       cy.wait(tiempo)
       cy.title("ToolsQA").should('eq','ToolsQA')
       cy.wait(tiempo)
       //cy.get("#searchBox").should("be.visible").type("Cierra{enter}")
       cy.wait(tiempo)
       cy.get("#edit-record-1 > svg").click()
       cy.wait(tiempo)
       cy.get("#age").should("be.visible").clear().type("18")
       cy.wait(tiempo)
       cy.get("#submit").should("be.visible").click()
       
    })  
    //editamos un fourmulario previamente registrado
    it("Delete",()=>{ 
      cy.visit("https://demoqa.com/webtables") 
      cy.title("ToolsQA").should('eq','ToolsQA')
      cy.wait(tiempo)
      cy.get("#searchBox").should("be.visible").clear().type("Alden{enter}")
      cy.wait(tiempo)
      cy.get("#delete-record-2 > svg > path").click()
      cy.wait(tiempo)
    })  
        
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    }) 
    })//cierre de describe