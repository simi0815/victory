import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'Home',
        component: resolve => require(['@/views/Home.vue'],resolve)
    },
    {
        path:'/article/:id',
        name:'Article',
        component:resolve => require(['@/views/Article.vue'],resolve)
    },
    {
        path:'*',
        name:'NotFound',
        component:resolve => require(['@/views/404NotFound.vue'],resolve),
    }


]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
