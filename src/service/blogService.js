import axios from "axios";

const releaseBlog = (data) => {
    return axios.post("http://localhost:1016/api/blog/release",data)
}

const releaseBlogCover = (data) => {
    return axios({
        method: "POST",
        url: "http://localhost:1016/api/upload",
        headers: {'Content-Type': 'multipart/form-data'},
        data: data
    })
}

const getBlogs = (uid) => {
    return axios({
        method: "POST",
        url: "http://localhost:1016/api/blog/get",
        data: {uid}
    })
}

export default {
    releaseBlogCover,
    releaseBlog,
    getBlogs
}