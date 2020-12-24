<template>
  <div class="graphql-test">
    <pre style="text-align: left;">{{ JSON.stringify(block, null, 4 )}}</pre>
  </div>
</template>

<script>
import { queryBlockNum } from "../graphql";
export default {
  name: "GraphQL-Test",
  data() {
    return {
      block: "none",
    };
  },
  apollo: {
    block: {
      query: queryBlockNum,
      variables: {
        blockNum: 104782163,
      },
    },
  },
};
</script>