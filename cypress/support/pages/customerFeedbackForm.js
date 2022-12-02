/// <reference types="cypress"/>
class feedbackForm {

    getSideNavigationMenu(){
        return cy.get('[aria-label="Open Sidenav"]')
    }

    getCustomerFeedback (){
        return cy.get('[aria-label="Go to contact us page"]')
    }
    getCommentField(){
        return cy.get('[aria-label="Field for entering the comment or the feedback"]')
    }

    getRatingLine(){
        return cy.get('#rating')
    }//not done
   
    getCaptcha(){
        return cy.get('#captcha')
    }
    getResultField(){
        return cy.get('[aria-label="Field for the result of the CAPTCHA code"]')
    }
    getSuccsessMessage(){
        return cy.get('.mat-simple-snack-bar-content')
    }














}

export default new feedbackForm()