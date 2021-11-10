import { fixture, t } from "testcafe";
import config from "../utils/config";

// Sample test showcasing before and after hooks and context variables

fixture('Fixture name')
    .page(config.baseUrl)
    .before(async (ctx) => {
        console.log('---------------INSIDE FIXTURE BEFORE ALL-----------------')

        ctx.beforeFixtureVariable = 'beforeFixtureVariable'
        console.log(`creating asset ${ctx.beforeFixtureVariable}`)
    })
    .after(async (ctx) => {
        console.log('---------------INSIDE FIXTURE AFTER ALL-----------------')

        console.log(`Deleting asset ${ctx.beforeFixtureVariable}`)
    })
// `.beforeEach` and `.afterEach` hooks can also be attached to a fixture,
// but they will override the `test.before` and `test.after` hooks

test
    .before(async () => {
        console.log('---------------INSIDE BEFORE TEST-----------------')

        console.log(`Getting the asset ${t.fixtureCtx.beforeFixtureVariable}`)

        t.ctx.beforeTestVariable = 'beforeTestVariable'
        console.log(`Creating a folder ${t.ctx.beforeTestVariable}`)

    })
    .after(async () => {
        console.log('---------------INSIDE AFTER TEST-----------------')

        console.log(`Deleting the folder ${t.ctx.beforeTestVariable}`)
    })('Test name', async () => {
        console.log('---------------INSIDE TEST-----------------')

        console.log(`Getting the asset ${t.fixtureCtx.beforeFixtureVariable}`)
        console.log(`Getting the folder ${t.ctx.beforeTestVariable}`)
    })