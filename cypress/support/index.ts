export {}
import "cypress-real-events/support";


declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Logs in E2E user
       * @returns void
       */
      addTwoTodos: () => void;
    }
  }
}