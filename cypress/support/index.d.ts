/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to authenticate user.
         * @example cy.authUser()
         */
        authUser(isAdmin?: boolean): void;

        logout(): void;

        navigateTo(page: string): void;
    }
}
