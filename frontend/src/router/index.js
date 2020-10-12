import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Register from '../views/Register.vue'
import User from '../views/User.vue'
import Team from '../views/Team.vue'
import Imprint from '../views/Imprint.vue'
import Contact from '../views/Contact.vue'
import Carrier from '../views/Carrier.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/imprint',
    name: 'Imprint',
    component: Imprint
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/carrier',
    name: 'Carrier',
    component: Carrier
  },
]

const router = new VueRouter({
  routes
})

export default router
