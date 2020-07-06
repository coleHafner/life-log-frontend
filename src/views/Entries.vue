<template>
  <div class="about">
    <h1>All log entries page</h1>
    <LogEntries v-bind:entries="entries" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { API } from 'aws-amplify';
import { listLogEntrys } from '../graphql/queries';
import { ListLogEntrysQuery } from '../api';
import LogEntries from '@/components/LogEntries.vue';


export default Vue.extend({
  name: 'EntriesPage',
  components: {
    LogEntries,
  },
  async created() {
    this.getEntries();
  },
  data() {
    return {
      entries: [],
    };
  },
  methods: {
    async getEntries() {
      try {
        const entries = (await API.graphql({
          query: listLogEntrys,
        })) as {data: ListLogEntrysQuery };
        // @ts-ignore
        this.entries = entries?.data?.listLogEntrys?.items || [];
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
  },
});
</script>