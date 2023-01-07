import {createRouter,createWebHashHistory} from "vue-router";

import Register from "@/views/register/Register";
import Home from "@/views/home/Home";

const routes = [
    {
        path: "/register",
        component: Register
    },{
        path: "/home",
        name: "home",
        component: Home
    }
]

const router  =createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router