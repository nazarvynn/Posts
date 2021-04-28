/// <reference types="cypress" />

import { Page } from './core/enums';

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Custom command to authenticate user.
             * @example cy.authUser()
             */
            authUser(isAdmin?: boolean): void;

            logout(): void;

            navigateTo(page: Page): void;
        }
    }
}
