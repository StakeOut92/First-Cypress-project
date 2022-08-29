class SearchResultsPage{



    getProductById(){
        return cy.get('h3[class="category-text-description"]');
    }
}
export default new SearchResultsPage();