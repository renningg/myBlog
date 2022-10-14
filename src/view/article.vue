<template>
  <div class="index">
    <div class="left">
      <div class="left-item" v-for="(item, index) in articleList" :key="index">
        <div class="content">
          <div class="title">{{ item.title }}</div>
          <div class="detail">
            {{ item.detail }}
          </div>
          <div
            style="
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              margin-bottom: 10px;
            "
          >
            <div
              class=""
              style="
                width: 30%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
              "
            >
              <div style="display: flex">
                <el-icon :style="{ margin: '2px' }"><View /></el-icon>
                <div>{{ item.seeNum }}</div>
              </div>

              <div style="display: flex">
                <el-icon :style="{ margin: '2px' }"><ChatDotRound /></el-icon>
                <div>{{ item.commentNum }}</div>
              </div>

              <div style="display: flex">
                <el-icon
                  v-if="!item.isStar"
                  @click="clickStar(item)"
                  :style="{
                    margin: '2px',
                    color: '',
                  }"
                  ><Star
                /></el-icon>
                <el-icon
                  v-if="item.isStar"
                  @click="clickStar(item)"
                  :style="{
                    margin: '2px',
                    color: 'orange',
                  }"
                  ><StarFilled
                /></el-icon>
                <div>{{ item.likeNum }}</div>
              </div>
            </div>
            <div class="time" style="width: 20%">
              <span>{{ item.time }}</span>
            </div>
          </div>
        
        </div>
        <div class="picture">
          <img :src="item.pic" alt="" />
        </div>
      </div>
    </div>
    <div class="right">
      <div class="avatar">
        <img src="@/assets/avatar.jpg" alt="" />
        <div class="nickName">一介菜菜</div>
      </div>
      <div class="tag">
        <el-tag
          size="large"
          v-for="(item, index) in tagList"
          :key="index"
          @click="clickTag(item)"
          >{{ item }}</el-tag
        >
      </div>
      <div class="socialAccount">第三方社交帐号，关注博主！</div>
      <div class="socialAccount_pic">
        <img src="@/assets/QQ.jpg" alt="" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { ElMessage } from "element-plus";
const articleList = ref([
  {
    title: "React如何利用hook的useRoutes()写路由表",
    detail: "你的组件必须是函数组件，才能用hook",
    seeNum: 2,
    commentNum: 3,
    likeNum: 2,
    time: "2022-9-21",
    pic: "https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg",
    isStar: false,
  },
  {
    title: "防抖与节流",
    detail:
      "在开发过程中，我们经常会需要绑定一些持续性触发的事件，如scroll，resize，mousemove等等，但有些时候我们并不希望在事件持续触发过程中那么频繁地去执行相应的事件函数，这样太浪费性能。所以通过防抖和节流来限制事件频繁发生。",
    seeNum: 2,
    commentNum: 3,
    likeNum: 2,
    time: "2022-9-21",
    pic: "https://pic1.zhimg.com/v2-535e92c65ddaff1a55f11df10c680c75_720w.jpg?source=172ae18b",
    isStar: false,
  },
  {
    title: "github上传代码",
    detail:
      ' git init ; git add . ; git commit -m "xx" ; git remote add origin https://xxxxxxxxxxxxxxxxxxxxxxxxxxxx.git ; git push -u origin master ; 在网页验证账号,或者输入自己github的账号密码通过验证',
    seeNum: 2,
    commentNum: 3,
    likeNum: 2,
    time: "2022-9-21",
    pic: "https://logosmarcas.net/wp-content/uploads/2020/12/GitHub-Logo.png",
    isStar: false,
  },
  {
    title: "/deep/和::v-deep修改elementUi样式",
    detail:
      '/deep/使用在 lang="less" scoped ; ::v-deep使用在 lang="scss" scoped',
    seeNum: 2,
    commentNum: 3,
    likeNum: 2,
    time: "2022-9-21",
    pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fresource.shangmayuan.com%2Fdroxy-blog%2F2020%2F11%2F25%2Fb4bdd6b223504c859fda43e6cd8bf0b0-2.JPEG&refer=http%3A%2F%2Fresource.shangmayuan.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666405619&t=0ce49cdd4d54952064cb50857ffce43b",
    isStar: false,
  },
]);
const tagList = ref([
  "汉子",
  "181CM",
  "80KG",
  "🏀🏀🏀",
  "🏓🏓",
  "程序猿",
  "菜鸡一只",
  "单身汉",
]);
const throttle = (fn1: Function, fn2: Function, delay: Number) => {
  let beginTime = 0;
  return () => {
    let nowTime = Date.now();
    if (nowTime - beginTime >= delay) {
      fn1();
      beginTime = nowTime;
    } else fn2();
  };
};

const clickTag = throttle(
  () => {
    ElMessage.success("Yes！！！");
  },
  () => {
    ElMessage.error("点击的太快了！！！");
  },
  2000
);

const clickStar = (item: any) => {
  item.isStar = !item.isStar;
};
</script>
<style lang="scss" scoped>
.index {
  width: 80%;
  margin-left: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  margin-top: 70px;
}

.left {
  width: 70%;
  .left-item {
    width: 100%;
    height: 200px;
    display: flex;
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-around;
    box-shadow: 0 0 5px rgba($color: #000000, $alpha: 0.2);
    border-radius: 10px;
    .content {
      width: calc(100% - 220px);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 20px;
      // border: 1px solid;
      .title {
        font-size: 20px;
        font-weight: bold;
        text-align: left;
        // border: 1px solid;
      }

      .detail {
        // height: 70%;
        // border: 1px solid;
        line-height: 50px;
        text-align: left;
        white-space: wrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        background-color: #E2F3EB;
        border-left: 5px solid #009400;
        padding-left: 10px;
        // border: 1px solid;
      }
    }

    .picture img {
      width: 200px;
      height: 100px;
      margin: 50px 10px 0px 10px;
    }
  }

  .left-item:hover {
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba($color: black, $alpha: 0.2);
  }
}

.right {
  width: 25%;
  display: flex;
  flex-direction: column;
  .avatar img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 10px calc(50% - 50px);
  }
  .avatar img:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  .nickName {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }

  .tag {
    width: 200px;
    margin: 0px calc(50% - 100px);
    height: 150px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    .el-tag {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin-top: 10px;
    }
    .el-tag:hover {
      cursor: pointer;
    }
  }

  .socialAccount {
    text-align: center;
    font-size: 16px;
    margin-top: 100px;
  }

  .socialAccount_pic img {
    width: 250px;
    height: 350px;
    border-radius: 10px;
    margin: 20px calc(50% - 125px);
    box-shadow: 0 0 5px 5px rgba($color: #000000, $alpha: 0.2);
    transition: all 0.5s ease 0.1s;
  }

  .socialAccount_pic img:hover {
    scale: calc(1.1);
  }
}
</style>