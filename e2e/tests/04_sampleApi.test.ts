import config from '../utils/config'
import * as toDoApi from '../actions/api/toDo.api.actions'

// Test to demonstrate how API calls can be made in e2e tests

fixture('Test api calls').page(config.baseUrl)

test('Verify axios get api call', async t => {
    const response = await toDoApi.getToDo()

    console.log(`response is: ${JSON.stringify(response)}`)
})
