import { RequestLogger } from "testcafe";

export const conversionLogger = RequestLogger(/cash-conversion-api.dev-tester.com\/exchange_rates\/convert/, {
    logRequestHeaders: true,
    logRequestBody: true,
    logResponseBody: true,
    logResponseHeaders: true,
});