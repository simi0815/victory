<!--vue-ant样式太难看，打算手写-->
<template>
    <div class="mob-nav clearfix">
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
                        <a-input-search placeholder="Python" size="default" @search="onSearch">
                            <a-button slot="enterButton">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-sousuo"></use>
                                </svg>
                            </a-button>
                        </a-input-search>
                    </div>

                    <a-menu mode="inline" :open-keys="openKeys" style="width: 100%" @openChange="onOpenChange">
                        <a-menu-item key="index">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-iconindexsel1"></use>
                        </svg>
                        首页
                    </a-menu-item>
                    <a-sub-menu>
                        <span slot="title" class="submenu-title-wrapper">
                                    <svg class="icon" aria-hidden="true">
                                         <use xlink:href="#icon-dangan"></use>
                                     </svg>
                                    归档
                                </span>
                        <a-menu-item key="setting:1" class="subitem">
                                    <svg class="icon" aria-hidden="true">
                                         <use xlink:href="#icon-anonymity-101"></use>
                                     </svg>
                            极客
                        </a-menu-item>
                        <a-menu-item key="setting:2" class="subitem">
                                    <svg class="icon" aria-hidden="true">
                                         <use xlink:href="#icon-wenzhang"></use>
                                     </svg>
                            文章
                        </a-menu-item>
                        <a-menu-item key="setting:3" class="subitem">
                                    <svg class="icon" aria-hidden="true">
                                         <use xlink:href="#icon-dianying"></use>
                                     </svg>
                            影评
                        </a-menu-item>
                        <a-menu-item key="setting:4" class="subitem">
                                    <svg class="icon" aria-hidden="true">
                                         <use xlink:href="#icon-sikao"></use>
                                     </svg>
                            随想
                        </a-menu-item>


                    </a-sub-menu>
                    <a-menu-item key="all">
                        <svg class="icon" aria-hidden="true">
                                         <use xlink:href="#icon-quanliqingdan"></use>
                                     </svg>
                        清单
                    </a-menu-item>
                    <a-menu-item key="message">
                        <svg class="icon" aria-hidden="true">
                                         <use xlink:href="#icon-liuyan"></use>
                                     </svg>
                        留言板
                    </a-menu-item>
                    <a-menu-item key="friends">
                        <svg class="icon" aria-hidden="true">
                                         <use xlink:href="#icon-pengyou"></use>
                                     </svg>
                        友人帐
                    </a-menu-item>
                    <a-sub-menu>
                                <span slot="title" class="submenu-title-wrapper">
                                    <svg class="icon" aria-hidden="true">
                                         <use xlink:href="#icon-guanyu"></use>
                                     </svg>
                                    关于
                                </span>

                        <a-menu-item key="setting:9" class="subitem">
                                    <svg class="icon" aria-hidden="true">
                                         <use xlink:href="#icon-zhuti"></use>
                                     </svg>
                            主题
                        </a-menu-item>
                        <a-menu-item key="setting:10" class="subitem">
                                    <svg class="icon" aria-hidden="true">
                                         <use xlink:href="#icon-zuozhe"></use>
                                     </svg>
                            作者
                        </a-menu-item>


                    </a-sub-menu>
                    <a-menu-item key="app">
                        <svg class="icon" aria-hidden="true">
                                         <use xlink:href="#icon-app"></use>
                                     </svg>
                        APP
                    </a-menu-item>
                    <a-menu-item key="bush">
                        <svg class="icon" aria-hidden="true">
                                         <use xlink:href="#icon-tree"></use>
                                     </svg>
                        小树林
                    </a-menu-item>
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
        z-index: 1999999;
    }

    .btn {
        color: gray;
        position: fixed;
        font-size: 30px;
        left: 0;
        top: 0;
        z-index: 1999999;
    }

    .navArea {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 2000000;
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
        background-color: rgba(0, 0, 0, .5);
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
        margin: 0 auto;
        position: relative;
        width: 50%;
        left: -3%;
        height: 20px;
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
    .search{
        width: 80%;
        margin: 0 auto;
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