/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to uthentiricate user.
         * @example cy.authUser()
         */
        authUser(isAdmin?: boolean): void;
    }
}