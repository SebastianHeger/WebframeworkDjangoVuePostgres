<template>
  <div class="home">
    <v-container fill-height justify-center>
      <h1>This is a homepage</h1>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {

  },
  created() {
    this.$store.commit("snackbarMessage", {
        text: "Homepage",
        color: "success",
    })
  }
}
</script>
