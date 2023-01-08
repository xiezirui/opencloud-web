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
                    </el-form-item>
                </el-row>
            </el-form>
        </el-col>
    </el-row>
</template>

<script>
    import router from '@/router'
    import localService from "@/service/localService";
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
                let url = "http://localhost:1016/api/register";
                userService.register(this.user).then(function (response) {
                    //{user_token: token}
                    localService.set(localService.USER_TOKEN,response.data.data.token)
                    router.replace('/home')
                })
                    .catch(function (error) {
                        if (error.response){
                            alert(error.response.data.msg)
                        }
                    })
            },
        },


    }

</script>

<style scoped>

</style>