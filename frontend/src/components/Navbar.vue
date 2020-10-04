<template>
  <nav>
    <v-toolbar>
      <v-btn :to="{ name:'Home' }" text color=primary>
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn :to="{ name:'About' }" text color=primary>
        <span>About</span>
        <v-icon right>mdi-information</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Web</span>
        <span>Framework</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      
      <v-btn v-if="accessToken==null" :to="{ name:'Register' }" text color=primary>
        <span>Register</span>
        <v-icon right>mdi-fingerprint</v-icon>
      </v-btn>

      <v-btn v-if="accessToken==null" :to="{ name:'Login' }" text color=primary>
        <span>Login</span>
        <v-icon right>mdi-login</v-icon>
      </v-btn>

      <v-btn v-if="accessToken!=null" :to="{ name:'Logout' }" text color=primary>
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
