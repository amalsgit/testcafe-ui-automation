import { RequestMock } from 'testcafe'
import config from '../utils/config'

export const conversionMock = RequestMock()
conversionMock
    .onRequestTo(
        `${config.apiUrl}/exchange_rates/convert`,
    )
    .respond(
        {
            baseAmount: '100',
            conversion: '11910.35',
            fromCurrency: 'Euro',
            toCurrency: 'Japanese Yen',
        },
        200,
        {
            'Access-Control-Allow-Origin': `${config.baseUrl}`,
            'Access-Control-Allow-Headers': 'content-type,key-inflection',
            'Access-Control-Allow-Methods': 'POST',
        },
    )