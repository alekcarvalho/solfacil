describe('Store', () => {
  it('Verify Store Empty', () => {
    cy.visit('/')
    cy.store().its('state.table.list').should('deep.equal', [])
  })
  it('Verify get API', () => {
    cy.request(
      `${Cypress.env('apiUrl')}/5fcf051d-2867-4698-8c1c-df076b4d2948`
    ).should((response) => {
      expect(response.status).to.eq(200)
      expect(response).property('body').to.have.property('cessao')
      expect(response).property('body').to.have.property('detalhes')
    })
  })
  it('Dispatch Action', () => {
    cy.store().invoke('dispatch', 'table/get')
  })
  it('Verify Getters', () => {
    cy.store().its('getters.table/getList').should('have.property', 'cessao')
    cy.store().its('getters.table/getList').should('have.property', 'detalhes')
  })
})

describe('The Home Page', () => {
  it('should visit the home page', () => {
    cy.visit('/')
  })
  it('should see the main table', () => {
    cy.get('.data--table').should('be.visible')
  })
})
