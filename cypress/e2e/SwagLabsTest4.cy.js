describe('SiteSwagLabs', () => {

    it('deschidere si inchidere meniu lateral', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click(); // login 
    cy.get('#react-burger-menu-btn').click();

    cy.get('[data-test="inventory-sidebar-link"]').should('be.visible'); //1st assertion : meniul lateral se deschide
    
    cy.get('#react-burger-cross-btn').click();
    cy.get('[data-test="title"]').should('exist'); //2nd assertion : meniul lateral se inchide

    })
}) 
