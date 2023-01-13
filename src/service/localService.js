//本地缓存服务
const USER_TOKEN = "user_token"
const USER_INFO = "user_info"

const set = (k, v) => {
    localStorage.setItem(k, v);
}

const get = (k) => {
    return localStorage.getItem(k);
}

const remove = (k) => {
    localStorage.removeItem(k)
}

export default {
    set,
    get,
    remove,
    USER_TOKEN,
    USER_INFO,
}