<template>
    <div id="navbar">
      <ul>
        <li><router-link :to="{ name:'Home' }">Home</router-link></li>
        <li><router-link :to="{ name:'About' }">About</router-link></li>
        <li v-if="accessToken==null"><router-link :to="{ name:'Login' }">Login</router-link></li>
        <li v-if="accessToken!=null"><router-link :to="{ name:'Logout' }">Logout</router-link></li>
      </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Navbar',
  computed: mapState(['accessToken'])
}

</script>
