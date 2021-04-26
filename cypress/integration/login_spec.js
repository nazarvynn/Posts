describe('The Home Page', () => {
    it('successfully loads', () => {
        // eslint-disable-next-line no-undef
        cy.visit('/');

        // eslint-disable-next-line no-undef
        cy.get('input[name="name"]').type('admin');
        // eslint-disable-next-line no-undef
        cy.get('input[name="password"]').type('password1');
        // eslint-disable-next-line no-undef
        cy.get('button[type="submit"]').click();
    });
});
