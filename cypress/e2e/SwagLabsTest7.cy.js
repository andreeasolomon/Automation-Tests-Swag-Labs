describe('SiteSwagLabs', () => {

    it('comanda a unui produs', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click(); // login 
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'). click();
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="checkout"]').click();
    
    cy.get('[data-test="firstName"]').type('AAAA'); //informatii despre destinatar
    cy.get('[data-test="lastName"]').type('BBBB');
    cy.get('[data-test="postalCode"]').type('1111');
    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="title"]').should('be.visible'); //assertion
    
    })
})