/// <reference types="cypress"/>
import homePage from '../support/pages/homePage'
import loginPage from '../support/pages/loginPage'
import registrationPage from '../support/pages/registrationPage'
import {productSearch} from '../support/helperFunctions'
import {serachProductBYName} from '../support/helperFunctions'
import {fillDataFrom} from '../support/helperFunctionFillTheDataForm'
import {CreditCardData} from '../support/helperFunctionFillTheDataForm'

before(()=>{
  let cus = registrationPage.getNewCustomer()
  
  cy.visit('/#/login')
  cy.wait(150)//too long loaded cookies pop-up
  homePage.closeCookiesWelcomePopups()
  loginPage.getEmailField().type(cus.email)
  loginPage.getPasswordField().type(cus.password)
  loginPage.getLoginButton().click()
})

it('Order test', { retries: 3 }, () => {


  productSearch('Juice')
  serachProductBYName('Raspberry Juice (1000ml)')
    
  homePage.getYourBasketButton().click()//відкрити корз
  homePage.getCheckOutButton().click()
  homePage.getAddNewAddressButton().click()
  
  fillDataFrom() //filling the form
  homePage.getSubmitButton().click()
  homePage.getSelectAddressRadioButton().click()
  homePage.getContinueButton().click()
  homePage.getDeliverAdressRadioButton().eq(2).click()
  homePage.getContinueButton().click()
  homePage.getAddCreditCardButton().click()
  
  CreditCardData() //fill credit card data
  homePage.getSubmitButton().click()
  homePage.getCreditCardRadioButton().click()
  homePage.getContinueButton().click()
  homePage.getCheckOutButton().click()
  homePage.getConfirmationMessage().should('contain','Thank you for your purchase!')
  
  cy.location().should((loc) => {
    expect (loc.hash).to.include('order-completion')
})
})


