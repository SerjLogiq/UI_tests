/// <reference types="cypress"/>
import homePage from '../support/pages/homePage'
import registrationPage from '../support/pages/registrationPage'


it.only('Regisration test', () => {
    
    cy.visit('/')
    homePage.closeCookiesWelcomePopups()
    registrationPage.openRegistrationForm()
    registrationPage.fillRegistratioinForm()
    registrationPage.getRegistrationButton().click()
    registrationPage.getSuccessRegMessage().should('contain', 'Registration completed successfully. You can now log in.')
    cy.location().should((loc) => {
        expect (loc.hash).to.eq('#/login')
    })
       
  })

