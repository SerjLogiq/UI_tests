/// <reference types="cypress"/>
class homePage{


    getWelcomeDissmisButton(){
        return cy.get('[aria-label="Close Welcome Banner"]')

    }

    getCookiesCloseButton(){
        return cy.get('[aria-label="dismiss cookie message"]')
    }
        
    closeCookiesWelcomePopups(){
        this.getCookiesCloseButton().click()
        this.getWelcomeDissmisButton().click()
        
    }
    getEmailValue(){
        return  cy.get('.mat-menu-content > [aria-label="Go to user profile"] > span')
    }

    getYourBasketButton(){
        return cy.get('[aria-label="Show the shopping cart"]')
    }
    getCheckOutButton(){
        return cy.get('#checkoutButton')
    }
    getAddNewAddressButton(){
        return cy.get('[aria-label="Add a new address"]')
    }

    //Add New Address Form Page
    getCountryField(){
        return  cy.get('[placeholder="Please provide a country."]')
    }
    getNameField(){
        return cy.get('[data-placeholder="Please provide a name."]')
    }
    getMobileNumField(){
        return cy.get('[placeholder="Please provide a mobile number."]')
    }
    getZipCodeField(){
        return cy.get('[placeholder="Please provide a ZIP code."]')
    }
    getAddressField(){
        return cy.get('[placeholder="Please provide an address."]')
    }
    getCityField(){
        return cy.get('[placeholder="Please provide a city."]')
    }
    getStateField(){
        return  cy.get('[placeholder="Please provide a state."]')
    }
    getSubmitButton(){
        return cy.get('#submitButton')
    }
    getSelectAddressRadioButton(){
        return  cy.get('.mat-radio-container')
    }
    getContinueButton(){
        return cy.contains('Continue')
    }

    getDeliverAdressRadioButton(){
        return cy.get('.mat-radio-container')
    }

    getAddCreditCardButton(){
        return cy.get('#mat-expansion-panel-header-0')
    }

    getCreditCardName(){
        return cy.get('#mat-input-10')
    }
    getCreditCardNumber(){
        return cy.get('#mat-input-11')
    }
    getCreditCardExpiers(){
        return cy.get('#mat-input-12')
    }
    getCreditCardYear(){
        return cy.get('#mat-input-13')
    }

    getCreditCardRadioButton(){
        return cy.get('#mat-radio-44')
    }

    getConfirmationMessage(){
        return cy.get('.confirmation')
    }




}

export default new homePage()