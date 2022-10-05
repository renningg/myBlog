<template>
    <div class="nav">
        <div :span="4">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        </div>
        <div v-for="item in spanList" :key=item.index :span="2"
            :style="item.index == currentIndex ? 'border-bottom : 5px solid #027AFE;  color: #027AFE;' : ''">
            <span @click="changeTab(item)">{{item.name}}</span>
        </div>
        <div :span="4">
            <span @click="centerDialogVisible = true">退出</span>
        </div>
    </div>
    <el-dialog v-model="centerDialogVisible" title="" width="30%" center>
        <div style="text-align: center;font-size: 20px;">确定退出?</div>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取消</el-button>
                <el-button type="primary" @click="logout">确定</el-button>
            </span>
        </template>
    </el-dialog>
</template>
<script lang="ts" setup>
import { ref, onMounted, watchEffect } from 'vue'
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus'
const centerDialogVisible = ref(false)
const spanList = ref([
    {
        name: '文章',
        index: '0',
        path: 'article'
    },
    {
        name: '项目',
        index: '1',
        path: 'project'
    },
    {
        name: '介绍',
        index: '2',
        path: 'intro'
    }
])
const currentIndex = ref('0')
const router = useRouter()
const logoutBool = ref(false)
const changeTab = (item: any) => {
    console.log(item);
    currentIndex.value = item.index
    // sessionStorage.setItem('currentIndex', currentIndex.value)
    // console.log(currentIndex.value);
    router.push({
        name: item.path
    })
}
watchEffect(() => {
    console.log(currentIndex.value);


})
const logout = () => {
    currentIndex.value = '0';
    localStorage.removeItem('token')
    router.push({
        name: 'login'
    })
    // sessionStorage.setItem('currentIndex', '0')
    centerDialogVisible.value = false
    ElMessage.success('退出登录！')

}
onMounted(() => {
    // let test: any = sessionStorage.getItem('currentIndex')
    // currentIndex.value = test
})
</script>
<style lang="scss" scoped>
.nav {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    background-color: #EFB9C3;
    justify-content: space-around;
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: 1px solid #888;
    z-index: 1000;
}

span {
    text-align: center;
    line-height: 50px;
    font-size: 20px;
    align-items: center;
    font-weight: bold;
}

.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>