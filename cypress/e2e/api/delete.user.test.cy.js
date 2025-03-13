/// <reference types="cypress" />

describe('Delete User List', () => {
    it('Succesfully deleted user', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/2'
        }).then((response) => {
        
        // Validasi data dapat dihapus status 204
        expect(response.status).to.eq(204)
        })
    });
});