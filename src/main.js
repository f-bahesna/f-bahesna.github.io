import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import VueGtag from "vue-gtag"

createApp(App)
    .use(router)
    .use(VueGtag, {
        config: {id: "G-YH4KDREFBH"}
    })
    .mount('#app')
