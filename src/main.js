import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router/index'
import Vuelidate from 'vuelidate'
import axios from 'axios'
import VueAxios from 'vue-axios'

import Header from "@/components/header/Header";

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus)
app.use(router)
app.use(Vuelidate)
app.use(VueAxios,axios)

app.config.globalProperties.$axios = axios

//请求设置token到header
axios.interceptors.request.use(
    config => {
        if (localStorage.getItem("token")){
            config.headers['Authorization'] = 'Bearer ' + localStorage.getItem("token")
        }
        return config
    }
)

//响应如果有token就保存到localStorage中
axios.interceptors.response.use(
    function (response) {
        if (response.data.data.token != null){
            localStorage.setItem("token",response.data.data.token)
        }
        return response
    }
)

// eslint-disable-next-line vue/multi-word-component-names
app.component("Header",Header)

app.mount('#app')
