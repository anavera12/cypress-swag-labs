describe('Teste focado na interface de login', () => {
    /*
    Separei esse arquivo para mostrar diferentes formas de login 
    para possíveis situações
    */


    it('Login focado na interface UI', () => {
        cy.visit('/')

        cy.get('[data-test="username"]').type(Cypress.env('username'))
        cy.get('[data-test="password"]').type(Cypress.env('password'))

        cy.get('[data-test="login-button"]').click()

        cy.contains('Add to cart').should('be.visible')

        //interessante para validar a interfacce pensando na experiência do usuário
    });

    it('Login focado na funcionalidade', () => {
        cy.request({

            method: 'GET',
            url: ('/'),
            form: true,
            body: {
                username: Cypress.env('username'),
                password: Cypress.env('password'),
            },

        }).then((response) => {

            if (response.status === 200) { }
        }),

            cy.log('Login success!')

        //forma mais direta de validar, e mais focada no funcional da interface/api
    });

    it('Login restaurando cookie', () => {
        cy.session(["username", "password"], () => {

            cy.visit('/')

            cy.get('[data-test="username"]').type(Cypress.env('username'))
            cy.get('[data-test="password"]').type(Cypress.env('password'))

            cy.get('[data-test="login-button"]').click()

            cy.wait(5000)

            // cy.waitUntil(() =>

            //     cy.contains('Add to cart').then($el => $el.is(':visible')), {

            //     timeout: 12000,
            //     interval: 500
            // }) 

            //cy.waitUntil também é uma opção para interfaces de maior lentidão, trás o benefício de ser mais adaptável 
            //que o cy.wait estático, como não é o caso desse teste, fui pelo cy.wait mesmo.
        })
    });
});