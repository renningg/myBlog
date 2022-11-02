<template>
    <div class="index">
        <h2>学习，永无止境</h2>
        <el-timeline>
            <el-timeline-item v-for="(activity, index) in activities" :key="index" :icon="activity.icon"
                :type="activity.type" :color="activity.color" :size="activity.size" :hollow="activity.hollow"
                :timestamp="activity.timestamp">
                <el-card>
                    <h4>{{activity.title}}</h4>
                    <p>{{activity.content}}</p>
                </el-card>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script lang="ts" setup>
import { MoreFilled } from '@element-plus/icons-vue'

const activities = [
    {
        title: '第一个Vue3博客',
        content: '购买腾讯服务器，nginx部署',
        timestamp: '2022/9',
        size: 'large',
        type: 'primary',
        icon: MoreFilled,
    },
    {
        title: 'Uniapp',
        content: '在郑州做了两个月的uniapp开发，写页面，调接口',
        timestamp: '2022/7',
        size: 'large',
        type: 'success',
    },
    {
        title: '学习React，学习Uniapp',
        content: '',
        timestamp: '2022/5',
        size: 'large',
        type: 'primary',
    },
    {
        title: '第一个Vue2后台管理系统',
        content: '由panjiachen大佬的模板改造而来，后端C#，Oracle数据库',
        timestamp: '2022/4',
        size: 'large',
        type: 'primary',
    },
    {
        title: '开启前端学习之路',
        content: '',
        timestamp: '2021/10',
        size: 'large',
        type: 'primary',
    },
    {
        title: '华东理工大学',
        content: '专业：控制工程，开始读研',
        timestamp: '2021/9',
        size: 'large',
        type: 'success',
    },
    {
        title: '我的母校：大连工业大学',
        content: '专业：自动化，热爱单片机，喜欢焊电路板。',
        timestamp: '2017/9',
        size: 'large',
        type: 'success',
    },
]
</script>
<style lang="scss" scoped>
.index {
    width: 70%;
    margin-left: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 100px;

    .el-timeline {
        width: 40%;
    }
}
</style>