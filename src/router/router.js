import Vue from 'vue'
import VueRouter from 'vue-router'

import Buy from "../components/Buy";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Buy
    }
]

export default new VueRouter({
    routes
})