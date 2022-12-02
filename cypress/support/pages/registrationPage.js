/// <reference types="cypress"/>
import { faker } from '@faker-js/faker'


class registrationPage{

    getAccountButton(){
        return cy.get('#navbarAccount')
    }

    getLoginButton(){
        return cy.get('#navbarLoginButton')
    }

    getNYCButton(){
        return cy.get('#newCustomerLink')
    }
    
    openRegistrationForm(){
        this.getAccountButton().click()
        this.getLoginButton().click()
        this.getNYCButton().click()

    }

    getSuccessRegMessage(){
        return cy.get('[aria-live="assertive"]')
    }

    getEmailField(){
       return cy.get('[aria-label="Email address field"]')
    }
    getPasswordField(){
       return cy.get('[aria-label="Field for the password"]')
    }
    getRpeatPasswordField(){
        return cy.get('[aria-label="Field to confirm the password"]')
    }
    getSecurityQuestionField(){
        return cy.get('#mat-select-value-3')
    }
    getChooseAnswer(){
        return cy.get('.mat-option-text')
    }
    getAnswerField(){
        return cy.get('#securityAnswerControl')
    }
    getRegistrationButton(){
        return cy.get('#registerButton')
    }
    

    fillRegistratioinForm(){
        const newUser = {
            email: faker.internet.email(),
            password: faker.internet.password(8, true, /[A-Z]/, 'Serj!1'),
            answer: faker.random.alpha(10)
        }
        this.getEmailField().type(newUser.email)
        this.getPasswordField().type(newUser.password)
        this.getRpeatPasswordField().type(newUser.password)
        this.getSecurityQuestionField().click()
        this.getChooseAnswer().invoke('size').as('optionsQty');
        cy.get('@optionsQty').then((qty) => {
            let optionNumber = Math.floor(Math.random() * qty + 1);
            cy.get('#mat-option-' + optionNumber).click();
        })
        this.getAnswerField().type(newUser.answer)
    }

    getNewCustomer(){
        let user = {       
            email: faker.internet.email(),
            password: faker.internet.password(8, true, /[A-Z]/, 'Serj!1')}
            
        cy.request('POST','/api/Users/', user).then(response => {
            expect (response.status).to.be.eq(201); // status code
      }) 
      return user
    }

}
export default new registrationPage()