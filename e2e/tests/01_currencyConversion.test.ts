import config from '../utils/config'
import * as homePage from '../actions/ui/homePage.ui.actions'

fixture('Currency conversion').page(config.baseUrl)

// A normal automated test

test('Verify success message on currency conversion', async () => {
    // Given
    await homePage.setFromCurrency('100', 'Euro')
    await homePage.setToCurrency('Japanese Yen')
    // When
    await homePage.convertCurrency()
    // Then
    await homePage.verifyConversion('100 Euro is about 12085.58 Japanese Yen')
})