import Chance from "chance";
import currencyConverterPage from "../../page-objects/currencyConverterPage";

describe('Currency converter tests', () => {
    it('Positive: Check that convert currency is correct ', () => {
        cy.log('Opening start page of currency converter')
        currencyConverterPage.openConverterPage()
        cy.log('Enter base currency and random currency in converter fields')
        currencyConverterPage.enterFirstCurrencyValues
        currencyConverterPage.enterSecondCurrencyValue
        currencyConverterPage.clickOnConvertButton()
    });
})