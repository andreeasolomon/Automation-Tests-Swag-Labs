describe('SiteSwagLabs', () => {

    it('logare user standard', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click(); // login 
    
    cy.get('[data-test="shopping-cart-link"]').should('be.visible'); //assertion

    })
})