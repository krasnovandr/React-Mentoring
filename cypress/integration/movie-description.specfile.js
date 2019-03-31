describe('Movie Description Page', function () {
    it('verify that movies description opens with details about the film', function () {
        cy.visit('#/movies/962');
       
        cy.contains('The Gold Rush')
        cy.contains('95 min')
        cy.contains('1925')
        cy.contains('7.8')
        cy.contains('A lone prospector ventures into Alaska looking for gold. He gets mixed up with some burly characters and falls in love with the beautiful Georgia. He tries to win her heart with his singular charm.')

        cy.get('[data-testid=movies-list]').children().should('have.length', 18)
    })
    it('verify that search link redirects to the search screen', function () {
        cy.visit('#/movies/962');
       
        cy.get('[data-testid=search-link]').click()
        cy.url().should('include', '/search')
    })
})