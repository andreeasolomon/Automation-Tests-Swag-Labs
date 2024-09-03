describe('SiteSwagLabs', () => {

    it('logout', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click(); // login 
    cy.get('[data-test="logout-sidebar-link"]').click({force: true});

    cy.get('[data-test="username"]').should('be.visible'); //assertion
    
    })

})