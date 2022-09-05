import currency from '../fixtures/currency.json'

class CurrencyConverterPage {

    randomRate = 0;

    openConverterPage() {
        cy.visit(`${Cypress.env('currencyConverterURL')}`);
        cy.contains('Accept').click()
    }

    get enterFirstCurrencyValues() {
        return cy.get('input[id="midmarketFromCurrency"]').type(`${currency.base}{enter}`)
    }

        enterSecondCurrencyValue() {
        let ratesArray = currency.rates;
        let rateLength = ratesArray.length
        this.randomRate = chance.integer({min : 0, max: rateLength})
        cy.get('input[id="midmarketToCurrency"]').type(`${ratesArray[this.randomRate].shortName}{enter}`)
    }

    clickOnConvertButton(){
        cy.get('button[class="button__BaseButton-sc-1qpsalo-0 clGTKJ"]').contains('Convert').click()
    }


}

export default new CurrencyConverterPage()