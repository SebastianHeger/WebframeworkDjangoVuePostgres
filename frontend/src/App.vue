<template>
  <v-app id="inspire">
    <header>
        <Navbar/>
    </header>
    <main>
      <router-view />
      <Snackbar/>
    </main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Snackbar from './components/snackbars/Snack'

export default {
  name: 'App',
  components: {
    Navbar,
    Snackbar
  },
};
</script>
