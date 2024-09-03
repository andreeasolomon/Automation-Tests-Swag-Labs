describe('SiteSwagLabs', () => {

    it('pagina cu detaliile unui produs', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click(); // login 
    cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click();
    
    cy.get('[data-test="inventory-container"]').should('be.visible'); //assertion

    })
})
