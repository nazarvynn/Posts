// type definitions for custom commands
/// <reference types="../../support" />

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
