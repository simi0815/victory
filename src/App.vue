<template>
    <div id="app">
        <!--logo标志-->
        <div class="logo">
            <img src="./assets/images/banner/logo.png" alt="">
        </div>
        <!--设置banner点击区域-->
        <div class="masking" @mouseenter="isShow=true" >

            <transition
                    enter-active-class="animated fadeIn"
                    leave-active-class="animated fadeOut"
            >
                <NavBar v-if="isShow" ></NavBar>
            </transition>

        </div>

        <router-view></router-view>
    </div>


</template>
<script>
    import NavBar from "@/components/NavBar";

    export default {
        name: 'App',
        data() {
            return {
                isShow: false,
            }
        },
        components: {
            NavBar,
        },
        methods: {
            hander(){
                console.log("hh")
            }
        },

    }
</script>
<style>
    .logo {
        position: fixed;
        width: 200px;
        height: 40px;
        padding-left: 20px;
        z-index: 9999;
        margin-top: 18px;
    }
    .logo img{
        width: 100%;
        height: 100%;
    }
    .masking{
        position: fixed;
        height: 75px;
        width: 100%;
    }

</style>
