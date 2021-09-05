<template>
    <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
    <v-icon v-if="$vuetify.theme.dark">
        mdi-white-balance-sunny
    </v-icon>
    <v-icon v-else>
        mdi-moon-waxing-crescent
    </v-icon>
    </v-btn>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ThemeSwitcher',
});
</script>
