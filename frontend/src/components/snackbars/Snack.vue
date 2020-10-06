<template>
  <v-snackbar v-model="snackbarVisible" :color="color" :timeout="persistent ? 0 : 6000" :vertical="true">
    {{ message }}
    <v-btn v-if="!persistent" dark text @click="snackbarVisible = false">
      Schließen
    </v-btn>
  </v-snackbar>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "Snack",
  data() {
    return {
      snackbarVisible: false,
      message: "",
      color: "",
      persistent: false,
    }
  },
  computed: {
    ...mapGetters(["snackbarMessage"]),
  },
  watch: {
    snackbarMessage: function(newMessage) {
      if (newMessage != null) {
        this.message = newMessage.text
        this.color = newMessage.color
        this.persistent = !!newMessage.persistent
        this.snackbarVisible = true
      } else {
        this.snackbarVisible = false
      }
    },
  },
}
</script>
