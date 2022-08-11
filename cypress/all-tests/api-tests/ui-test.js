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


// describe('Test for google buds', () => {
//     it('Positive: Create user', () => {
//         cy.visit('https://store.google.com/us/collection/accessories_wall?hl=en-US')
//         cy.get('div[data-test="header-search"]').click()
//         cy.get('input[placeholder="Search Google Store"]').type(`Google Pixel Buds{enter}`)
//         cy.get('h3[class="category-text-description"]').should("exist")
//
//     })
// })
