describe('Cypress', () => {   
    it('is working', () => {     
        expect(true).to.equal(true)   
    }) 
    
    it('opens the app', () => {   
        cy.visit('http://localhost:3000') 
    })
    
    it('it has a button', () => {
       cy.get('button').should('have.value', '3')
    })

    it('click on button start the game', () => {
       cy.get('button').click()
       cy.get('div').should('have.class', 'cardboard')
    })
})