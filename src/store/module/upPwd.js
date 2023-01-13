const upPwd = {
    namespaced: true,
    state: {
        flag: false,
        msg: ''
    },
    mutations: {
        CHANGE_FLAG(state, o){
            state.flag = o
        },
        CHANEG_MSG(state, content){
            state.msg = content
        }
    }
}

export default upPwd;