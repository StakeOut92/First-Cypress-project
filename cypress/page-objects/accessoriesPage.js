class AccessoriesPage {
    open() {
        cy.visit(`${Cypress.env('googleUrl')}/collection/accessories_wall?hl=en-US`);
    }

    get searchIcon() {
        return cy.get('div[data-test="header-search"]').click();
    }

    get searchInput(){
        return cy.get('input[placeholder="Search Google Store"]').type(`Google Pixel Buds{enter}`);
    }
}

export default new AccessoriesPage()