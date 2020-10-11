<template>
  <div class="user">
    <v-container fill-height justify-center>
      <h1>Hello {{ username }}</h1>
      <v-row>
        <p>Email: {{ userData.email }}</p>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import UserService from "../service/user.service.js"
import store from '../store/index.js'

const userService = new UserService()

export default {
  name: "User",
  components: {

  },
  data() {
    return { 
        username: null,
        userData: null
    }
  },
  created() {
    this.username = store.getters.user
    if (this.username!==null) {
        userService
            .getUser(this.username)
            .then((result) => {
                console.log(result.data)
                this.userData = result.data
                console.log(this.userData)
            })
    }
    else {
        console.log('no user')
    }
  }
}
</script>
