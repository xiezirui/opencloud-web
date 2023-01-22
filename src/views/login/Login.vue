<template>
  <el-row>
        <el-col>
            <el-form :model="form" label-width="120px" id="registry-area">
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
                        <el-button type="primary" @click="login()">登录</el-button>
                    </el-form-item>
                </el-row>
            </el-form>
        </el-col>
    </el-row>
</template>
    
<script>   
import userService from '@/service/userService';
import router from '@/router';
import store from '@/store';
export default {
    name: 'Login',
    data() {
        return {
            user: {
                telephone: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            userService.login(this.user)
            .then(function(response) {
                store.commit('user/SET_TOKEN', response.data.data.token)
                store.commit('user/SET_INFO', JSON.stringify(response.data.data.user)) //js -> json
                store.commit('user/LOGIN')
                router.replace('/home')
            })
            .catch(function(error) {
                alert(error.response.data.msg)
            })
        }
    }

}
</script>
    
<style scoped></style>
    