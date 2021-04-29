import LoginPage from '../../core/pages/LoginPage';

describe('Login Page', () => {
    const loginPage = new LoginPage();

    beforeEach(() => {
        cy.visit('/auth');
    });

    it('should load the login popup correctly', () => {
        cy.get('h4.text-center').should('have.text', 'Login');
        loginPage.getUserNameLabel().should('have.text', 'User name ');
        loginPage.getPasswordLabel().should('have.text', 'Password ');
        loginPage.getNameField().should('be.empty');
        loginPage.getPasswordField().should('be.empty');
        loginPage.getSubmitButton().should('be.enabled');
    });

    it('should not allow login when username is not provided', function () {
        loginPage.getPasswordField().type('password1');
        loginPage.clickSubmitButton();
        /*
        expected undefined to have a length of 1 but got 0
        https://github.com/cypress-io/cypress/issues/6678
         */
        // cy.get("input[name='name']:invalid").should('have.length', 1); - fails
        // cy.get('[name="name"]').then(($input) => {
        //     // @ts-ignore
        //     expect($input[0].validationMessage).to.eq('Required') //???????
        // })
        loginPage.getValidationError().should('have.text', 'Required');
    });

    it('should not allow login when password is not provided', function () {
        loginPage.getNameField().type('admin');
        loginPage.clickSubmitButton();
        loginPage.getValidationError().should('have.text', 'Required');
    });

    it('should contain correct input field values', () => {
        loginPage.getNameField().type('admin');
        loginPage.getNameField().should('have.value', 'admin');
        loginPage.getPasswordField().type('password1');
        loginPage.getPasswordField().should('have.value', 'password1');
        loginPage.getPasswordField().should('not.have.value', 'blahblah');
    });
});
