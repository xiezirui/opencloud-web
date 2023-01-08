import axios from "axios";
//用户注册
const register = ({name, telephone, password}) => {
    return axios.post("http://localhost:1016/api/register", {name, telephone, password})
}

export default {
    register
}