describe('Authenticate User', () => {
    afterEach(() => {
        cy.logout();
    });

    it('should successfully load posts', () => {
        cy.visit('/');

        cy.contains('Login');

        cy.get('input[name="name"]').type('admin');
        cy.get('input[name="password"]').type('password1');
        cy.get('button[type="submit"]').click();

        cy.contains('Posts');
    });
});
