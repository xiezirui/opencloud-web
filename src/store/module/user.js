import localService from "@/service/localService";

const user = {
    namespaced: true,
    state: {
        isLogin: checkIfHaveToken(),
        token: localService.get(localService.USER_TOKEN),
        userInfo:localService.get(localService.USER_INFO) //JSON
    },
    mutations: {
        SET_TOKEN(state, token) {
            localService.set(localService.USER_TOKEN, token)
            state.token = token
        },
        SET_INFO(state, userInfo) {
            localService.set(localService.USER_INFO, userInfo) //js obj => json
            state.userInfo = userInfo
        },
        LOGOUT(){
            localService.remove(localService.USER_TOKEN)
            localService.remove(localService.USER_INFO)
        },
        LOGIN(state) {
            state.isLogin = true
        },
    }
}

function checkIfHaveToken(){
    if (localService.get(localService.USER_TOKEN) != null) {
        return true
    }else {
        return false
    }
}

export default user;