<template>
    <div class="home" @click="hander">


        <div class="panel-top">
            <!--背景图片，panel_top的背景图片已经被小点占用了-->
            <img src="../assets/images/index/cover4.webp" alt="" class="bg">
            <!--头像-->
            <a-avatar class="avatar"
                      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603743656018&di=34215fa351d2e430a3bdc85962084282&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F24%2F20200924201441_xdhsp.thumb.400_0.jpeg"/>
            <div class="box">
                <BubbleBox></BubbleBox>
            </div>

            <!--箭头-->
            <div class="slide-row">
                <svg class="icon" aria-hidden="true" style="font-size: 30px !important;">
                    <use xlink:href="#icon-icon-arrow-bottom2"></use>
                </svg>
            </div>
            <!--下面的大波-->
            <div class="wave-shadow"></div>
            <div class="wave"></div>
        </div>


        <!--主页下方内容区域-->
        <div class="panel-content">
            <DividerLine title="Discovery"></DividerLine>
            <ContentBox :articleInfo="propagationInfo"></ContentBox>
            <DividerLine title="Discovery"></DividerLine>
            <ContentBox :articleInfo="articleInfo" v-for="ele in 5" :key="ele" :reverse="Boolean(ele%2)"></ContentBox>
        </div>
    </div>

</template>

<script>
    // @ is an alias to /src
    import JumpText from '../components/JumpText'
    import BubbleBox from '../components/Home/BubbleBox'
    import ContentBox from '../components/ContentBox'
    import DividerLine from '../components/DividerLine'

    export default {
        name: 'Home',
        data() {
            return {
                articleInfo: {
                    id: 1,
                    imgSrc: "https://2heng.xin/wp-content/uploads//2019/12/2572384-1024x640.jpg",
                    publishTime: "2019-12-13",
                    title: "python大神之路",
                    views: 9324,
                    comments: 43,
                    author: "simi",
                    content: "Python是一种跨平台的计算机程序设计语言。是一个高层次的结合了解释性、编译性、互动性和面向对象的脚本语言。最初被设计用于编写自动化脚本(shell)，随着版本的不断更新和语言新功能的添加，越多被用于独立的、大型项目的开发。"
                },
                propagationInfo: {
                    id: 2,
                    imgSrc: "https://pic.qqtn.com/up/2016-7/2016070518082798993.jpg",
                    publishTime: "2020-10-27",
                    title: "关于vue前端模板VICTORY",
                    authorAvatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603743656018&di=34215fa351d2e430a3bdc85962084282&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202009%2F24%2F20200924201441_xdhsp.thumb.400_0.jpeg",
                    views: 10000,
                    comments: 0,
                    author: "simi",
                    content:"本人（simi）即将告别学生党，原本是一名苦逼 pythoner 。大概一年前接触前端，打算拓展专业知识，中间放弃了几次，虚度了很多光阴，还是坚持了下来"
                }
            }
        },
        components: {
            JumpText,
            BubbleBox,
            ContentBox,
            DividerLine
        },
        methods: {
            hander() {
                this.$parent.isShow = false
            }
        },
        computed: {
            isM() {
                return this.$store.state.isMobile;
            }
        },

        created() {


        }
    }
</script>
<style scoped>
    /* 公共样式 */
    .home {
        height: 100%;
    }

    .panel-top {
        background: url("https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/dot.gif") repeat;

    }

    .bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: -1;
    }

    /*下半部样式*/
    .panel-content {
        width: 100%;
        background-color: #fff;
        padding-bottom: 40px;
    }

    /*设置面板样式*/


    /* pc端样式，因为代码量需要，先这么写*/
    @media screen and (min-width: 769px) {

        .panel-top, .bg {
            height: 100%;

        }

        .avatar {
            width: 120px;
            height: 120px;
            left: 50%;
            margin-left: -60px;
            margin-top: 200px;
            border: 5px rgba(0, 0, 0, .3) solid;
            transition: all 2s ease;
        }

        .avatar:hover {
            transform: rotateZ(360deg);
        }

        .box {
            position: absolute;
            margin-top: 10px;
            width: 40%;
            left: 30%;
            height: 100px;
            font-size: 20px;

        }

        .slide-row {
            position: absolute;
            bottom: 90px;
            left: 50%;
            margin-left: -15px;
            animation: updown 3s infinite;
            color: white;
        }

        /*大波的样式和动画设置*/
        .wave, .wave-shadow {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 60px;
            background: url("../assets/images/index/wave.png") repeat-x;
            background-position: 0 5px;
            animation: waveMove 10s linear infinite;
        }

        .wave-shadow {
            bottom: 15px;
            opacity: 0.4;

        }

        /*下拉箭头运动的动画*/
        @keyframes updown {
            0% {
                bottom: 90px;
            }
            50% {
                bottom: 80px;
            }
            100% {
                bottom: 90px;
            }
        }
        /*大波波动的动画*/
        @keyframes waveMove {
            from {
                background-position: 0 5px;
            }
            to {
                background-position: 997px 5px;
            }
        }

    }

    /*手机端样式*/
    @media screen and (max-width: 768PX) {
        .panel-top, .bg {
            height: 30%;
            min-height: 210px;
        }

        .avatar {
            /*已经是绝对定位了*/
            width: 80px;
            height: 80px;
            left: 50%;
            margin-left: -40px;
            margin-top: 20px;
        }

        .box {
            position: absolute;
            margin-left: 0;
            margin-top: 10px;
            width: 90%;
            left: 5%;
            height: 100px;
            font-size: 13px;
        }

        /*手机端不显示下面的大波*/
        .slide-row, .wave, .wave-shadow {
            display: none;
        }
    }
</style>