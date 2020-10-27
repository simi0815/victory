<template>
    <div class="navbar">

        <a-row :class="{animated:true,fadeInRight:isIn}">
            <a-col :span="6"></a-col>
            <a-col :span="12">
                <a-menu v-model="current" mode="horizontal"
                        style="width: 100%;height: 75px;font-size: 16px;line-height: 75px ">
                    <a-menu-item key="index">
                        <router-link to="/index">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-iconindexsel1"></use>
                            </svg>
                            首页
                        </router-link>
                    </a-menu-item>
                    <a-sub-menu>
                        <span slot="title" class="submenu-title-wrapper" >
                                    <svg class="icon" aria-hidden="true">
                                         <use xlink:href="#icon-dangan"></use>
                                     </svg>
                                    归档
                                </span>
                        <a-menu-item key="hacker" class="subitem" @click="notCoding('极客')">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-anonymity-101"></use>
                            </svg>
                            极客
                        </a-menu-item>
                        <a-menu-item key="article" class="subitem" @click="notCoding('文章')">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-wenzhang"></use>
                            </svg>
                            文章
                        </a-menu-item>
                        <a-menu-item key="comments" class="subitem" @click="notCoding('影评')">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-dianying"></use>
                            </svg>
                            影评
                        </a-menu-item>
                        <a-menu-item key="think" class="subitem" @click="notCoding('随想')">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-sikao"></use>
                            </svg>
                            随想
                        </a-menu-item>


                    </a-sub-menu>
                    <a-menu-item key="all" @click="notCoding('清单')">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-quanliqingdan"></use>
                        </svg>
                        清单
                    </a-menu-item >
                    <a-menu-item key="message" @click="notCoding('留言板')">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-liuyan"></use>
                        </svg>
                        留言板
                    </a-menu-item >
                    <a-menu-item key="friends" @click="notCoding('友人帐')">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-pengyou"></use>
                        </svg>
                        友人帐
                    </a-menu-item>
                    <a-sub-menu >
                                <span slot="title" class="submenu-title-wrapper">
                                    <svg class="icon" aria-hidden="true">
                                         <use xlink:href="#icon-guanyu"></use>
                                     </svg>
                                    关于
                                </span>

                        <a-menu-item key="setting:9" class="subitem" @click="notCoding('主题')">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-zhuti"></use>
                            </svg>
                            主题
                        </a-menu-item>
                        <a-menu-item key="setting:10" class="subitem" @click="notCoding('作者')">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-zuozhe"></use>
                            </svg>
                            作者
                        </a-menu-item>


                    </a-sub-menu>
                    <a-menu-item key="app" @click="notCoding('APP')">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-app"></use>
                        </svg>
                        APP
                    </a-menu-item>
                    <a-menu-item key="bush" @click="notCoding('小树林')">
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
                menuList: [
                    {id: 1, title: "首页", icon: "", subMenu: false, url: "/index", key: "index"},
                    {
                        id: 2, title: "归档", icon: "", subMenu: true, subMenuList: [
                            {id: 3, title: "极客", icon: "", subMenu: false, url: "/hacker", key: "hacker"},
                            {id: 4, title: "文章", icon: "", subMenu: false, url: "/article", key: "article"},
                            {id: 5, title: "影评", icon: "", subMenu: false, url: "/filmcomments", key: "filmcomments"},
                            {id: 6, title: "随想", icon: "", subMenu: false, url: "/think", key: "think"},
                        ]
                    },
                    {id: 7, title: "清单", icon: "", subMenu: false, url: "/list", key: "list"},
                    {id: 8, title: "留言板", icon: "", subMenu: false, url: "/note", key: "note"},
                    {id: 9, title: "友人帐", icon: "", subMenu: false, url: "/friends", key: "friends"},
                    {
                        id: 10, title: "关于", icon: "", subMenu: true, subMenuList: [
                            {id: 11, title: "主题", icon: "", subMenu: false, url: "/theme", key: "theme"},
                            {id: 12, title: "作者", icon: "", subMenu: false, url: "/author", key: "author"},
                        ]
                    },
                    {id: 13, title: "APP", icon: "", subMenu: false, url: "/apps", key: "apps"},
                    {id: 14, title: "小树林", icon: "", subMenu: false, url: "/forest", key: "forest"},
                ],
                current: ['index'],
                isIn: false,
            }
        },
        methods: {
            notCoding(func) {
                this.$store.commit("setLiveWord", func+"功能尚在开发...");
                this.current=["index"]
            }
        },
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

    .ant-menu-item, .ant-menu-submenu-title, .subitem {
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

        .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
            background-color: rgba(246, 116, 116, .3) !important;
            color: #e67474 !important;
        }
    }


</style>