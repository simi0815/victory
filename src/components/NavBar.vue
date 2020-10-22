<template>
    <div class="navbar">

        <a-row :class="{animated:true,fadeInRight:isIn}">
            <a-col :span="6"></a-col>
            <a-col :span="12">
                <a-menu style="width: 100%;margin-top: 13px;font-size: 16px " v-model="current" mode="horizontal">
                    <a-menu-item key="index">
                        <a-icon type="mail"/>
                        首页
                    </a-menu-item>
                    <a-sub-menu>
                                <span slot="title" class="submenu-title-wrapper"
                                ><a-icon type="setting"/>
                                    归档
                                </span>
                        <a-menu-item-group title="Item 1">
                            <a-menu-item key="setting:1">
                                Option 1
                            </a-menu-item>
                            <a-menu-item key="setting:2">
                                Option 2
                            </a-menu-item>
                        </a-menu-item-group>
                        <a-menu-item-group title="Item 2">
                            <a-menu-item key="setting:3">
                                Option 3
                            </a-menu-item>
                            <a-menu-item key="setting:4">
                                Option 4
                            </a-menu-item>
                        </a-menu-item-group>

                    </a-sub-menu>
                    <a-sub-menu>
                                <span slot="title" class="submenu-title-wrapper"
                                ><a-icon type="setting"/>
                                    清单
                                </span>
                        <a-menu-item-group title="Item 1">
                            <a-menu-item key="setting:4">
                                Option 1
                            </a-menu-item>
                            <a-menu-item key="setting:5">
                                Option 2
                            </a-menu-item>
                        </a-menu-item-group>
                        <a-menu-item-group title="Item 2">
                            <a-menu-item key="setting:6">
                                Option 3
                            </a-menu-item>
                            <a-menu-item key="setting:7">
                                Option 4
                            </a-menu-item>
                        </a-menu-item-group>

                    </a-sub-menu>
                    <a-menu-item key="message">
                        <a-icon type="appstore"/>
                        留言板
                    </a-menu-item>
                    <a-menu-item key="friends">
                        <a-icon type="appstore"/>
                        友人帐
                    </a-menu-item>
                    <a-sub-menu>
                                <span slot="title" class="submenu-title-wrapper"
                                ><a-icon type="setting"/>
                                    关于
                                </span>
                        <a-menu-item-group title="Item 1">
                            <a-menu-item key="setting:9">
                                Option 1
                            </a-menu-item>
                            <a-menu-item key="setting:10">
                                Option 2
                            </a-menu-item>
                        </a-menu-item-group>
                        <a-menu-item-group title="Item 2">
                            <a-menu-item key="setting:11">
                                Option 3
                            </a-menu-item>
                            <a-menu-item key="setting:12">
                                Option 4
                            </a-menu-item>
                        </a-menu-item-group>

                    </a-sub-menu>
                    <a-menu-item key="app">
                        <a-icon type="appstore"/>
                        APP
                    </a-menu-item>
                    <a-menu-item key="bush">
                        <a-icon type="appstore"/>
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

<style scoped>
    .navbar {

        width: 100%;
        height: 100%;
        font-size: 16px;
        line-height: 75px;
        color: #666666;
        background-color: #fff;
    }
    .navbar >>> .ant-menu-item, .navbar >>> .ant-menu-submenu-title {
        padding: 0 15px;
        cursor: url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/cursor/ayuda.cur),auto !important;

    }

    .navbar >>> .ant-menu-item .anticon, .navbar >>> .ant-menu-submenu-title .anticon {
        margin-right: 0;
    }



</style>