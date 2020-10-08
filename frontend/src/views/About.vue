<template>
  <div class="about">
    <v-container fill-height justify-center>
      <h1>This is an about page</h1>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'About',
  components: {

  },
  created() {
    this.$store.commit("snackbarMessage", {
        text: "Aboutpage",
        color: "success",
    })
  }
}
</script>
