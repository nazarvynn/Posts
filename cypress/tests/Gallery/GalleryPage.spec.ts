// type definitions for custom commands
/// <reference types="../../support" />
/// <reference no-default-lib="true"/>
import { Page } from '../../core/enums';

describe('Gallery Page', () => {
    beforeEach(() => {
        cy.authUser(true);
        cy.navigateTo(Page.GALLERY);
    });
    afterEach(() => {
        cy.logout();
    });

    it('should load more pictures', () => {
        cy.get('.d-block img').should('have.length', 24);
        cy.get('.btn-primary').click();
        cy.get('.d-block img').should('have.length', 48);
    });

    it('should have image thumbnail style', () => {
        cy.get(':nth-child(1) > .d-block > .img-fluid')
            .should('be.visible')
            //.and(([$photo, $photo2]) => {
            .and(([$photo]) => {
                //деструктуризація
                // "naturalWidth" and "naturalHeight" are set when the image loads
                expect($photo.naturalWidth).to.be.greaterThan(0);
                expect($photo.naturalHeight).to.be.equal(150);
                expect($photo.height).to.be.equal(127);
                expect($photo.width).to.be.equal(127);
            });
    });
});

export {};
