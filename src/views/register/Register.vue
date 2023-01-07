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
    import Header from "@/components/header/Header";
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
            register(){
                var url = "http://loaclhost:1016/api/register"
                // {code: 200, data: null, msg: '注册成功'}
                // eslint-disable-next-line no-undef
                this.$axios.post(url,{...this.user},function (response) {
                    localStorage.setItem("token",response.data.data.token)
                    this.$router.replace("/home")
                }).catch(function (error) {
                    alert(error.data.msg)
                })
            },

        }
    }

</script>

<style scoped>

</style>