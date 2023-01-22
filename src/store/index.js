import { createStore } from 'vuex'

import user from '@/store/module/user'
import upPwd from '@/store/module/upPwd'
import blog from "@/store/module/blog";

const store = createStore({
    state () {

    },
    modules: {
        user: user,
        upPwd: upPwd,
        blog: blog
    }
})

export default store