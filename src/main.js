import { createApp } from 'vue'

import "tailwindcss/tailwind.css"
import './main.css'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'




createApp(App)
.use(router, VueAxios, axios)
.mount('#app')

