import { Page } from '../../core/enums';

describe('Main Navigation', () => {
    beforeEach(() => {
        cy.authUser(true);
    });

    afterEach(() => {
        cy.logout();
    });

    it('should navigate correctly', () => {
        cy.navigateTo(Page.CREATE_POST);
        cy.url().should('eq', 'http://localhost:3000/add-post');

        cy.navigateTo(Page.USERS);
        cy.url().should('contain', 'users');
        cy.location('pathname').should('eq', '/users');
    });
});
