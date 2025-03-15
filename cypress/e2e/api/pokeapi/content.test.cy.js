/// <reference types="cypress" />

describe('Validate Content', () => {
    it('Successfully validate content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('pokemon')
        cy.get('@pokemon').its('body').should('include', {name: "bulbasaur"})
    });
})