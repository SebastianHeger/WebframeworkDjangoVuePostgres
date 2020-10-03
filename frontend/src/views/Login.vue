<template>
    <div class="login">
        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col-md-5 p-3 login justify-content-md-center">
                    <h1 class="h3 mb-3 font-weight-normal text-center">Login</h1>
                    <p v-if="incorrectAuth">Falscher Nutzername oder Passwort eingegeben</p>
                    <v-form v-on:submit.prevent="login">
                        <v-text-field
                            class="red--text"
                            v-model="username"
                            label="Nutzer"
                            outlined
                        ></v-text-field>

                        <v-text-field
                            v-model="password"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show1 ? 'text' : 'password'"
                            name="input-10-1"
                            label="Passwort"
                            outlined
                            @click:append="show1 = !show1"
                        ></v-text-field>
                        <v-btn
                            type="submit"
                            color="green"
                            elevation="2"
                            raised
                            rounded>
                            Login
                        </v-btn>
                    </v-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Login',
    components: {

    },
    data () {
        return {
            username: '',
            password: '',
            incorrectAuth: false,
            show1: false
        }
    },
    methods: {
        login () {
            this.$store.dispatch('userLogin', {
                username: this.username,
                password: this.password,

            })
            .then(() => {
                this.$router.push({name: 'Home'})
            })
            .catch(err => {
                console.log(err)
                this.incorrectAuth = true
            })
        }
    }
}
</script>
