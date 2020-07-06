<template>
  <ul>
    <li v-for="entry in entries" :key="entry.id">
      {{entry.thing}}
    </li>
</ul>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LogEntries',
  props: {
    entries: [],
  }
});
</script>

<style scoped lang="scss">
</style>