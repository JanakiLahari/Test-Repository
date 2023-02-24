import { RACING_CATEGORIES } from "../config/constants";

describe('Category Filters', () => {
  const text1,text2,text3;
  it('When the check boxes are unchecked for each item in the rows has to be changed', () => {
    cy.visit('');

    cy.get('[data-testid=category-filters]').within(() => {
      
          cy.get(`[data-testid=category-filter-${RACING_CATEGORIES[0].categoryId}]`).within(() => {
            cy.get('[data-testid=category-filter-checkbox]').click();
          });
        }); 
     
  cy.get('div.item').each(($item: any) => {      
   
    text1=$item.text();
    
    });     
    cy .log("Read the rows with Thoroughbred unchecked")
    ///////////////////////////////////////////////////////////////////////////////////////////////

    cy.get('[data-testid=category-filters]').within(() => {
      
          cy.get(`[data-testid=category-filter-${RACING_CATEGORIES[1].categoryId}]`).within(() => {
            cy.get('[data-testid=category-filter-checkbox]').click();
          });
        }); 
        cy .log("Read the rows with Greyhound unchecked")
  cy.get('div.item').each(($item: any) => {      
    
    text2=$item.text();
    
    }); 
    cy .log("Compare the texts in both cases")
    cy .get('.item').should('have.not.text', text1).and('have.not.text', text2).and('have.not.text', text3);

     ///////////////////////////////////////////////////////////////////////////////////////////////

});       

it('After all the three check boxes are unchecked, they are automatically checked',() => {
  cy.visit('');

  cy.get('[data-testid=category-filters]').within(() => {
    RACING_CATEGORIES.forEach((category) => {
      cy.get(`[data-testid=category-filter-${category.categoryId}]`).within(() => {
        cy.get('[data-testid=category-filter-checkbox]').click();
         
      });
    })
    cy .wait(10000);  
    cy .log("All the three check boxes are unchecked")      
    RACING_CATEGORIES.forEach((category) => {
      cy.get(`[data-testid=category-filter-${category.categoryId}]`).within(() => {
         cy.get('[data-testid=category-filter-checkbox]').should('be.checked');
            
      });
    })

  });
});


it('After all the three check boxes are unchecked, they remain same --fails(negative scenario)',() => {
  cy.visit('');

  cy.get('[data-testid=category-filters]').within(() => {
    RACING_CATEGORIES.forEach((category) => {
      cy.get(`[data-testid=category-filter-${category.categoryId}]`).within(() => {
        cy.get('[data-testid=category-filter-checkbox]').click();

      });
    })
    cy .wait(10000);  
    cy .log("All the three check boxes are unchecked")      
    RACING_CATEGORIES.forEach((category) => {
      cy.get(`[data-testid=category-filter-${category.categoryId}]`).within(() => {
         cy.get('[data-testid=category-filter-checkbox]').should('be.unchecked');
        
      });
    })

  });
});


})
  


