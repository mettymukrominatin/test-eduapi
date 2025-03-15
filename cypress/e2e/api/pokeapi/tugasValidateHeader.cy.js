/// <reference types="cypress" />

describe('Validate Response Body', () => {
    it('Successfully validate respon body abilities', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('pokemon')

        cy.get('@pokemon').then((response) => {
            // Validasi response memiliki abilities
            expect(response.body).to.have.property('abilities');

            // Validasi abilities tidak kosong
            expect(response.body.abilities).to.have.length.greaterThan(0);
        });
    });
})