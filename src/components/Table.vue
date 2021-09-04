<template>
  <div>
    <v-card>
      <v-card-title>
        Leaderboard
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search usernames"
          single-line
          hide-details
        ></v-text-field>
        <div>
          <v-checkbox
            class="pt-6 px-6"
            v-model="solved"
            :label="`Solved at least 1`"
          ></v-checkbox>
        </div>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="solved ? computedItems : items"
        :search="search"
        class="elevation-1"
      ></v-data-table>
    </v-card>
  </div>
</template>
<script>
import Vue from 'vue';
import { defaultHeaders, defaultDesserts } from '@/data/default';

export default Vue.extend({
  props: {
    headers: {
      default: () => defaultHeaders,
    },
    items: {
      default: () => defaultDesserts,
    },
  },
  computed: {
    computedItems() {
      return this.items.filter(
        (el) => el.A > 0 || el.B > 0 || el.C > 0 || el.D > 0 || el.E > 0,
      );
    },
  },
  data() {
    return {
      search: '',
      solved: false,
    };
  },
});
</script>
