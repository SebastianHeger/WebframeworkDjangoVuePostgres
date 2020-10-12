<template>
  <v-app id="inspire">
    <header>
        <Navbar/>
    </header>
    <main id="content">
      <router-view />
      <Snackbar/>
    </main>
    <footer id="footer">
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

<style>
#content {
  padding-bottom: 5.75rem;
}

#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5.75rem;
}
</style>