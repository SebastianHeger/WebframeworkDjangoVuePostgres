<template>
  <v-app id="inspire">
    <header>
        <Navbar/>
    </header>
    <main>
      <router-view />
      <Snackbar/>
    </main>
    <footer>
      <Footer/>
    </footer>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Snackbar from './components/snackbars/Snack'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    Snackbar
  },
};
</script>
