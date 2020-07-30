describe('Dummy test', () => {
    describe('Dummy test', () => {
      it('Dummy test', () => {
        expect(true).to.equal(true);

      })
    })
  })
  describe('The home page', () => {
    describe('when visited', () => {
      it('it should open', () => {
        cy.visit('https://example.cypress.io')

      })
    })
  })
  describe('check button click functionalities', () => {
    describe('when visited', () => {
      it('it should open', () => {
       // cy.get('button').click()
       /// 
       cy.visit('file:///C:/Users/tarun/Downloads/ui-test-assessment-master/ui-test-assessment-master/employees.html')
       cy.get('.btn').click() 
       // cy.visit('https://example.cypress.io')
       cy.get('#listBoxContentlistBoxSelected').children().should('have.length', 0)
      })
    })
  })
 