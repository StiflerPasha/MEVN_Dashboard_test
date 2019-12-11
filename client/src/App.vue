<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/about">
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer/>
      <a href="https://www.codewars.com/users/StiflerPasha" target="_blank">
        <v-img src="https://www.codewars.com/users/StiflerPasha/badges/large"
               alt="codewars"
               max-width="350"
               contain
               class="d-none d-sm-flex"
        />
      </a>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data: () => ({
      drawer: null
    }),
    created() {
      this.$vuetify.theme.dark = true;
    }
  };
</script>

<style lang="scss">
  html {
    overflow: auto;
  }

  .v-list-item--active {
    background: #370000f7;
  }
</style>
