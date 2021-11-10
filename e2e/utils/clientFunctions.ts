import { ClientFunction } from "testcafe";

export const getCurrentLocation = ClientFunction(() => {
    return window.location
})
