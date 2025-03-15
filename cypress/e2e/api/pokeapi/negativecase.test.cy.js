/// <reference types="cypress" />

describe('Negative Case', () => {
    it('Successfully validate negative case', () => {
        cy.request({
            method: 'GET',
            url: ('https://pokeapi.co/api/v2/pokemon/eduwork'),
            failOnStatusCode: false
        }).as('eduwork')
        cy.get('@eduwork').its('status').should('equal', 404)
    });
})