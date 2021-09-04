<template>
  <div>
    <v-row justify="center">
      <v-dialog
        v-model="getModalState"
        persistent
        transition="dialog-bottom-transition"
      >
        <v-card>
          <v-card-title>
            <span class="text-h5"
              >{{ activeRow.submitted_by }}'s submission for
              {{ activeRow.title }}</span
            >
          </v-card-title>
          <v-card-text> Very Long Text </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="toggleModal()">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

export default Vue.extend({
  props: {
    activeRow: {
      default() {
        return {
          id: '431674a2-93f2-469f-a081-05b43f8983d4',
          submitted_by: 'bscardefieldx',
          time: '245ms',
          memory: '3054KB',
          title: 'This is the way',
          language: 'C++',
        };
      },
    },
  },
  methods: {
    ...mapActions(['toggleModal']),
  },
  computed: {
    ...mapGetters(['getModalState']),
  },
});
</script>
