<template>
    <div class="login">
        <v-container fill-height justify-center>
            <v-col sm="8" md="6" xl="4">
                <h1 class="h3 mb-3 font-weight-normal text-center">Login</h1>
                <v-form v-on:submit.prevent="login">
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
                            Login
                        </v-btn>
                    </v-row>
                </v-form>
            </v-col>
    </v-container>
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
            showPassword: false,
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
                this.$store.commit("snackbarMessage", {
                    text: "Nutzer eingeloggt",
                    color: "success",
                })
            })
            .catch((error) => {
                if(error === 401) {
                    this.$store.commit("snackbarMessage", {
                    text: "Login fehlgeschlagen",
                    color: "error",
                })
                }
            })
        }
    }
}
</script>
