describe('Testing React App', function() {
    it('Open local site ', function() {
        cy.visit('http://localhost:3000/')
        cy.get('.user-name').contains('none')
    })

    it('Test a item is visible', function() {
        cy.visit('http://localhost:3000/')
        cy.get('.App-intro').should('be.visible')
    })

    it('Test Button', function() {
        cy.visit('http://localhost:3000/')
        cy.get('.get-button').click()
        cy.get('.user-name').contains('duvan monsa')
    })

})