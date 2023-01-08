//本地缓存服务
const USER_TOKEN = "user_token"
const USER_INFO = "user_info"

const set = (k, v) => {
    localStorage.setItem(k, v);
}

const get = (k) => {
    localStorage.getItem(k);
}

export default {
    set,
    get,
    USER_TOKEN,
    USER_INFO,
}