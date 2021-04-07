import { Environment, Network, RecordSource, Store } from 'relay-runtime';

async function fetchGraphQL(text: any, variables: any) {
    const URL = 'https://graphqlzero.almansi.me/api';
    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: text,
            variables,
        }),
    });
    return await response.json();
}

async function fetchRelay(params: any, variables: any) {
    return fetchGraphQL(params.text, variables);
}

// Export a singleton instance of Relay Environment configured with our network function:
export default new Environment({
    network: Network.create(fetchRelay),
    store: new Store(new RecordSource()),
});
