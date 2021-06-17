<template>
  <div>
    <h1>Hello</h1>
    <h1>{{ hello }}</h1>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  data() {
    return {
      hello: '',
    };
  },
  apollo: {
    // Simple query that will update the 'hello' vue property
    hello: gql`
      query {
        hello
      }
    `,
  },
};
</script>