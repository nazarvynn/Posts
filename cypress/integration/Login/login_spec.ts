export {};

describe('The Home Page', () => {
    it('successfully loads', () => {
        cy.visit('/');

        cy.contains('Login');

        cy.get('input[name="name"]').type('admin');
        cy.get('input[name="password"]').type('password1');
        cy.get('button[type="submit"]').click();

        cy.contains('Posts');
    });
});
