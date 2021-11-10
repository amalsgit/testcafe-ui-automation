import { Selector, t } from 'testcafe'

// Selectors

const conversionHome = Selector('#__next').withText('Cash Conversion')
const conversionValue = Selector('#base_amount')
const fromCurrency = Selector('#from_currency')
const fromCurrencyOptions = fromCurrency.find('option')
const toCurrency = Selector('#to_currency')
const toCurrencyOptions = toCurrency.find('option')
const conversionMsg = Selector('.conversion-response')
const convertBtn = Selector('#convert_btn')

// Actions

export const setFromCurrency = (amount: string, currency: string) =>
    t
        .typeText(conversionValue, amount, { replace: true })
        .click(fromCurrency)
        .click(fromCurrencyOptions.withText(currency))

export const setToCurrency = (currency: string) =>
    t
        .click(toCurrency)
        .click(toCurrencyOptions.withText(currency))

export const convertCurrency = () =>
    t.expect(convertBtn.visible).ok().click(convertBtn)

// Assertions

export const verifyConversion = (confirmationMsg: string) =>
    t.expect(conversionMsg.innerText).eql(confirmationMsg)

export const assertHomePage = () => t.expect(conversionHome.exists).ok()