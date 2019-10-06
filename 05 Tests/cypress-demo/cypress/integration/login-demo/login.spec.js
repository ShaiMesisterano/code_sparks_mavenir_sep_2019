describe('Successful login', function () {
   before(() => {
        cy.visit('http://localhost:8080');
   });

   it('should login', function () {
       cy.log('enter login link');
       cy.contains('log in').click();

        cy.screenshot();

       cy.log('enter login details');
       // cy.get('input').eq(0).type('john');
       cy.get('#username').type('john');
       // cy.get('input').eq(1).type('1234');
       cy.get('#password').type('1234');

       cy.log('clicking submit button');
       cy.get('input').eq(2).click();

       cy.screenshot();

       cy.contains('logout').should('be.visible');

       cy.screenshot();
   });
});