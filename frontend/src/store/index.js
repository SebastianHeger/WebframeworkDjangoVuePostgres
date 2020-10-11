import Vue from 'vue'
import Vuex from 'vuex'
import { getAPI } from '../plugins/axios-api.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        username: null,
        accessToken: null,
        refreshToken: null,
        APIData: '',
        snackbarMessage: null
    },
    mutations: {
        updateStorage (state, {username, access, refresh}) {
            state.username = username
            state.accessToken = access
            state.refreshToken = refresh
        },
        destroyToken (state) {
            state.username = null
            state.accessToken = null
            state.refreshToken = null
        },
        snackbarMessage (state, message) {
            state.snackbarMessage = message
        }
    },
    getters: {
        user (state) {
            return state.username
        },
        accessToken (state) {
            return state.accessToken
        },
        loggedIn (state) {
            return state.accessToken != null
        }, 
        snackbarMessage (state) {
            return state.snackbarMessage
        },
    },
    actions: {
        triggerSnackbarWithMessage({ commit }, message) {
            commit("snackbarMessage", message)
        },

        userRegistration (context, usercredentials) {
            return new Promise((resolve, reject) => {
                getAPI.post('/register/', {
                    email: usercredentials.email,
                    username: usercredentials.username,
                    password: usercredentials.password
                })
                .then (response => {
                    console.log(response.data)
                    resolve()
                }, error => {
                    reject(error.response.status)
                })
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
                        username: usercredentials.username,
                        access: response.data.access,
                        refresh: response.data.refresh
                    })
                    resolve()
                }, error => {
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
