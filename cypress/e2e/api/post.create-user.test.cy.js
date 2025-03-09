/// <reference types="cypress" />

describe('Post Create New User', () => {
    it('Succesfully create new user', () => {
        // Inisialiasi body
        var user = {
            "name" : "test API",
            "job" : "testing"
        }
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            // Validasi status created (201)
            expect(response.status).equal(201)

            // Validasi response memiliki key dan value sesuai yang ditambahkan
            expect(response.body).to.have.property('name', 'test API')
            expect(response.body).to.have.property('job', 'testing')
        })
    });
});