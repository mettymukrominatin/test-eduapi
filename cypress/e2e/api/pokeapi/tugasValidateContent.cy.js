/// <reference types="cypress" />

describe('Validate Response Body', () => {
    it('Successfully validate respon body abilities', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('pokemon')

        cy.get('@pokemon').then((response) => {
            // Validasi response memiliki abilities
            expect(response.body).to.have.property('abilities');

            // Validasi abilities tidak kosong
            expect(response.body.abilities).to.have.length.greaterThan(0);

            // Validasi setiap ability memiliki nama dan url yang valid
            response.body.abilities.forEach((ability) => {
                expect(ability.ability).to.have.property('name');
                expect(ability.ability.name).to.be.a('string');
                expect(ability.ability).to.have.property('url');
                expect(ability.ability.url).to.be.a('string')
                cy.log('Ability:', ability.ability.name);
                cy.log('Ability:', ability.ability.url);
            });

            //expect(response.body.abilities.ability).to.have.property('name')
        });
    });
})