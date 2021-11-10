/* eslint-disable no-console */
import { RequestLogger, t } from 'testcafe';
import * as homePage from '../actions/ui/homePage.ui.actions'
import config from '../utils/config'
import * as requestLogger from '../utils/requestLogger'

// To demonstrate how api calls can be caught and logged

fixture('Log all network calls').page(config.baseUrl);

test.requestHooks(requestLogger.conversionLogger)(
    'Should be able to log all network calls during currency conversion',
    async () => {
        // Given
        await homePage.setFromCurrency('100', 'Euro');
        await homePage.setToCurrency('Japanese Yen');
        // When
        await homePage.convertCurrency();
        // Then
        console.log(requestLogger.conversionLogger.requests.map(r => r.request.url));

        requestLogger.conversionLogger.requests.forEach(async r => {
            if (r.request.method == 'post') {
                console.log(r.response.statusCode)
                await t.expect(r.response.statusCode == 200).ok()
            }
        })
    },
);