describe('Movies Page', function () {
    it('verify that results of the search matched to the criteria', function () {
        cy.visit('/');
        cy.get('input[id=standard-name]').type('Star Wars')

        cy.get('button[data-testid=search-button]').click()

        cy.get('#sort-by').select('Vote Average')
        cy.get('#order-id').select('Desc')

        cy.get('[data-testid=movies-list]').children().should('have.length', 9)
        cy.contains('Movies Found 9')
        cy.contains('Average Rating 6.20')

    })
    it('verify that not found message will be displayed in case of ivalid criteria', function () {
        cy.visit('/');
        cy.get('input[id=standard-name]').type('123123')
        cy.get('button[data-testid=search-button]').click()
        cy.contains('No Films Found')

    })
    it('verify that redirect will occured in case of link click', function () {
        cy.visit('/');
        cy.get('input[id=standard-name]').type('Star Wars')
        cy.get('button[data-testid=search-button]').click()
        cy.get(':nth-child(1) > .MuiPaper-root-277 > a').click()
        cy.url().should('include', '/movies/962')
    })
})