describe('template spec', () => {
  it('signup secondpage',()=>{
    cy.visit('/')
    cy.get('a[href="/login"]').should('be.visible')
    cy.get('a[href="/login"]').click()
    cy.get('[data-qa="signup-name"]').type('cypress')
  })
})