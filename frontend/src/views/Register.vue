<template>
    <div class="register">
        <v-container fill-height justify-center>
            <v-col sm="8" md="6" xl="4">
                <h1 class="h3 mb-3 font-weight-normal text-center">Register</h1>
                <v-form v-on:submit.prevent="register">
                    <v-text-field
                        v-model="email"
                        label="E-Mail-Adresse"
                        outlined
                    ></v-text-field>
                    <v-text-field
                        v-model="username"
                        label="Nutzername"
                        outlined
                    ></v-text-field>
                    <v-text-field
                        v-model="password"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
                        name="input-10-1"
                        label="Passwort"
                        outlined
                        @click:append="showPassword = !showPassword"
                    ></v-text-field>
                    <v-row class="justify-center">
                        <v-btn
                            type="submit"
                            color="primary"
                            elevation="2"
                            raised
                            rounded>
                            Register
                        </v-btn>
                    </v-row>
                </v-form>
            </v-col>
    </v-container>
    </div>
</template>

<script>

export default {
    name: 'Register',
    components: {

    },
    data () {
        return {
            email: '',
            username: '',
            password: '',
            showPassword: false
        }
    },
    methods: {
        register () {
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
