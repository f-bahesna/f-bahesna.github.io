import {createRouter, createWebHistory} from "vue-router";
import Home from '/src/components/Home.vue'
import About from '/src/view/About.vue'
import Blog from '/src/view/Blog/Blog.vue'
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
    },
    {
        path: '/blog-detail',
        name: 'Blog',
        component: Blog
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
        return { top: 0 }
    },
})

export default router