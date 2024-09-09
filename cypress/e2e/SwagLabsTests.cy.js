
//Test1
describe('Site SwagLabs', () => {

    it('wrong username or password', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('nobody_ishere');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click(); // login 

        cy.get('[data-test="error"]').should('be.visible'); // assertion
        
})

})

//Test2
describe('SiteSwagLabs', () => {

    it('login user standard', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click(); // login 
    
    cy.get('[data-test="shopping-cart-link"]').should('be.visible'); // assertion

    })
})

//Test3
describe('SiteSwagLabs', () => {

    it('logout', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click(); // login 
    cy.get('[data-test="logout-sidebar-link"]').click({force: true});

    cy.get('[data-test="username"]').should('be.visible'); // assertion
    
    })

})

//Test4
describe('SiteSwagLabs', () => {

    it('opening and closing of the sided menu', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click(); // login 
    cy.get('#react-burger-menu-btn').click();

    cy.get('[data-test="inventory-sidebar-link"]').should('be.visible'); // 1st assertion : sided menu opens
    
    cy.get('#react-burger-cross-btn').click();
    cy.get('[data-test="title"]').should('exist'); // 2nd assertion : sided menu closes
    
    })
}) 

//Test5
describe('SiteSwagLabs', () => {

    it('adding a product in the shopping cart', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click(); // login 
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'). click();
    cy.get('[data-test="shopping-cart-link"]').click();
    
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible'); // assertion

    })
})

//Test6
describe('SiteSwagLabs', () => {

    it('deleting a product from the shopping cart', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click(); // login 
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'). click();
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    
    cy.get('[data-test="inventory-item"]').should('not.exist'); // assertion

    })
})

//Test7
describe('SiteSwagLabs', () => {

    it('ordering a product', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click(); // login 
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'). click();
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="checkout"]').click();
    
    cy.get('[data-test="firstName"]').type('AAAA'); // information about the receiver
    cy.get('[data-test="lastName"]').type('BBBB');
    cy.get('[data-test="postalCode"]').type('1111');
    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="title"]').should('be.visible'); // assertion
    
    })
})

//Test8
describe('SiteSwagLabs', () => {

    it('details of a product', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click(); // login 
    cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click();
    
    cy.get('[data-test="inventory-container"]').should('be.visible'); // assertion

    })
})

//Test9
describe('SiteSwagLabs', () => {

    it('the button "Back to products" leads to main page', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click(); // login 
    cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click();
    cy.get('[data-test="back-to-products"]').click();

    cy.get('[data-test="title"]').should('be.visible'); // assertion
    
    })
})