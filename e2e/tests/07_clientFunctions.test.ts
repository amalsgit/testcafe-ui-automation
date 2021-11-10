import { getCurrentLocation } from '../utils/clientFunctions'
import config from '../utils/config'

// This test is to demonstrate how to run a simple Client Function using TestCafe

fixture('Client Function').page(config.baseUrl)

test('Check the ClientFunction', async () => {
    console.log(await getCurrentLocation())
})