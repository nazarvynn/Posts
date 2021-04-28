import { Page } from '../../core/enums';

describe('User Menu', () => {
    beforeEach(() => {
        cy.authUser(true);
        cy.navigateTo(Page.HOME);
    });

    afterEach(() => {
        cy.logout();
    });

    it('should show user menu', () => {
        cy.get('.user-menu').children().should('have.length', 3);
        cy.get('.user-menu').parent().should('have.length', 1);
        cy.get('.user-menu').parents().should('have.length', 10);

        cy.get(':nth-child(1) > .dropdown-item').should('have.text', 'admin@test.com');
        cy.get(':nth-child(3) > .dropdown-item').should('have.text', 'logout');
    });
});
