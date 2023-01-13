import { createStore } from 'vuex'

import user from '@/store/module/user'
import upPwd from '@/store/module/upPwd'

const store = createStore({
    state () {

    },
    modules: {
        user: user,
        upPwd: upPwd
    }
})

export default store