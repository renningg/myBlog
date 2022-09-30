<template>
    <div class="particles">
        <Particles></Particles>
    </div>
    <div class="login-form">
        <div class="name">Blog System</div>
        <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" style="max-width: 460px">
            <el-form-item label="User">
                <el-input v-model="formLabelAlign.name" />
            </el-form-item>
            <el-form-item label="Password">
                <el-input v-model="formLabelAlign.region" />
            </el-form-item>
            <el-form-item>
                <el-button class="loginButton" type="primary" @click="login">登录</el-button>
                <!-- <el-button @click="resetForm(ruleFormRef)">Reset</el-button> -->
            </el-form-item>
        </el-form>
    </div>
</template> 

<script lang="ts" setup>
import Particles from '@/components/particles/index.vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { reactive, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
const router = useRouter()
const store = useStore()
const labelPosition = ref('right')

const formLabelAlign = reactive({
    name: 'user',
    region: '111',
    type: '',
})

const login = () => {
    console.log(1111);
    store.commit('login/authorizedLogin', 'token');
    console.log(store.state.login.token);
    localStorage.setItem('token','token',)
    if (store.state.login.token !== "") {
        router.push(
            '/article',
        )
        ElMessage.success('登陆成功！')
    }
    else {
        ElMessage.error('无法获取有效token，登陆失败！')
    }

}
onMounted(() => {

})
</script>

<style lang="scss" scoped>
.login-form {
    width: 550px;
    height: 250px;
    padding: 20px 0px;
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    // 设置动画的名称，周期，动画如何完成一个周期，启动前的延迟间隔，动画应该播放多少次，是否循环交替反向播放动画
    animation: cloud 2s ease-in 0s infinite alternate;

    .name {
        color: white;
        font-size: 24px;
        margin-bottom: 50px;
        text-align: center;
    }
}

.loginButton {
    /* border: 1px solid red; */
    width: 100%;
}



@keyframes cloud {
    0% {
        transform: translate(-50%, -50%);
    }

    100% {

        transform: translate(-50%, -40%);
    }
}
</style>
  