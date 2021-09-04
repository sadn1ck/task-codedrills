<template>
  <div>
    <v-row justify="center">
      <v-dialog
        v-model="getModalState"
        width="75%"
        persistent
        transition="dialog-bottom-transition"
      >
        <v-card>
          <v-card-title>
            <span class="text-h5">
              {{ activeRow.submittedBy }}'s submission for
              <code> {{ activeRow.title }}</code>
            </span>
          </v-card-title>
          <v-card-text class="text-subtitle-1">Consumed
            <code>{{ activeRow.memory }}</code> in
            <code>{{ activeRow.time }} </code>
          </v-card-text>
          <v-card-text> <CodeViewer /> </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green text-h4" text @click="toggleModal()">
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
import CodeViewer from '@/components/CodeViewer.vue';

export default Vue.extend({
  components: { CodeViewer },
  props: {
    activeRow: {
      default() {
        return {
          id: '431674a2-93f2-469f-a081-05b43f8983d4',
          submittedBy: 'bscardefieldx',
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
