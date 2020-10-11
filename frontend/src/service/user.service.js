import { getAPI } from "../plugins/axios-api"

export default class UserService {
    getUser(username) {
        return getAPI.get(`users/${username}/`)
    }

    getUser2(username) {
        return getAPI.get(`users/${username}`)
    }
}
