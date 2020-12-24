import Vue from 'vue'
import App from './App.vue'
//import { createProvider } from './vue-apollo'
import { apolloProvider } from './apollo'

// copied from react 
//import { apolloClient } from "./client.ts";
//import { ActionMap, SearchResult } from "./models.ts";
//import { subscribeTransactions } from "./graphql.ts";



Vue.config.productionTip = false

new Vue({
  //apolloProvider: createProvider(),
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
