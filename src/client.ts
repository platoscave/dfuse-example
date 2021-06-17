
// Example provided by defuse
// https://github.com/dfuse-io/docs/blob/master/samples/typescript/eos/stream-action-rates/src/client.ts
// Generic Vue Apollo example:
// https://stackabuse.com/building-graphql-apis-with-vue-js-and-apollo-client
import { WebSocketLink } from "apollo-link-ws";
import { onError } from "apollo-link-error"
import ApolloClient from "apollo-client/ApolloClient";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createDfuseClient } from "@dfuse/client";

const dfuseClient = createDfuseClient({
  network: "eos.dfuse.eosnation.io",
  apiKey: "web_c899883c6398dac8638d146971ef0f67" //eos nation api key
})

const wsLink = new WebSocketLink({
  uri: dfuseClient.endpoints.graphqlStreamUrl,
  options: {
    lazy: true,
    reconnect: true,
    connectionParams: async () => {
      const apiToken = await dfuseClient.getTokenInfo()

      return {
        Authorization: `Bearer ${apiToken.token}`
      };
    }
  }
});


// Error Handling
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
          console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
      )
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

export const apolloClient = new ApolloClient({
  link: errorLink.concat(wsLink),
  cache: new InMemoryCache()
});
