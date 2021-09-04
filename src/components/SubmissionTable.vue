<template>
  <div>
    <v-card>
      <v-card-title>
        Submissions
      </v-card-title>
      <div v-if="getModalState">
        <CodeModal :activeRow="activeCodeModalRow" />
      </div>
      <v-data-table
        :headers="headers"
        :items="items"
        class="elevation-1"
        @click:row="handleClick"
      ></v-data-table>
    </v-card>
  </div>
</template>
<script>
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import CodeModal from '@/components/CodeModal.vue';
import { submissionHeaders, submissionItems } from '@/data/submissions';

export default Vue.extend({
  name: 'SubmissionTable',
  components: { CodeModal },
  props: {
    headers: {
      default: () => submissionHeaders,
    },
    items: {
      default: () => submissionItems,
    },
  },
  data() {
    return {
      activeCodeModalRow: {},
    };
  },
  methods: {
    ...mapActions(['toggleModal']),
    handleClick(row) {
      console.log(row);
      this.activeCodeModalRow = row;
      this.toggleModal();
    },
  },
  computed: {
    ...mapGetters(['getModalState']),
  },
});
</script>
