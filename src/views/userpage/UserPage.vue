<template>
    <el-row>
        <el-col :span="4">
            <el-row>
                <el-col :span="10">
                    <div style="float:left"><el-button @click="toUpdataName">修改昵称</el-button></div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="10">
                    <div style="float:left"><el-button @click="toUpdataPassword">修改密码</el-button></div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="10">
                    <div style="float:left"><el-button @click="logout">退出登录</el-button></div>
                </el-col>
            </el-row>
        </el-col>
        <el-col :span="20">
            <el-row v-for="(blog,index) in BlogItems">
                <el-col :span="4">
                    <el-image :src="blog.CoverPath"></el-image>
                </el-col>
                <el-col :span="20">
                    {{ blog.Name }}
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>

    import store from "@/store";
    import router from "@/router";
    import blogService from "@/service/blogService";
    export default {
        name: "UserPage",
        data(){
            return {
                BlogItems: null
            }
        },
        methods: {
            toUpdataName(){
                router.push("/upName")
            },
            toUpdataPassword(){
                router.push("/upPassword")
            },
            logout(){
                store.commit('user/LOGOUT')
                store.state.user.isLogin  = false
                store.state.user.token  = ''
                store.state.user.userInfo  = ''
                router.push("/")
            }
        },
        computed: {

        },
        mounted() {

            blogService.getBlogs(JSON.parse(store.state.user.userInfo).ID)
            .then(response=> {
                this.BlogItems = response.data.data.blogs
            })
        },
    }
</script>

<style scoped>

</style>