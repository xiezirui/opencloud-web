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
                            <el-col :span="20"><el-input v-model="key" size="small"/></el-col>
                            <el-col :span="4"><el-button type="primary" @click="searchData">搜索</el-button></el-col>
                        </el-row>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="5">
                <el-button v-if="isNotLogin" type="primary" style="height: 40px" @click="onClick">登录/注册</el-button>
                <el-button v-if="!isNotLogin" type="primary" style="height: 40px" icon="Avatar">{{user.name}}</el-button>
            </el-col>
        </el-row>
    </el-header>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Header",
        data(){
            return{
                isNotLogin: true,
                user: {
                    name: '',
                    telephone: '',
                    password: '',
                },
                key: ''
            }
        },
        methods: {
            onClick(){
                this.$router.push("/register")
            },
            searchData(){

            }
        }
    }
</script>

<style scoped>

</style>