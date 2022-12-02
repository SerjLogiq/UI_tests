/// <reference types="cypress"/>

class loginPage {

    getEmailField(){
        return cy.get('#email')
    }
    getPasswordField(){
        return cy.get('#password')
    }
    getLoginButton(){
        return cy.get('#loginButton')
    }
    

}

export default new loginPage()