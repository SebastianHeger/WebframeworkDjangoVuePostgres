<template>
  <div>
  <v-row
      justify="center"
      no-gutters
      class="primary"
    >
      <v-btn :to="{ name:'Team' }" color="white" text rounded>Team</v-btn>
      <v-btn :to="{ name:'Imprint' }" color="white" text rounded>Imprint</v-btn>
      <v-btn :to="{ name:'Contact' }" color="white" text rounded>Contact</v-btn>
      <v-btn :to="{ name:'Carrier' }" color="white" text rounded>Carrier</v-btn>

    </v-row>
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="primary py-4 text-center white--text"
        cols="12"
      >
        <span>{{ new Date().getFullYear() }} - </span>
        <span class="font-weight-light">Web</span>
        <span>Framework</span>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  name: 'Footer'
}

</script>