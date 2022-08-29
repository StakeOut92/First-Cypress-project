import searchResultsPage from "../../page-objects/searchResultsPage"
import accessoriesPage from "../../page-objects/accessoriesPage"


describe('Test for google buds', () => {
    it('Positive: Create user', () => {
        cy.log('Opening start page for google devices')
        accessoriesPage.open();
        cy.log('Searching "Search icon" and click on them ')
        accessoriesPage.searchIcon;
        cy.log('Input text in search tab field')
        accessoriesPage.searchInput;
        cy.log('Check than needed message exist on the page')
        searchResultsPage.getProductById().should('exist')
    })
})

