// type definitions for custom commands
/// <reference types="../../support" />

describe('About Page', () => {
    beforeEach(() => {
        cy.authUser();
    });

    it('has about contet', () => {
        cy.visit('/about');

        cy.contains('About');
    });
});

export {};
