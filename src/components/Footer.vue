<template>
  <v-footer absolute>
    <v-col v-if="isScoreboardPage" class="text-center text-caption" cols="12">
      Disclaimer: The rank 0 person with 0 solves is there to show that the check box works. :p
    </v-col>
    <v-col v-if="isSubmissionsPage" class="text-center text-caption" cols="12">
      Disclaimer: The code in all submissions are same for now.
    </v-col>
    <v-col class="text-center font-weight-medium" cols="12">
      {{ new Date().getFullYear() }}
    </v-col>
  </v-footer>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Footer',
  computed: {
    isScoreboardPage() {
      return this.$route.path === '/scoreboard';
    },
    isSubmissionsPage() {
      return this.$route.path === '/submissions';
    },
  },
});
</script>
