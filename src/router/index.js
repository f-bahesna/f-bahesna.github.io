import {createRouter, createWebHistory} from "vue-router";
import Home from '/src/components/Home.vue'
import About from '/src/view/About.vue'
import BlogList from '/src/view/Blog/BlogList.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
     {
        path: '/blogs',
        name: 'BlogList',
        component: BlogList
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router