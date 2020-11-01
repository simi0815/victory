<template>
    <div id="app">

        <!--slide组件,那个吊着的猫-->
        <Slide>
            
        </Slide>



        <!--设置banner点击区域，masking是导航栏面板的响应区域-->
        <div class="masking" @mouseenter="isShow=true" v-if="currentPageNavShow&&!isMob">
            <!--logo标志-->
            <div class="logo">
                <img src="./assets/images/banner/logo.png" alt="">
            </div>
            <!--右侧功能区-->
            <div class="funcArea">
                <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-sousuo"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-yonghu"></use>
                </svg>
            </div>
            <!--PC导航栏-->
            <transition
                    enter-active-class="animated fadeIn"
                    leave-active-class="animated fadeOut"
            >
                <NavBar v-if="isShow" ></NavBar>
                <!--<NewPCNav ></NewPCNav>-->

            </transition>

        </div>
        <!--判断是否是手机，是手机渲染手机样式导航栏-->
        <div class="mob_nav" v-if="currentPageNavShow&&isMob">
            <MobNav></MobNav>
        </div>
        <!--对话框-->
        <Live2D ref="liveTd"></Live2D>
        <!--路由出口-->
        <router-view></router-view>
    </div>


</template>
<script>
    import NavBar from "@/components/NavBar";
    import MobNav from '@/components/MobNav'
    import Slide from '@/components/Slide'
    import Live2D from '@/components/Live2D'
    import MessageBox from '@/components/MessageBox'

    export default {
        name: 'App',
        data() {
            return {
                isShow: false,//控制导航栏显示和隐藏
                isMob:false,
                currentPageNavShow:true//如果路由出口不应该有导航栏就不再显示导航栏，级别比isShow高
            }
        },
        components: {
            NavBar,
            MobNav,
            Slide,
            Live2D,
            MessageBox,
        },
        mounted() {
            //    判断是否是手机
            //    先判断用户浏览器前缀

            let flag = navigator.userAgent.match(
                /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
            );
            if(flag){
                this.isMob = true;
                console.log("这个前缀是手机");
                this.$store.commit('SET_IS_MOBILE',true);
                return   //走了
            }
            //    再判断用户浏览器窗口，有的用户（比如我）在pc浏览器模拟手机浏览器
            if(document.body.clientWidth<768){
                //屏幕或窗口小于768px认为手机
                 this.isMob = true;
                 this.$store.commit('SET_IS_MOBILE',true);
            }
            //   当屏幕尺寸发生改变的时候，动态改变手机
            window.onresize =  ()=> {
                let ism = this.$store.state.isMobile;
                console.log(document.body.clientWidth);
                 if(!ism && document.body.clientWidth<768){
                 this.isMob = true;
                 this.$store.commit('SET_IS_MOBILE',true);
                 console.log("屏幕尺寸被修改，样式变为手机样式");
                }else if(ism && document.body.clientWidth>=768){
                    this.isMob = false;
                 this.$store.commit('SET_IS_MOBILE',false);
                 console.log("屏幕尺寸被修改，样式变为PC样式");
                 }
                 this.$children.isMobile = this.$store.state.isMobile

            }


        },
        methods: {},

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
        position: absolute;
        top: 0;
        right: 0;
        font-size: 30px;
        margin-top: 14px;
        z-index: 9999;
    }

    .funcArea .icon {
        margin: 10px;
        z-index: 9999;
        color: #666;
    }


</style>
