<template>
    <el-form label-width="120px">
        <el-cow :span="8">
            <el-col>
                <el-form-item label="验证旧密码">
                    <el-input v-model="passwords.old_password" show-password @input="checkOldPassword" @blur="checkOldPassword"/>
                    <div v-if="!getFlag">{{ getMsg }}</div>
                </el-form-item>
            </el-col>
        </el-cow>
        <el-cow :span="8">
            <el-col>
                <el-form-item label="修改密码">     
                    <el-input v-model="passwords.new_password" show-password/>
                    <el-button type="primary" @click="updataPassword">确认修改</el-button>
                </el-form-item>
            </el-col>
        </el-cow>
        
        
    </el-form>
</template>
      
<script>
import userService from '@/service/userService'
import router from '@/router'
import store from '@/store'
export default {
    name: "UpPassword",
    data(){
        return {
            passwords: {
                old_password: '',
                new_password: ''
            },
        }
    },
    methods: {
        updataPassword(){
            if (store.state.upPwd.flag){
                userService.updataPassword(this.passwords.new_password, JSON.parse(store.state.user.userInfo).ID)
                .then(function (response) {
                    router.push("/home")
                })
                .catch(function (error) {
                    if(error.response){
                        alert(error.response.data.msg)
                    }   
                })
            }else {
                alert("旧密码错误")
            }
        },
        checkOldPassword(){

            userService.checkOldPassword(this.passwords.old_password, JSON.parse(store.state.user.userInfo).ID)
            .then(function(response){
                store.commit('upPwd/CHANGE_FLAG', true)
                store.commit('upPwd/CHANEG_MSG','')
            }).catch(function(error){
                store.commit('upPwd/CHANGE_FLAG', false)
                store.commit('upPwd/CHANEG_MSG',error.response.data.msg)

            })
        } 
    },
    computed: {
        getFlag(){
            return store.state.upPwd.flag
        },
        getMsg(){
            return store.state.upPwd.msg
        }
    }

    
}
</script>
      
<style scoped>
</style>
      