<template>
  <nav>
    <v-toolbar class="d-flex">
      <v-toolbar-items class="justify-space-around">
        <v-btn text v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </nav>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Navbar',
  data() {
    return {
      appTitle: 'FakeCodeDrills',
      sidebar: false,
      menuItems: [
        { title: 'Home', path: '/', icon: 'mdi-home' },
        { title: 'Scoreboard', path: '/scoreboard', icon: 'mdi-format-list-numbered' },
        { title: 'Submissions', path: '/submissions', icon: 'mdi-format-list-bulleted-square ' },
      ],
    };
  },
});
</script>
