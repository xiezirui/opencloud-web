<template>
    <el-form label-width="120px">
        <el-form-item label="修改用户名">
            <el-input v-model="name" />
            <el-button type="primary" @click="updataName">确认修改</el-button>
        </el-form-item>
    </el-form>
</template>
    
<script>
import userService from '@/service/userService'
import store from '@/store'
import router from '@/router'
var userInfo = {ID: '',Name: '',Telephone: ''}
export default {
    name: "UpName",
    data(){
        return {
            name: ''
        }
    },
    methods: {
        updataName(){
                userService.updataName(this.name, JSON.parse(store.state.user.userInfo).ID)
                    .then(function (response) {
                        
                        userInfo.ID = response.data.data.user.ID
                        userInfo.Name = response.data.data.user.Name
                        userInfo.Telephone = JSON.parse(store.state.user.userInfo).Telephone
                        store.commit("user/SET_INFO", JSON.stringify(userInfo))

                        router.push("/home")
                })
                    .catch(function (error) {
                        if(error.response){
                            alert(error.response.data.msg)
                        }
                    })


            },
    }
  
}
</script>
    
<style scoped>

</style>
    