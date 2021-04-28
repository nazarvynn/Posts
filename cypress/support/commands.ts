// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import { ADMIN_USER, OBSERVER_USER } from '../fixtures/users';

Cypress.Commands.add('authUser', (isAdmin?: boolean) => {
    window.sessionStorage.setItem('nv:auth-user', JSON.stringify(isAdmin ? ADMIN_USER : OBSERVER_USER));
});

Cypress.Commands.add('logout', () => {
    window.sessionStorage.removeItem('nv:auth-user');
});
