<template>
    <el-row>
        <div style="width: 500px;">
            <el-radio-group v-model="releaseType" style="float:left">
                <el-radio label="blog" size="large">发布博客</el-radio>
                <el-radio label="conversation" size="large">发布话题</el-radio>
            </el-radio-group>
            <el-button type="primary" plain @click="releaseContent" style="float:right">发布</el-button>
        </div>
    </el-row>
    <el-row>
        <div style="border: 1px solid #ccc">
            <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig"
                :mode="mode" />
            <Editor style="height: 500px; overflow-y: hidden;" v-model="valueHtml" :defaultConfig="editorConfig"
                :mode="mode" @onCreated="handleCreated" />
        </div>
    </el-row>
    <el-row>
        <el-col>
            <el-form :model="blog" label-width="120px">
                <el-form-item label="博客标题">
                    <el-input v-model="blog.name" />
                </el-form-item>
            </el-form>
        </el-col>
        <el-upload 
            class="upload-demo"
            action="#" 
            :limit="1"
            accept=".jpg,.png"
            method="post"
            :multiple="false"
            :http-request="fileLoader"

            >
            <template #trigger>
                <el-button type="primary">选择文件</el-button>
            </template>
            <template #tip>
                <div class="el-upload__tip">
                    文件大小不能超过 500kb
                </div>
            </template>
        </el-upload>
        <el-col>
        </el-col>
    </el-row>
</template>

<script>
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, ref, shallowRef } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

import blogService from "@/service/blogService";
import store from "@/store"

const valueHtml = ref('<p>hello</p>')

let formData = new FormData();

let oname

export default {
    components: { Editor, Toolbar },
    name: 'Release',
    setup() {
        // 编辑器实例，必须用 shallowRef
        const editorRef = shallowRef()

        const toolbarConfig = {}
        const editorConfig = { placeholder: '请输入内容...' }

        // 组件销毁时，也及时销毁编辑器
        onBeforeUnmount(() => {
            const editor = editorRef.value
            if (editor == null) return
            editor.destroy()
        })

        const handleCreated = (editor) => {
            editorRef.value = editor // 记录 editor 实例，重要！
        }

        return {
            editorRef,
            valueHtml,
            mode: 'default', // 或 'simple'
            toolbarConfig,
            editorConfig,
            handleCreated
        };
    },
    data() {
        return {
            releaseType: '',
            blog: {
                name: ''
            }
        }
    },
    methods: {
        releaseContent() {

            oname = this.blog.name

            blogService.releaseBlogCover(formData).then(function (response) {
                blogService.releaseBlog({
                    "uuid": JSON.parse(store.state.user.userInfo).ID,
                    "blogId": '',
                    "name": oname,
                    "coverPath": response.data.data.fid,
                    "coverName": response.data.data.fname,
                    "html": valueHtml.value
                }).then(function (response) {
                    alert(response.data.msg)
                    //返回我的博客列表
                })
            })


        },
        fileLoader(param){
            formData.append('file',param.file)
            formData.append('pictureCategory','articleCover')
        }

    }

}

</script>

<style scoped>

</style>
