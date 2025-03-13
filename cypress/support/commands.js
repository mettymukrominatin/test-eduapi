// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('LoginViaAPI', () => {    
    // Cari user dengan fixtures
    cy.fixture('postAPI').then(userapi => {
        // Akses URL
        const apiUrl = 'https://reqres.in/api';

        // Req login ke API
        cy.request("POST", `${apiUrl}/login`, {
            email: userapi.email,
            password: userapi.password,
          }).then((response) => {
            // Validasi req berhasil
            expect(response.status).to.eq(200);

            // Simpan cookie dalam token
            cy.setCookie('authToken', response.body.token);
            
            // Baca log kalau token tersimpan
            cy.log("Token:", response.body.token);

            // cy.setCookie('sessionId', response.body.sessionId)
            // cy.setCookie('userId', response.body.userId)
            // cy.setCookie('userName', response.body.userName)
        })
    })
})