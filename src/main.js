import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import { createGtag } from "vue-gtag"

const gtag = createGtag({
    tagId: "G-YH4KDREFBH"
})

createApp(App)
    .use(router)
    .use(gtag)
    .mount('#app')
