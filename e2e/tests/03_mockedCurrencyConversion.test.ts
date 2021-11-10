import config from '../utils/config'
import * as homePage from '../actions/ui/homePage.ui.actions'
import * as mocks from '../mocks/currencyConversion.mock'

// Test to demonstrate how mocks can be utilized within e2e tests

fixture('Currency conversion with mocks').page(config.baseUrl)

test.requestHooks(mocks.conversionMock)(
    'Verify success message on currency conversion with service mock',
    async () => {
        // Given
        await homePage.assertHomePage()
        await homePage.setFromCurrency('100', 'Euro')
        await homePage.setToCurrency('Japanese Yen')
        // When
        await homePage.convertCurrency()
        // Then
        await homePage.verifyConversion('100 Euro is about 11910.35 Japanese Yen')
    },
)