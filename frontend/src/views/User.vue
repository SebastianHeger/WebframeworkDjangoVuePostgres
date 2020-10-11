<template>
  <div class="user">
    <v-container fill-height justify-center>
      <h1>Hello {{username}}</h1>
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
        username: null
    }
  },
  created() {
    this.username = store.getters.user
    if (this.username!==null) {
        userService
            .getUser(this.username)
            .then((result) => {
                console.log(result.data)
            })
    }
    else {
        console.log('no user')
    }
  }
}
</script>
