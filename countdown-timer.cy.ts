import { log } from "console";
import {CountdownTimer} from "../../src/components/CountdownTimer/CountdownTimer";
describe('Countdown Timer', () => {
  it('countdown timer should be on the visible', () => {
    cy.visit('');

    cy.get('.item').each(($item: any) => {
     
        cy.get($item).should('be.visible')
   
    });
        
  });

  it('countdown timer should be changing periodically', () => {
    cy.visit('');

    cy.get('.item').each(($item: any) => {      
        cy.get($item).should('be.visible')
        //cy.clock();
        const time1=cy .clock()
        cy .wait(1000)  //check the time after few seconds
        const time2=cy .clock()

        time1.should('not.equal', time2)

    });
  });

  it('countdown timer remains unchanged----fails(negative scenario)', () => {
    cy.visit('');

    cy.get('.item').each(($item: any) => {      
        cy.get($item).should('be.visible')
        //cy.clock();
        const time1=cy .clock()
        cy .wait(1000)  //check the time after few seconds
        const time2=cy .clock()

        time1.should('equal', time2)

    });
  });

  it('countdown timer should either have minutes or seconds or hours', () => {
    cy.visit('');
    cy.get('.item').each(($item: any) => {      
      cy.get($item).should('be.visible')
      //cy.clock();
      const time1=cy .clock()
      cy .wait(1000)  //check the time after few seconds
      const time2=cy .clock()

      //cy.get($item).contains('m'||'h'||'s');

      cy.get($item).should('have.not.text', 'm').and('have.not.text', 's').and('have.not.text', 'h');
      //cy.get($item).should('have.any.keys', 'h','m','s')
  });
  });
});
