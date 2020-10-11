<template>
<v-row
      justify="center"
      no-gutters
    >
      <v-btn color="white" text rounded>Team</v-btn>
      <v-btn color="white" text rounded>Impressum</v-btn>
      <v-btn color="white" text rounded>Kontakt</v-btn>
      <v-btn color="white" text rounded>Karriere</v-btn>

      <v-col
        class="primary py-4 text-center white--text"
        cols="12"
      >
        <span>{{ new Date().getFullYear() }} - </span>
        <span class="font-weight-light">Web</span>
        <span>Framework</span>
      </v-col>
    </v-row>
</template>

<script>

export default {
  name: 'Footer'
}

</script>
