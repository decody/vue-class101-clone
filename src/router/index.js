import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../pages/Main.vue";
import Products from "../pages/Products.vue";
import NotFound from "../pages/NotFound.vue";

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Main
        },
        {
            path: '/products',
            name: 'Products',
            component: Products
        },
        {
            path: '/*',
            name: 'NotFound',
            component: NotFound
        },
    ]
})



