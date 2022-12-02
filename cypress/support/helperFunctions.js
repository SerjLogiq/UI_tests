/// <reference types="cypress"/>
 
export function productSearch(productName){
    cy.get('[aria-label="Click to search"]')
    .type(`${productName}{enter}`)
}

export function serachProductBYName(productName){
    cy.wait(500) // додав wait того що в мене були проблеми з завантаженням елементів, через  повільний інтернет
    cy.get('body').then(body=> {
        if(body.find(`[alt="${productName}"]`).length > 0){
            cy.get(`[alt="${productName}"]`).parents('mat-card').find('[aria-label="Add to Basket"]').click()
            cy.get('.mat-simple-snackbar.ng-star-inserted').should('contain', `Placed ${productName} into basket.`) //перевірка поп-апа що товар погнав до корзини
        } 
        
        
            else    {
                const findInPage = () => {
                    cy.get('[aria-label="Next page"]').then((el) => {
                        if (el.attr('disabled')) {
                            cy.log(`We didn't found a product`);
                            
                        } else {
                            cy.wrap(el).click();
                            serachProductBYName(productName)
                            
                        }
                    });
                }
                findInPage()
                
                
                
            }
    
                         
         })
    
}



