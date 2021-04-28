describe('About Page', () => {
    beforeEach(() => {
        cy.authUser();
    });

    afterEach(() => {
        cy.logout();
    });

    it("should have 'About' content", () => {
        cy.visit('/about');

        cy.contains('About');
    });
});

export {};
