<template>
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
</template>

<script>
    import store from "@/store";
    import router from "@/router";
    export default {
        name: "UserPage",
        //1.更改名称 2.更改密码：手机号校验
        //信息修改单独一页
        data(){
            return {
                name: '',
                password: ''
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
                store.state.user.isLogin  =false
                store.state.user.token  =''
                store.state.user.userInfo  =''
                router.push("/")
            }
        },
        computed: {
            getName(){
                return JSON.parse(store.state.user.userInfo).Name
            },
        }
    }
</script>

<style scoped>

</style>