<template>
    <div class="home" @click="hander">
        <img src="../assets/images/index/cover3.jpeg" alt="" class="bg">
        <div class="panel">
            <div class="panel-top">

                <div class="tip">
                    <JumpText text="HI！"></JumpText>

                </div>
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
    </div>
</template>

<script>
    // @ is an alias to /src
    import JumpText from '../components/JumpText'
    import BubbleBox from '../components/BubbleBox'

    export default {
        name: 'Home',
        data() {
            return {

            }
        },

        computed: {
            monitor() {
                return this.$store.state.isMobile
            }
        },
        watch: {
            monitor(val) {
                if (val) {
                    this.$router.push('/mob/index')
                }
            }
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
            //    检测是否是手机，如果是跳转手机版首页
            if (this.$store.state.isMobile) {
                this.$router.push({path: '/mob/index'})

            }

        }
    }
</script>
<style scoped>
    .home {
        width: 100%;
        height: 100%;
    }

    .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    /*设置面板样式*/
    .panel, .panel-top {
        width: 100%;
        height: 100%;
    }

    .panel-top {
        background: url("https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/dot.gif") repeat;
    }

    .panel-content {
        width: 100%;
        height: 1400px;
        background-color: pink;
    }

    /*标题*/
    .tip {

        position: absolute;
        width: 780px;
        height: 120px;
        text-align: center;
        top: 50%;
        left: 50%;
        margin-left: -390px;
        margin-top: -80px;
        color: #fff;

    }

    .box {
        position: absolute;
        width: 780px;
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

</style>