<template>
    <div class="main">
        <keep-alive>
            <navigation-bar></navigation-bar>
        </keep-alive>
    </div>
    
</template>

<script setup lang="ts">
    import NavigationBar from "./components/navigation-bar.vue";
</script>

<style lang="less" scoped>
.main{
    background: #F9F9F9;
}
</style>