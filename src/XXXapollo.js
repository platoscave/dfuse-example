// apollo.js
// https://stackabuse.com/building-graphql-apis-with-vue-js-and-apollo-client/

import Vue from 'vue'
//import { ApolloClient } from 'apollo-client'
import { apolloClient } from "./client.ts";
//import { HttpLink } from 'apollo-link-http'
//import { onError } from "apollo-link-error"
//import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
/* 
const httpLink = new HttpLink({
    uri: process.env.VUE_APP_GRAPHQL_ENDPOINT
})

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

// Create the apollo client
export const apolloClient = new ApolloClient({
    link: errorLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true
}) */

// Install the Vue plugin
Vue.use(VueApollo)

export const apolloProvider = new VueApollo({
    defaultClient: apolloClient
})