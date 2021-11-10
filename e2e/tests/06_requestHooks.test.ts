/* eslint-disable no-console */
import { RequestLogger, t } from 'testcafe';
import * as homePage from '../actions/ui/homePage.ui.actions'
import config from '../utils/config'
import * as requestLogger from '../utils/requestLogger'
import * as requestHooks from '../utils/requestHooks';

// This test is demonstrate how TestCage request hook can be use to intercept api calls happening in the application.
// We can modify the request or response params or even have other async functions run while intercepting an API

fixture('Log all network calls').page(config.baseUrl);

test(
    'Should be able to log all network calls during currency conversion',
    async () => {

        const conversionHook = new requestHooks.conversionHook(/cash-conversion-api.dev-tester.com\/exchange_rates\/convert/);
        await t.addRequestHooks(conversionHook);

        // Given
        await homePage.setFromCurrency('100', 'Euro');
        await homePage.setToCurrency('Japanese Yen');
        // When
        await homePage.convertCurrency();
        // Then check the console log for the requestHook output
    },
);