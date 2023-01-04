import {createRouter,createWebHashHistory} from "vue-router";

import Register from "@/views/register/Register";

const routes = [
    {
        path: "/register",
        component: Register
    }
]

const router  =createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router