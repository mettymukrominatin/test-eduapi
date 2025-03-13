/// <reference types="cypress" />

describe('PUT Update User', () => {
    it('Succesfully update user', () => {
        var user = {
            "name" : "Metty Ken M Update",
            "job" : "QA Update"
        }
        cy.request('PUT', 'https://reqres.in/api/users/2', user).then((response) => {
            expect(response.status).to.eq(200)

            // Jika respon memiliki satu data
            expect(response.body.name).to.eq(user.name)

            // Jika respon memiliki banyak data dan memanggil data email
            // expect(response.body.data.email)
            // bisa liat dari JSON Path Finder
        })
    })
    
});