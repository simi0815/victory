<template>
    <div class="not-found">
        <img src="../assets/images/404.jpg" alt="" class="image">

          <a-button class="btn" @click="back">返回地球</a-button>


    </div>
</template>

<script>
    export default {
        name: "404NotFound",
        methods:{
          back(){
              this.$router.push('/index')
          }
        },
        mounted() {
            this.$parent.currentPageNavShow = false;
        }
    }
</script>

<style scoped>
    .not-found{
        width: 100%;
        height: 100%;
    }
    .image{
        display: block;
        margin: 0 auto;
    }
    .btn{
        width: auto;
        height: 120px;
        font-size: 40px;
        line-height: 80px;
        display: block;
        margin:  0 auto;
    }
    @media screen and (min-width: 769px){
        .image{
        width: 55%;
        height: auto;
        min-width: 768px;
    }
    }
    @media screen and (max-width: 768px){
        .image{
        width: 100%;
            height:60%;
    }
    }
</style>