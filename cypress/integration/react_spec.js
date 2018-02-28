describe('Testing React App', function() {
    it('Open local site ', function() {
        cy.visit('http://localhost:3000/')
        cy.get('.App-intro').contains('Testing Code')
    })

    it('Test a item is visible', function() {
        cy.visit('http://localhost:3000/')
        cy.get('.App-intro').should('be.visible')
    })
})