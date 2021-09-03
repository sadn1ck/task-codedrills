<template>
  <div class="pa-8">
    <Table :headers="rankHeaders" :items="rankData" />
  </div>
</template>

<script>
import Vue from 'vue';
import Table from '@/components/Table.vue';
import { rankHeaders, rankData } from '@/data/ranks';

export default Vue.extend({
  components: { Table },
  data() {
    return {
      test: '5',
      rankHeaders,
      rankData,
    };
  },
});
</script>
