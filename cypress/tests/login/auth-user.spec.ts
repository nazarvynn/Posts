import LoginPage from '../../core/pages/LoginPage';

describe('Authenticate User', () => {
    const loginPage = new LoginPage();

    afterEach(() => {
        cy.logout();
    });

    it('should successfully load posts', () => {
        cy.visit('/');

        cy.contains('Login');

        loginPage.fillName('admin');
        loginPage.fillPassword('password1');
        loginPage.submit();

        cy.contains('Posts');
    });
});
