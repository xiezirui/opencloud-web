import {createRouter,createWebHashHistory} from "vue-router";


const routes = [
    {
        path: '/register',
        component: () => import('@/views/register/Register')
    },{
        path: '/home',
        component: () => import('@/views/home/Home')
    },{
        path: '/userpage',
        component: () => import('@/views/userpage/UserPage')
    },{
        path: '/upName',
        component: () => import('@/views/updata/UpName/UpName')
    },{
        path: '/upPassword',
        component: () => import('@/views/updata/UpPassword/UpPassword')
    }
]

const router  =createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router