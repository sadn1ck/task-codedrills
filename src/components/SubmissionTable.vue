<template>
  <div>
    <v-card>
      <v-card-title>
        Submissions
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search usernames"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="items"
        class="elevation-1"
        :search="search"
        @click:row="handleClick"
      ></v-data-table>
    </v-card>
    <div v-if="getModalState">
      <CodeModal :activeRow="activeCodeModalRow" />
    </div>
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
      search: '',
    };
  },
  methods: {
    ...mapActions(['toggleModal']),
    handleClick(row) {
      this.activeCodeModalRow = row;
      this.toggleModal();
    },
  },
  computed: {
    ...mapGetters(['getModalState']),
  },
});
</script>
