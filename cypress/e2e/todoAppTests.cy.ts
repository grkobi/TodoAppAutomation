describe('Automated tests for todos app', () => {
  beforeEach(() => {
    cy.visit("https://todomvc.com/examples/react/dist/")
  })

  // To verify that all the important assets exists and visible in the page
  it('Page assets visibility', () => {
    cy.get('h1').should('be.visible').contains('todos') // check if title exists and visible in the page
    cy.get('#todo-input').should('be.visible') //check if input field exists and visible in the page
    cy.get("input[placeholder]").invoke('attr', 'placeholder').should('eq', 'What needs to be done?') // check if placeholder exists
  })

  // Add a new todo to the list
  it('Add todo', () => {
    const newTodo = 'take the dog out';
    cy.get('#todo-input').should('be.visible').type(newTodo + '{enter}') //add todo
    cy.get('li[data-testid]').last().should('contain', newTodo) // check if the todo was added at the end of the list
  })

  it('Apply filters', () => {
    cy.addTwoTodos() // Call addTodo function in order to add 2 todos
    cy.get('input.toggle').last().click() // mark this todo as completed 
    cy.get('ul.filters > li').eq(1).should('contain', 'Active').click() // apply active filter
    cy.get('li.completed').should('not.exist') // check if the completed todo doesn't exist
  })

  it('Clear completed', () => {
    cy.addTwoTodos() // Call addTodo function in order to add 2 todos
    cy.get('input.toggle').last().click() // mark the last todo as completed 
    cy.get('button.clear-completed').click() // click on clear completed action
    cy.get('li[data-testid]').last().not("have.class", "completed") //verify that the completed action is removed
  })

  it.only('Remove a todo', () => {
    cy.addTwoTodos() // Call addTodo function in order to add 2 todos
    cy.get('button.destroy').first().realHover().click({force: true}) // Get the first todo and delete it
    cy.get('button.destroy').should('have.length', 1) // Verifying only 1 todo left
  })

})

