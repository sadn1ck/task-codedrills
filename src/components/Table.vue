<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="25"
    class="elevation-1"
  ></v-data-table>
</template>
<script>
import Vue from 'vue';
import { defaultHeaders, defaultDesserts } from '@/data/default';

export default Vue.extend({
  props: {
    headers: {
      default: defaultHeaders,
    },
    items: {
      default: defaultDesserts,
    },
  },
});
</script>
