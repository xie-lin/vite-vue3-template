<template>
    <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            :ellipsis="false"
            @select="handleSelect"
            style="border-bottom-style: hidden;"
    >
                <!-- style="box-shadow: 1px -5px 10px #000000;border-bottom-style: hidden;" -->
        <div style="text-align: center;margin-left: 75px;" @click="isShowMenu">
            <img src="../assets/logo.png" style="height: 50px;object-fit: contain;" />
        </div>
        <div class="flex-grow"></div>
        <el-menu-item index="2">Processing Center</el-menu-item>
        <el-sub-menu index="1">
            <template #title>
                <el-avatar :size="40" :src="circleUrl" />
            </template>
            <el-menu-item index="2-1">个人信息</el-menu-item>
            <el-menu-item index="2-2">退出登录</el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    const activeIndex = ref(0)
    const circleUrl =  'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    const emit = defineEmits(['isShowMenu'])
    const handleSelect = (key: string, keyPath: string[]) => {
        console.log(key, keyPath)
    }
    const isShowMenu = () => {
        emit('isShowMenu')
    }
</script>




<style>
 
</style>