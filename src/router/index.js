import {createRouter,createWebHashHistory} from "vue-router";

const routes = [
    {
        path: '/register',
        component: () => import('../views/register/Register')
    },{
        path: '/home',
        component: () => import('../views/home/Home')
    }
]

const router  =createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router