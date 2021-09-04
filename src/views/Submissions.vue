<template>
  <div>
      <h1>
          Submissions for Problem A
      </h1>
      <SubmissionTable />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import SubmissionTable from '@/components/SubmissionTable.vue';

export default Vue.extend({
  components: { SubmissionTable },
});
</script>
