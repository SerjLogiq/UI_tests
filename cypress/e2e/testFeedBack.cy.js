/// <reference types="cypress"/>
import homePage from '../support/pages/homePage'
import loginPage from '../support/pages/loginPage'
import registrationPage from '../support/pages/registrationPage'
import {productSearch} from '../support/helperFunctions'
import {serachProductBYName} from '../support/helperFunctions'
import feedbackForm from '../support/pages/customerFeedbackForm'
import { faker } from '@faker-js/faker'
before(()=>{
  let cus = registrationPage.getNewCustomer()
  
  cy.visit('/#/login')
  cy.wait(150)//too long loaded cookies pop-up
  homePage.closeCookiesWelcomePopups()
  loginPage.getEmailField().type(cus.email)
  loginPage.getPasswordField().type(cus.password)
  loginPage.getLoginButton().click()
})


it('Feedback test', () => {
  feedbackForm.getSideNavigationMenu().click()
  feedbackForm.getCustomerFeedback ().click()

  feedbackForm.getCommentField().type(faker.hacker.phrase())
  feedbackForm.getCaptcha().then((captcha) => {
    let text = captcha.text();
    const result = (eval(text));
    feedbackForm.getResultField().type(result)
}) 
 
  const arrows = '{rightarrow}' // feedbackForm.getRatingLine().click()//погане рішення але швидке)
  cy.get('mat-slider')
      .type(arrows) 
  
  homePage.getSubmitButton().click()
  feedbackForm.getSuccsessMessage().should('have.text', 'Thank you for your feedback.')
  


})





