import axios from "axios";

const register = ({name, telephone, password}) => {
    return axios.post("http://localhost:1016/api/register", {name, telephone, password})
}
const login = ({telephone, password}) => {
    return axios.post("http://localhost:1016/api/login", {telephone, password})
}
const updataName = (name, id) => {
    return axios.post("http://localhost:1016/api/auth/upName", {name, id})
}
const updataPassword = (password, id) => {
    return axios.post("http://localhost:1016/api/auth/upPassword", {password, id})
}
const checkOldPassword = (oldpassword, id) => {
    return axios.post("http://localhost:1016/api/auth/checkOldPassword", {oldpassword, id})
}

export default {
    register,
    login,
    updataName,
    updataPassword,
    checkOldPassword
}