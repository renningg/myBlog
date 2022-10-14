<template>
  <div class="nav">
    <div :span="4" class="title">
      <img src="../assets/nav.png" alt="" />
      <span> Welcome to rnshine !</span>
    </div>
    <div
      v-for="item in spanList"
      :key="item.index"
      :span="2"
      :style="
        item.index == currentIndex
          ? 'border-bottom : 3px solid #3EAF7C;  color: #3EAF7C;'
          : ''
      "
    >
      <span @click="changeTab(item)">{{ item.name }}</span>
    </div>
    <div :span="4">
      <span @click="centerDialogVisible = true">退出</span>
    </div>
  </div>
  <el-dialog v-model="centerDialogVisible" title="" width="30%" center>
    <div style="text-align: center; font-size: 20px">确定退出?</div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="logout">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import { ref, onMounted, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
const centerDialogVisible = ref(false);
const spanList = ref([
  {
    name: "♥写文章提升自己♥",
    index: "0",
    path: "article",
  },
  {
    name: "⭐个人项目展示⭐",
    index: "1",
    path: "project",
  },
  {
    name: "❀介绍一下自己❀",
    index: "2",
    path: "intro",
  },
]);
const currentIndex = ref("0");
const router = useRouter();
const logoutBool = ref(false);
const changeTab = (item: any) => {
  console.log(item);
  currentIndex.value = item.index;
  // sessionStorage.setItem('currentIndex', currentIndex.value)
  // console.log(currentIndex.value);
  router.push({
    name: item.path,
  });
};
watchEffect(() => {
  console.log(currentIndex.value);
});
const logout = () => {
  currentIndex.value = "0";
  localStorage.removeItem("token");
  router.push({
    name: "login",
  });
  // sessionStorage.setItem('currentIndex', '0')
  centerDialogVisible.value = false;
  ElMessage.success("退出登录！");
};
onMounted(() => {
  // let test: any = sessionStorage.getItem('currentIndex')
  // currentIndex.value = test
});
</script>
<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  background-color: white;
  box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.2);
  padding-bottom: 10px;
  .title {
    // border: 1px solid;
    display: flex;
    img {
      height: 60px;
    }
    span {
      line-height: 60px;
      font-style: italic;
      font-size: 22px;
      // border: 1px solid;
      height: 100%;
    }
  }
}

span {
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  align-items: center;
  cursor: pointer;
}

.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>