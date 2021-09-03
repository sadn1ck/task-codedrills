<template>
  <div class="pa-8">
      <Table />
  </div>
</template>

<script>
import Vue from 'vue';
import Table from '@/components/Table.vue';

export default Vue.extend({
  components: { Table },
  data() {
    return {
      test: '5',
    };
  },
});
</script>
