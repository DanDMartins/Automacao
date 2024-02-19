describe('Funcionalidade Cadastro', () => {
  it('Validar Cadastro feito com sucesso', () => {
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')
    cy.get(':nth-child(2) > td > input').type('usuario')
    cy.get(':nth-child(4) > td > input').type('senha')
    cy.get(':nth-child(6) > td > input').type('Jose')
    cy.get('td > .btn').click()
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text', 'Jose')
    
  })

  it('Validar apagar usuario', () => {
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text', 'Jose')
    cy.get(':nth-child(2) > :nth-child(5) > a').click()

    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('not.have.text', 'Jose')
  })

  it('Validar cadastro sem informar usuario', () => {
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')
    
    cy.get(':nth-child(4) > td > input').type('senha')
    cy.get(':nth-child(6) > td > input').type('Jose')
    cy.get('td > .btn').click()
    cy.get('input[name="form_usuario"]').should('have.attr', 'required');
  })
  it('Validar cadastro sem informar senha', () => {
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')
        
    cy.get(':nth-child(6) > td > input').type('Jose')
    cy.get('td > .btn').click()
    cy.get('input[name="form_senha"]').should('have.attr', 'required');
  })

  it('Validar cadastro sem informar nome', () => {
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')
    cy.get(':nth-child(2) > td > input').type('usuario')
    cy.get(':nth-child(4) > td > input').type('senha')
    cy.get('td > .btn').click()
    cy.get(':nth-child(7) > td').should('have.text', 'Existem campos em branco. ')
    
  })
})