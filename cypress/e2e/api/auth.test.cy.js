/// <reference types="cypress" />

describe('Basic Auth', () => {
    it('Succesfully login by appending username and password in URL', () => {
        // Menggunakan admin:admin karena method GET pada postman
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    });

    it('Succesfully login using headers', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            headers: {
                authorization: 'Basic YWRtaW46YWRtaW4='
            },
            failOnStatusCode: false
        });
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    });
});