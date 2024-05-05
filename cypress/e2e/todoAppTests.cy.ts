describe('Automated tests for todos app', () => {
  beforeEach(()=>{
    cy.visit("https://todomvc.com/examples/react/dist/")
})

// To verify that all the important assets exists and visible in the page
  it('Page assets visibility', () => {
    cy.get('h1').should('be.visible').contains('todos')
    cy.get('#todo-input').should('be.visible')
    cy.get("input[placeholder]").invoke('attr', 'placeholder').should('eq','What needs to be done?')
  })
})