/// <reference types="cypress"/>
import homePage from '../support/pages/homePage'
import loginPage from '../support/pages/loginPage'
import registrationPage from '../support/pages/registrationPage'


it('Authorization test', () => {
    
  let cus = registrationPage.getNewCustomer()
  
  cy.visit('/#/login')
  cy.wait(150)//too long loaded cookies pop-up
  homePage.closeCookiesWelcomePopups()
  loginPage.getEmailField().type(cus.email)
  loginPage.getPasswordField().type(cus.password)
  loginPage.getLoginButton().click()
  registrationPage.getAccountButton().click()
  homePage.getEmailValue().should('have.text',` ${cus.email} `)
  
  
  
})


