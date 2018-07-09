import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SignIn from './views/SignIn.vue'
import ErrorPage from './views/Error.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/sign-in',
            name: 'sign-in',
            component: SignIn
        },
        {
            path: '/*',
            name: '404',
            component: ErrorPage,
        },
    ]
})
