<template>
    <div class="app-main">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: "AppMain"
}
</script>
<style lang="scss">
    .app-main{
        min-height: calc(100vh - 50px);
    }
</style>