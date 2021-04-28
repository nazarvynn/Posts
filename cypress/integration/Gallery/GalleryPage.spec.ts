// type definitions for custom commands
/// <reference types="../../support" />
describe('Gallery Page', () => {
    beforeEach(() => {
        cy.authUser(true);
        cy.navigateTo('Gallery');
    });
    afterEach(() => {
        cy.logout();
    });

    it('should load more pictures', () => {
        cy.get('.d-block img').should('have.length', 24);
        cy.get('.btn-primary').click();
        cy.get('.d-block img').should('have.length', 48);
    });
});

export {};
