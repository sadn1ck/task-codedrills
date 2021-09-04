<template>
  <div>
    <h1 class="text-center pa-8">CodeDrills Frontend Task</h1>
    <div class="d-flex flex-column justify-center align-center text-overline">
      <v-btn x-large class="mt-6" color="success" to="/scoreboard">
        <div>
          The Scoreboard Page
          <v-icon>mdi-arrow-right</v-icon>
        </div>
      </v-btn>

      <v-btn x-large class="mt-6" color="success" to="/submissions">
        <div>
          The Submissions Page
          <v-icon>mdi-arrow-right</v-icon>
        </div>
      </v-btn>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  components: {},
});
</script>
