describe('SiteSwagLabs', () => {

    it('adaugarea unui produs in cosul de cumparaturi', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click(); // login 
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'). click();
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    
    cy.get('[data-test="inventory-item"]').should('not.exist'); //assertion

    })
})