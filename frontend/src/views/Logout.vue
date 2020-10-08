<template>
    <div class="log">
        
    </div>
</template>

<script>
    export default {
        data () {
            return { 
                
            }
        },
        created() {
            this.$store.dispatch('userLogout')
            .then(() => {
                this.$router.push({name: 'Home'})
                this.$store.commit("snackbarMessage", {
                    text: "Nutzer ausgeloggt",
                    color: "success",
                })
            })
        }
    }
</script>