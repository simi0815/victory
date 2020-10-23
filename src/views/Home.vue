<template>
    <div class="home" @click="hander">


        <div class="panel-top">
            <!--背景图片，panel_top的背景图片已经被小点占用了-->
            <img src="../assets/images/index/cover3.jpeg" alt="" class="bg">
            <!--头像-->
            <a-avatar class="avatar" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603438431016&di=e02459d1cf2512cebea1440a63899176&imgtype=0&src=http%3A%2F%2Fci.xiaohongshu.com%2Fc0c135ca-d3e1-45b1-ac53-e5c2298cc245%40r_640w_640h.jpg"  />

            <div class="box">
                <BubbleBox></BubbleBox>
            </div>
            <!--下面的大波-->
            <!--箭头-->
            <div class="slide-row">
                <svg class="icon" aria-hidden="true" style="font-size: 30px !important;">
                    <use xlink:href="#icon-icon-arrow-bottom2"></use>
                </svg>
            </div>
            <div class="wave-shadow"></div>
            <div class="wave"></div>
        </div>


        <!--主页下方内容区域-->
        <div class="panel-content">

        </div>
    </div>

</template>

<script>
    // @ is an alias to /src
    import JumpText from '../components/JumpText'
    import BubbleBox from '../components/BubbleBox'

    export default {
        name: 'Home',
        data() {
            return {}
        },
        components: {
            JumpText,
            BubbleBox,
        },
        methods: {
            hander() {
                this.$parent.isShow = false
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
    .panel-top{
        background: url("https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/dot.gif") repeat;

    }
    .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: -1;
    }

    /*设置面板样式*/


    /* pc端样式，因为代码量需要，先这么写*/
    @media screen and (min-width: 768px) {

        .panel-top , .bg {
            height: 100%;
        }
        .panel-content {
            width: 100%;
            height: 1400px;
            background-color: pink;
        }
        .avatar{
            width: 120px;
            height: 120px;
            left: 50%;
            margin-left: -50px;
            margin-top: 200px;
            border: 5px rgba(0,0,0,.3) solid;
        }
        .box {
            position: absolute;
            width: 60%;
            height: 120px;
            top: 50%;
            left: 50%;
            margin-left: -390px;
            margin-top: 40px;
            color: #666;

        }

        .slide-row {
            position: absolute;
            bottom: 90px;
            left: 50%;
            animation: updown 3s infinite;
            color: white;
        }

        /*大波的样式和动画设置*/
        .wave, .wave-shadow {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 90px;
            background: url("../assets/images/index/wave.png") repeat-x;
            background-position: 0 5px;
            animation: waveMove 10s linear infinite;
        }

        .wave-shadow {
            bottom: 30px;
            opacity: 0.4;
        }

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
    @media screen and (max-width: 767PX) {
        .panel-top,.bg {
            height: 30%;
            min-height: ;
        }
        .avatar{
            /*已经是绝对定位了*/
            width: 80px;
            height: 80px;
            left: 50%;
            margin-left: -40px;
            margin-top: 20px;
        }
        .box{
            position: absolute;
            margin-left: 0;
            margin-top: 10px;
            background-color: pink;
            width: 90%;
            left: 5%;
            height: 100px;
            font-size: 12px;
        }
    }
</style>