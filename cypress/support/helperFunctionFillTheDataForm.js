/// <reference types="cypress"/>
import { faker } from '@faker-js/faker'
import homePage from '../support/pages/homePage'

export function fillDataFrom(){
    homePage.getCountryField().type(faker.address.country())
    homePage.getNameField().type(faker.name.firstName())
    homePage.getMobileNumField().type(faker.phone.number('#########'))
    homePage.getZipCodeField().type(faker.address.zipCode('######'))
    homePage.getAddressField().type(faker.address.streetAddress())
    homePage.getCityField().type(faker.address.city())
    homePage.getStateField().type(faker.address.state())
}

export function CreditCardData(){
    homePage.getCreditCardName().type(faker.name.firstName())
    homePage.getCreditCardNumber().type(faker.finance.creditCardNumber('################'))
    homePage.getCreditCardExpiers().select(3)
    homePage.getCreditCardYear().select(3)

}