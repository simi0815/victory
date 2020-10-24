<!--vue-ant样式太难看，打算手写-->
<template>
    <div class="mob-nav">
        <!--开关按钮，控制nav隐藏和显示-->
        <div class="btn" @click="isShow=true">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-menu"></use>
            </svg>
        </div>
        <transition
                name="custom-classes-transition"
                enter-active-class="animated slideInLeft"
                leave-active-class="animated slideOutLeft"
        >
            <div class="navArea clearfix" v-show="isShow">
                <!--黑色蒙版-->
                <div class="bg"></div>
                <!--左半部内容区域-->
                <div class="left">
                    <!--头像-->
                    <div class="avatar">
                        <img src="../assets/images/avatar.jpeg" alt="">
                    </div>
                    <!--logo区域-->
                    <div class="logo">
                        <img src="../assets/images/banner/logo.png" alt="">
                    </div>
                    <!--链接区域-->
                    <div class="linker">
                        <ul class="clearfix">
                            <li>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-github"></use>
                                </svg>
                            </li>
                            <li>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-qq"></use>
                                </svg>
                            </li>
                            <li>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-weixin"></use>
                                </svg>
                            </li>
                            <li>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-csdn"></use>
                                </svg>
                            </li>
                        </ul>
                    </div>
                    <!--搜索区域-->
                    <div class="search">
                        <a-input-search placeholder="Python" size="large" @search="onSearch">
                            <a-button slot="enterButton">
                                搜索
                            </a-button>
                        </a-input-search>
                    </div>

                    <a-menu mode="inline" :open-keys="openKeys" style="width: 100%" @openChange="onOpenChange">
                        <a-sub-menu key="sub1">
                            <span slot="title"><a-icon type="mail"/><span>首页</span></span>
                            <a-menu-item key="1">
                                Option 1
                            </a-menu-item>
                            <a-menu-item key="2">
                                Option 2
                            </a-menu-item>
                            <a-menu-item key="3">
                                Option 3
                            </a-menu-item>
                            <a-menu-item key="4">
                                Option 4
                            </a-menu-item>
                        </a-sub-menu>
                        <a-sub-menu key="sub2">
                            <span slot="title"><a-icon type="appstore"/><span>归档</span></span>
                            <a-menu-item key="5">
                                Option 5
                            </a-menu-item>
                            <a-menu-item key="6">
                                Option 6
                            </a-menu-item>
                            <a-sub-menu key="sub3" title="Submenu">
                                <a-menu-item key="7">
                                    Option 7
                                </a-menu-item>
                                <a-menu-item key="8">
                                    Option 8
                                </a-menu-item>
                            </a-sub-menu>
                        </a-sub-menu>
                        <a-sub-menu key="sub4">
                            <span slot="title"><a-icon type="setting"/><span>清单</span></span>
                            <a-menu-item key="9">
                                Option 9
                            </a-menu-item>
                            <a-menu-item key="10">
                                Option 10
                            </a-menu-item>
                            <a-menu-item key="11">
                                Option 11
                            </a-menu-item>
                            <a-menu-item key="12">
                                Option 12
                            </a-menu-item>
                        </a-sub-menu>
                    </a-menu>

                    <div class="close" @click="isShow=false">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-cc-close-crude"></use>
                        </svg>
                    </div>
                </div>


            </div>
        </transition>


    </div>
</template>
<script>
    export default {
        name: 'MobNav',
        data() {
            return {
                rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
                openKeys: ['sub1'],
                isShow: false
            }
        },
        methods: {
            onOpenChange(openKeys) {
                const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
                if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
                    this.openKeys = openKeys;
                } else {
                    this.openKeys = latestOpenKey ? [latestOpenKey] : [];
                }
            },
            onSearch() {

            }
        }
    }
</script>
<style scoped>
    .mob-nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 19999;
        overflow: scroll;
    }

    .btn {
        color: gray;
        font-size: 30px;
        position: absolute;
        left: 0;
        top: 0;
    }

    .navArea {
        width: 100%;
        height: 100%;
    }
    .navArea .left {
        width: 60%;
        height: 100%;
        position: absolute;
        top: 0;
        background-color: #fff;
    }

    .navArea .bg {
        width: 220%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,.5);
    }

    .avatar {
        width: 90px;
        height: 90px;
        margin: 40px auto 5px auto;
    }

    .avatar img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 2px solid rgba(0, 0, 0, .5);

    }

    .logo {
        margin: auto;
        position: relative;
    }

    .linker {
        font-size: 25px;
    }

    .linker ul {
        width: 80%;
        margin: 10px auto;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;

    }


    .left .close {
        margin: 10px;
        position: absolute;
        right: -45px;
        top: -5px;
        color: white;
        font-size: 30px;
    }


</style>