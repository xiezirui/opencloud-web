import axios from "axios";
import localService from "@/service/localService";

function addToken() {
    axios.interceptors.request.use(
        config => {
            if (localStorage.getItem("token")){
                config.headers['Authorization'] = 'Bearer ' + localService.get(localService.USER_TOKEN)
            }
            return config
        }
    )
}

export default addToken