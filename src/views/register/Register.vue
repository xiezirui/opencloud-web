<template>
    <el-row>
        <el-col>
            <el-form :model="form" label-width="120px" id="registry-area">
                <el-row>
                    <el-form-item label="用户名">
                        <el-input v-model="user.name" clearable="true"/>
                    </el-form-item>
                </el-row>
                <el-row>
                    <el-form-item label="电话号码">
                        <el-input v-model="user.telephone" clearable="true"/>
                    </el-form-item>
                </el-row>
                <el-row>
                    <el-form-item label="密码">
                        <el-input v-model="user.password" type="password" clearable="true" show-password />
                    </el-form-item>
                </el-row>
                <el-row>
                    <el-form-item>
                        <el-button type="primary" @click="register()">注册</el-button>
                         | <span>已注册？</span><el-button @click="toLogin()">登录</el-button>
                    </el-form-item>
                </el-row>
            </el-form>
        </el-col>
    </el-row>
</template>

<script>
    import router from '@/router'
    import store from "@/store";
    import userService from "../../service/userService";

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Register",
        data(){
            return{
                user: {
                    name: '',
                    telephone: '',
                    password: '',
                }
            }
        },
        methods: {

            register: function () {
                userService.register(this.user)
                .then(function (response) {
                    store.commit('user/SET_TOKEN', response.data.data.token)
                    store.commit('user/SET_INFO', JSON.stringify(response.data.data.user)) //js -> json
                    store.commit('user/LOGIN')
                    router.replace('/home')

                })
                    .catch(function (error) {
                        if (error.response){
                            alert(error.response.data.msg)
                        }
                    })
            },
            toLogin(){
                router.replace('/login')
            }
        },


    }

</script>

<style scoped>

</style>