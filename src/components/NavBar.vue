<template>
    <div class="navbar">

        <a-row :class="{animated:true,fadeInRight:isIn}">
            <a-col :span="6"></a-col>
            <a-col :span="12">
                <a-menu style="width: 100%;height: 75px;font-size: 16px;line-height: 75px " v-model="current"
                        mode="horizontal">
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
            </a-col>
            <a-col :span="6"></a-col>

        </a-row>

    </div>
</template>

<script>
    export default {
        name: "NavBar",
        data() {
            return {
                current: ['mail'],
                isIn: false,
            }
        },
        methods: {},
        mounted() {
            this.isIn = true
        }

    }
</script>

<style>

    /*只在pc端有效，改动vueant自带导航栏的样式*/
    .navbar {

        width: 100%;
        height: 100%;
        font-size: 16px;
        font-weight: 500;
        line-height: 75px;
        color: #666666;
        background-color: #fff;
    }

    .ant-menu-item, .ant-menu-submenu-title ,.subitem {
        cursor: url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/cursor/ayuda.cur), auto !important;
        text-align: center !important;
        padding: 0 16px !important;
    }

    .ant-menu-item .anticon,
    .ant-menu-submenu-title .anticon {
        margin-right: 0 !important;
    }

    .ant-menu-vertical.ant-menu-sub,
    .ant-menu-vertical-left.ant-menu-sub,
    .ant-menu-vertical-right.ant-menu-sub {
        min-width: auto !important;
        border-right: 0;
        font-weight: 500;
    }


    /*只在pc端有效，改动vueant自带导航栏的颜色*/
    @media screen and (min-width: 769px) {
        .ant-menu-item :hover,
        .ant-menu-submenu-title:hover,
        .subitem:hover {
            color: #e67474 !important;
        }


        .ant-menu-horizontal > .ant-menu-item:hover,
        .ant-menu-horizontal > .ant-menu-submenu:hover,
        .ant-menu-horizontal > .ant-menu-item-active,
        .ant-menu-horizontal > .ant-menu-submenu-active,
        .ant-menu-horizontal > .ant-menu-item-open,
        .ant-menu-horizontal > .ant-menu-submenu-open,
        .ant-menu-horizontal > .ant-menu-item-selected,
        .ant-menu-horizontal > .ant-menu-submenu-selected {
            color: #e67474 !important;
            border-bottom: 2px solid #e67474 !important;

        }
        .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{
            background-color: rgba(246,116,116,.3)  !important;
            color: #e67474 !important;
        }
    }


</style>