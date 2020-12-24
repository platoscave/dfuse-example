
// Example provided by defuse
// https://github.com/dfuse-io/docs/blob/master/samples/typescript/eos/stream-action-rates/src/client.ts
import { WebSocketLink } from "apollo-link-ws";
import ApolloClient from "apollo-client/ApolloClient";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createDfuseClient } from "@dfuse/client";

const dfuseClient = createDfuseClient({
  network: "eos.dfuse.eosnation.io",
  apiKey: "web_e6cd62f1d80fab50f186e796ec746a08"
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

export const apolloClient = new ApolloClient({
  link: wsLink,
  cache: new InMemoryCache()
});
