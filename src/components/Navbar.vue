<template>
  <nav>
    <!-- for large screens -->
    <v-toolbar class="hidden-sm-and-down">
      <v-toolbar-title>
        FakeCodeDrills
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text v-for="item in menuItems" :key="item.title" :to="item.path">
        <v-icon left>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
      <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon v-if="$vuetify.theme.dark">
          mdi-white-balance-sunny
        </v-icon>
        <v-icon v-else>
          mdi-moon-waxing-crescent
        </v-icon>
      </v-btn>
    </v-toolbar>
    <!-- for mobiles -->
    <v-toolbar class="hidden-md-and-up">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        FakeCodeDrills
      </v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Made by @sadn1ck</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          link
          :to="item.path"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Navbar',
  data() {
    return {
      appTitle: 'FakeCodeDrills',
      drawer: false,
      menuItems: [
        { title: 'Home', path: '/', icon: 'mdi-home' },
        { title: 'Scoreboard', path: '/scoreboard', icon: 'mdi-format-list-numbered' },
        { title: 'Submissions', path: '/submissions', icon: 'mdi-format-list-bulleted-square ' },
      ],
    };
  },
});
</script>
