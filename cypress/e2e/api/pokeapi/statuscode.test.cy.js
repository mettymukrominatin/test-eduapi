/// <reference types="cypress" />

describe('Validate Status Code', () => {
    it.only('Successfully validate status code', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('status').should('equal', 200)
    });

    it('Successfully validate status code with params', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2&per_page=1&delay=3'
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)
    });
})