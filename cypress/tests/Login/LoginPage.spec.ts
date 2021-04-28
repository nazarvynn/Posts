describe('Login Page', () => {
    const nameField = "input[name='name']";
    const passwordField = "input[name='password']";
    const submitButton = "button[type='submit']";

    beforeEach(() => {
        cy.visit('/');
    });

    it('should load the login popup correctly', () => {
        cy.get('h4.text-center').should('have.text', 'Login');
        cy.get('form .bp3-form-group:nth-child(1) label').should('have.text', 'User name ');
        cy.get('form .bp3-form-group:nth-child(2) label').should('have.text', 'Password ');
        cy.get('form .bp3-form-group:nth-child(1) input').should('be.empty');
        cy.get('form .bp3-form-group:nth-child(2) input').should('be.empty');
        cy.get(submitButton).should('be.enabled');
    });

    it('should not allow login when username is not provided', function () {
        cy.get(passwordField).type('password1');
        cy.get(submitButton).click();
        /*
        expected undefined to have a length of 1 but got 0
        https://github.com/cypress-io/cypress/issues/6678
         */
        // cy.get("input[name='name']:invalid").should('have.length', 1); - fails
        // cy.get('[name="name"]').then(($input) => {
        //     // @ts-ignore
        //     expect($input[0].validationMessage).to.eq('Required') //???????
        // })
        cy.get('.bp3-form-helper-text').should('have.text', 'Required');
    });

    it('should not allow login when password is not provided', function () {
        cy.get(nameField).type('admin');
        cy.get(submitButton).click();
        /*
        expected undefined to have a length of 1 but got 0
        https://github.com/cypress-io/cypress/issues/6678
         */
        // cy.get("input[name='name']:invalid").should('have.length', 1); - fails
        // cy.get('[name="password"]').then(($input) => {
        //     // @ts-ignore
        //     expect($input[0].validationMessage).to.eq('Required') //???????
        // })

        cy.get('.bp3-form-helper-text').should('have.text', 'Required');
    });

    it('should contain correct input field values', () => {
        cy.get(nameField).type('admin');
        cy.get(nameField).should('have.value', 'admin');
        cy.get(passwordField).type('password1');
        cy.get(passwordField).should('have.value', 'password1');
        cy.get(passwordField).should('not.have.value', 'blahblah');
    });
});
