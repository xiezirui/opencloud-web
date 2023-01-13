import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router/index'
import Vuelidate from 'vuelidate'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from "@/store";

import addToken from "@/middleware/TokenSupport";

import Header from "@/components/header/Header";

//-----

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}



app.use(ElementPlus)
app.use(router)
app.use(Vuelidate)
app.use(VueAxios,axios)
app.use(store)

app.config.globalProperties.$axios = axios

//请求设置token到header
addToken()

// eslint-disable-next-line vue/multi-word-component-names
app.component("Header",Header)

app.mount('#app')
