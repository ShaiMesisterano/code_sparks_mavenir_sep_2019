import * as API from './dist/api/apis';

async function init() {
    const partiesApi = new API.PartiesApi();
    const parties = await partiesApi.listParties();
    console.log("parties", parties.body);
}
init();