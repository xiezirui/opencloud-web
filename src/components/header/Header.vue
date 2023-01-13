<template>
    <el-header>
        <el-row>
            <el-col :span="4" style="height: 40px; line-height: 50px">
                <span style="font-size: 50px;position: center">OpenCloud</span>
            </el-col>
            <el-col :span="10"></el-col>
            <el-col :span="5" style="height: 40px">
                <el-form>
                    <el-form-item>
                        <el-row>
                            <el-col :span="20"><el-input v-model="key" size="small" prefix-icon="Search"/></el-col>
                            <el-col :span="4"><el-button type="primary" @click="searchData">搜索</el-button></el-col>
                        </el-row>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="5">
                <el-button v-if="!GetIsLogin" type="primary" style="height: 40px" @click="toRegister">登录/注册</el-button>
                <span></span><el-button v-if="GetIsLogin" type="primary" style="height: 40px" @click="toUserPage">{{GetName}}</el-button>
            </el-col>
        </el-row>
    </el-header>
    <el-divider style="margin: 0px;"/>
</template>

<script>
    import localService from '@/service/localService'
import store from '@/store'
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Header",
        data(){
            return{
                key: ''
            }
        },
        methods: {
            toRegister(){
                this.$router.push("/register")
            },
            toUserPage(){
                this.$router.push("/userpage")
            },
            searchData(){

            }
        },
        computed: {
            GetIsLogin() {
                return this.$store.state.user.isLogin
            },
            GetName(){
                return JSON.parse(this.$store.state.user.userInfo).Name
            }
        }
    }
</script>

<style scoped>

</style>