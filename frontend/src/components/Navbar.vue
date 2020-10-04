<template>
  <nav>
    <v-toolbar flat app>
      <v-btn :to="{ name:'Home' }" flat color=primary>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn :to="{ name:'About' }" flat color=primary>
        <span>About</span>
        <v-icon right>mdi-information</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Web</span>
        <span>Framework</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      
      <v-btn :to="{ name:'Login' }" flat color=primary>
        <span>Login</span>
        <v-icon right>mdi-login</v-icon>
      </v-btn>

      <v-btn :to="{ name:'Logout' }" flat color=primary>
        <span>Logout</span>
        <v-icon right>mdi-logout</v-icon>
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Navbar',
  computed: mapState(['accessToken'])
}

</script>
