<template>
  <v-app>
    <Navbar />
    <v-main class="pb-16">
      <router-view/>
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default Vue.extend({
  name: 'App',
  components: { Navbar, Footer },
  data: () => ({
    //
  }),
});
</script>
