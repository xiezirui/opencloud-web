import {createRouter,createWebHashHistory} from "vue-router";


const routes = [
    {
        path: '/',
        component: () => import('@/views/introduction/Introduction')
    },{
        path: '/register',
        component: () => import('@/views/register/Register')
    },{
        path: '/home',
        component: () => import('@/views/home/Home')
    },{
        path: '/userpage',
        component: () => import('@/views/userpage/UserPage'),
    },{
        path: '/upName',
        component: () => import('@/views/updata/UpName/UpName')
    },{
        path: '/upPassword',
        component: () => import('@/views/updata/UpPassword/UpPassword')
    },{
        path: '/login',
        component: () => import('@/views/login/Login')
    },{
        path: '/blog',
        component: () => import('@/views/Show/blog/Blog')
    },{
        path: '/release',
        component: () => import('@/views/Show/Release')
    }
]

const router  =createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router