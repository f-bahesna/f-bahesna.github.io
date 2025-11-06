import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import { createGtagPlugin } from "vue-gtag"

createApp(App)
    .use(router)
    .use(createGtagPlugin, {
        property: {
            id: "G-YH4KDREFBH"
        }
    })
    .mount('#app')
