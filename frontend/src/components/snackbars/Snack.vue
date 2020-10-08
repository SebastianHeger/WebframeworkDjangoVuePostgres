<template>
  <v-snackbar 
    v-model="snackbarVisible" 
    :color="color" 
    :timeout="persistent ? 0 : 6000" 
    right 
    centered 
    transition="slide-x-reverse-transition"
    >
    {{ message }}
    <template v-slot:action="{ attrs }">
      <v-btn
        color="white"
        text
        v-bind="attrs"
        @click="snackbarVisible = false"
        >
        Schließen
      </v-btn>
    </template>
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
