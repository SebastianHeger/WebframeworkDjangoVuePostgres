import Vue from 'vue'
import Vuex from 'vuex'
import { getAPI } from '../plugins/axios-api.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        accessToken: null,
        refreshToken: null,
        APIData: ''
    },
    mutations: {
        updateStorage (state, {access, refresh}) {
            state.accessToken = access
            state.refreshToken = refresh
        },
        destroyToken (state) {
            state.accessToken = null
            state.refreshToken = null
        }
    },
    getters: {
        loggedIn (state) {
            return state.accessToken != null
        }
    },
    actions: {
        userRegistration (context, usercredentials) {
            return new Promise((resolve) => {
                getAPI.post('/register/', {
                    email: usercredentials.email,
                    username: usercredentials.username,
                    password: usercredentials.password
                })
                .catch (response => {
                    console.log(response.data)
                })
                resolve()
            })
        },
        
        userLogin (context, usercredentials) {
            return new Promise((resolve, reject) => {
                getAPI.post('/api-token/', {
                    username: usercredentials.username,
                    password: usercredentials.password
                })
                .then (response => {
                    context.commit('updateStorage', {
                        access: response.data.access,
                        refresh:response.data.refresh
                    })
                    resolve()
                }, error => {
                    console.log(error.response.status)
                    console.log(error.response.data.detail)
                    reject(error.response.status)
                })                
            })
        },

        userLogout (context) {
            if (context.getters.loggedIn) {
                context.commit('destroyToken')
            }
        }
    }
})
