<template>
  <v-app id="inspire">
    <header>
        <Navbar/>
    </header>
  
    <main>
      <router-view />
    </main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
};
</script>
