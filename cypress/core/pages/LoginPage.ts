// @ts-ignore
import PostsPage from '../../core/pages/PostsPage';

class LoginPage {
    visit() {
        cy.visit('/auth');
    }

    getUserNameLabel() {
        return cy.get('form .bp3-form-group:nth-child(1) label');
    }

    getPasswordLabel() {
        return cy.get('form .bp3-form-group:nth-child(2) label');
    }

    getNameField() {
        return cy.get("input[name='name']");
    }

    getPasswordField() {
        return cy.get("input[name='password']");
    }

    getSubmitButton() {
        return cy.get("button[type='submit']");
    }

    clickSubmitButton() {
        this.getSubmitButton().click();
    }

    submit() {
        this.clickSubmitButton();
        return PostsPage;
    }

    getValidationError() {
        return cy.get('.bp3-form-helper-text');
    }

    fillName(value: string) {
        this.getNameField().clear().type(value);
        return this;
    }

    fillPassword(value: string) {
        this.getPasswordField().clear().type(value);
        return this;
    }
}

export default LoginPage;
