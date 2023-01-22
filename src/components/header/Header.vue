<template>
    <el-header>
        <el-row>
            <el-col :span="2" style="height: 40px; line-height: 50px">
                <span style="font-size: 20px;position: center">OpenCloud</span>
            </el-col>
            <el-col :span="6" style="height: 40px; line-height: 50px">
                <el-button type="primary" style="height: 40px" @click="toBlog">博客</el-button>
                <el-button type="primary" style="height: 40px" @click="toConversation">话题</el-button>
            </el-col>
            <el-col :span="8" style="height: 40px">
                <el-form>
                    <el-form-item>
                        <el-row>
                            <el-col :span="20"><el-input v-model="key" size="small" prefix-icon="Search"/></el-col>
                            <el-col :span="4"><el-button type="primary" @click="searchData">搜索</el-button></el-col>
                        </el-row>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="6">
                <el-button v-if="!GetIsLogin" type="primary" style="height: 40px" @click="toRegister">登录/注册</el-button>
                <el-button v-if="GetIsLogin" type="primary" style="height: 40px" @click="toHome">我的主页</el-button>
                <el-button v-if="GetIsLogin" type="primary" style="height: 40px" @click="toUserPage">{{GetName}}</el-button>
            </el-col>
            <el-col :span="2">
                <el-button type="primary" style="height: 40px" @click="toRelease">发布</el-button>
            </el-col>
        </el-row>
    </el-header>
    <el-divider style="margin: 0px;"/>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Header",
        data(){
            return{
                key: ''
            }
        },
        methods: {
            toRegister() {
                this.$router.push("/register")
            },
            toUserPage() {
                this.$router.push("/userpage")
            },
            toHome() {
                this.$router.push("/home")
            },
            toBlog() {
                this.$router.push("/blog")
            },
            toConversation() {

            },
            toRelease() {
                this.$router.push("/release")
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