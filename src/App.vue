<template>
    <div id="app">

        <!--slide组件,那个吊着的猫-->
        <Slide></Slide>


        <!--设置banner点击区域，masking是导航栏面板的响应区域-->
        <div class="masking" @mouseenter="isShow=true">
            <!--logo标志-->
            <div class="logo">
                <img src="./assets/images/banner/logo.png" alt="">
            </div>

            <div class="funcArea">
                <a-icon type="search" class="icon"/>
                <a-icon type="user" class="icon"/>
            </div>
            <transition
                    enter-active-class="animated fadeIn"
                    leave-active-class="animated fadeOut"
            >
                <NavBar v-if="isShow"></NavBar>
            </transition>

        </div>


        <!--路由出口-->
        <router-view></router-view>
    </div>


</template>
<script>
    import NavBar from "@/components/NavBar";
    import Slide from  '@/components/Slide'
    export default {
        name: 'App',
        data() {
            return {
                isShow: false,
            }
        },
        components: {
            NavBar,
            Slide,
        },
        methods: {
            hander() {
                console.log("hh")
            }
        },

    }
</script>
<style>
    .masking {
        position: fixed;
        top: 0;
        left: 0;
        height: 75px;
        width: 100%;
        z-index: 9999;
    }
    .logo {
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        height: 40px;
        padding-left: 20px;
        z-index: 9999;
        margin-top: 18px;
    }

    .logo img {
        width: 100%;
        height: 100%;
    }

    .funcArea {
        float: right;
        font-size: 30px;
        margin-top: 14px;
        z-index: 9998;
    }

    .funcArea .icon {
        margin: 10px;
        z-index: 9999;
        color: #666;
    }



</style>
