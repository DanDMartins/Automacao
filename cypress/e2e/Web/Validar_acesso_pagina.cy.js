describe('Menu 4AllTests', () => {

    it('Validar acesso a pagina HOME', () => {
        cy.visit('http://4alltests.com.br')
    })
    it('Validar acesso a pagina FERRAMENTAS', () => {
        cy.visit('http://4alltests.com.br')
        cy.get('#nav > ul > li.opener > a').trigger('mouseover', {force: true});
        //cy.get('#nav > :nth-child(1) > :nth-child(2) > :nth-child(1)').click()
    })
    it('Validar acesso a pagina EVENTOS', () => {
        cy.visit('http://4alltests.com.br')
        cy.get('#nav > :nth-child(1) > :nth-child(3) > a').click()
    })
    it('Validar acesso a pagina VAGAS', () => {
        cy.visit('http://4alltests.com.br')
        cy.get('#nav > :nth-child(1) > :nth-child(4) > a').click()
    })
    it('Validar acesso a pagina COMUNIDADES', () => {
        cy.visit('http://4alltests.com.br')
        cy.get(':nth-child(1) > :nth-child(5) > a').click()
    })
    it('Validar acesso a pagina CURSOS', () => {
        cy.visit('http://4alltests.com.br')
        cy.get(':nth-child(6) > a').click()
    })
    it('Validar acesso a pagina REFERENCIAS', () => {
        cy.visit('http://4alltests.com.br')
        cy.get(':nth-child(7) > a').click()
    })
    it('Validar acesso a pagina BLOG', () => {
        cy.visit('http://4alltests.com.br')
        cy.get(':nth-child(8) > a').click()
    })
})