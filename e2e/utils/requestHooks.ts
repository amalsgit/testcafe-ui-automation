import { RequestHook } from 'testcafe';

// Request hook to intercept all api calls and perform custom operations
export class conversionHook extends RequestHook {
    constructor(requestFilterRules: any) {
        super(requestFilterRules);
    }

    async onRequest(event: { requestOptions: { headers: any; }; }) {
        console.log("what an awesome request")
        console.log(`request headers are: ${JSON.stringify(event.requestOptions.headers)}`)
    }

    async onResponse() { }
}