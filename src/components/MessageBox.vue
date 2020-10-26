<template>
    <div class="message-box">
        hello
    </div>
</template>

<script>
    export default {
        name: "MessageBox"
    }
</script>

<style scoped>
    .message-box{
        position: fixed;
        width: 200px;
        height: 200px;
        background-color: #fff;
        z-index: 99998;
        bottom: 180px;
        left: 0;
    }
</style>