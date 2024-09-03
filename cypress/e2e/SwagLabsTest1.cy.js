describe('Site SwagLabs', () => {

    it('user sau parola gresita', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('nobody_ishere');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click(); // login 

        cy.get('[data-test="error"]').should('be.visible'); //assertion
        
})

})
