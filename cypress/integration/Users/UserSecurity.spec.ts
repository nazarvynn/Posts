// type definitions for custom commands
/// <reference types="../../support" />

describe('User Security', () => {
    it('should show admin specific content', () => {
        cy.authUser(true);
        cy.visit('/');
        cy.get('.nav-item:nth-child(1) a').should('be.visible');
        cy.get('.nav-item:nth-child(2) a').should('have.text', 'Create Post');
        cy.get('.nav-item:nth-child(3) a').should('contain.text', 'Gal');
        cy.get('.nav-item').should('have.length', '6');
        cy.get('.nav-item').should('not.have.length', '5');
        cy.get('.nav-item').get(':nth-child(4)').next().should('have.text', 'About');
        cy.get('.nav-item').get(':nth-child(4)').prev().should('have.text', 'Gallery');
        cy.get('.nav-item').last().should('have.text', 'adminadmin@test.comlogout');
        cy.get('.nav-item').first().should('have.text', 'Home');
    });

    it('should show observer specific content', () => {
        cy.authUser();
        cy.visit('/');
        cy.get('.nav-item').should('have.length', '4');
    });
});

export {};
