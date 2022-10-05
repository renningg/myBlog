<template>
  <div class="index">
    <div class="item" v-for="(item, index) in PCList" :key="index">
      <div class="title">
        {{ item.name }}
      </div>
      <img :src="item.pic" alt="" />
      <div class="skill">
        {{ item.skill }}
      </div>
      <div class="intro">
        {{ item.intro }}
      </div>
    </div>
    <div class="APPitem" v-for="(item, index) in APPList" :key="index">
      <div class="title">
        {{ item.name }}
      </div>
      <img :src="item.pic" alt="" />
      <div class="skill">
        {{ item.skill }}
      </div>
      <div class="intro">
        {{ item.intro }}
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const PCList = ref([
  {
    index: 0,
    name: "文献标注工具",
    pic: "http://43.143.6.197:8066/files/markTools.gif",
    skill: "技术栈：Vue3 + ElementUi",
    intro:
      "功能：输入英文文献，根据句号自动分割，新增动作，属性等。可导出原文，标注结果等等",
  },
  {
    index: 1,
    name: "价值链管理系统",
    pic: "http://43.143.6.197:8066/files/polyolefin.gif",
    skill: "技术栈：Vue2 + ElementUi + VueX + VueRouter",
    intro:
      "功能：聚烯烃价值链管理系统，主要数据展示，报表生成，库存监视，数据管理等等",
  },
]);
const APPList = ref([
  {
    index: 0,
    name: "uniapp",
    pic: "http://43.143.6.197:8066/files/uniapp.gif",
    skill: "技术栈：uniapp",
    intro:
      "功能：基于uniapp开发的APP，提供产品发布，产品下单，支持微信，支付宝支付，高德定位等等",
  },
]);
</script>
<style lang="scss" scoped>
.index {
  width: 70%;
  margin-left: 15%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // border: 1px solid;
  margin-top: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100%;

  .item {
    width: 45%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
      width: 100%;
      height: 400px;
      border-radius: 5px;
      box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.2);
      transition: all 0.5s ease 0.1s;
    }
    img:hover {
      scale: calc(1.1);
    }
  }

  .APPitem {
    width: 45%;
    height: 500px;
    // border: 1px solid;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
      width: 60%;
      margin-left: 20%;
      height: 400px;
      border-radius: 5px;
      box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.2);
      transition: all 0.5s ease 0.1s;
    }

    img:hover {
      scale: calc(1.2);
    }
  }

  .title {
    text-align: center;
    font-size: 20px;
  }

  .skill,
  .intro {
    color: black;
  }
}
</style>