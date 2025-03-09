/// <reference types="cypress" />

describe('API TEST - Validate Header', () => {
    it('Should validate the content-type header', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/25')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json; charset=utf-8');
    });
});