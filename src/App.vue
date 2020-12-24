<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <GraphqlTest/>
  </div>
</template>

<script>
//import ApolloExample from './components/ApolloExample.vue'
import GraphqlTest from './components/GraphqlTest.vue'

export default {
  name: 'App',
  components: {
    //ApolloExample
    GraphqlTest
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
          color: whitesmoke;

  margin-top: 60px;
}
body {
    background-color: #2c3e50;
}

h1,h2,h3,h4,h5,h6,p {
    color: #42b983;
}

</style>
