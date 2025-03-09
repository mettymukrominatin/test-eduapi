/// <reference types="cypress" />

describe('Get User List', () => {
    it('Verify the list users will displayed', () => {
        cy.request({
            method: 'GET',
            // url: 'https://reqres.in/api/users?page=2&per_page=1&delay=3'
            url: 'https://reqres.in/api/users'
        }).as('users').then((response) => {
        
        // Validasi data user pertama [0]
        var datauser = response.body.data[0];
        expect(datauser).to.have.property('id');
        expect(datauser).to.have.property('email');
        expect(datauser).to.have.property('first_name');
        expect(datauser).to.have.property('last_name');
        expect(datauser).to.have.property('avatar');
        
        // Validasi data dapat diambil status 200 (Get)
        cy.get('@users').its('status').should('equal', 200)
        })
    });
});