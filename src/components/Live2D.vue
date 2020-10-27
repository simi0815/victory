<template>
    <!--萌萌哒得看板小妹-->
    <div class="live2d">
        <div class="girl">
            <!--美少女头部-->
            <div class="head" @mouseenter="occupyWord(specialWord.head)"></div>
            <!--美少女身体-->
            <div class="body" @mouseenter="occupyWord(specialWord.body)"></div>
        </div>
        <section class="talk-box" v-show="showTalk">
            <p v-text="currentWord"></p>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Live2D",
        data() {
            return {
                initArgvs: {
                    "model": {
                        jsonPath: "https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json",
                        "scale": 1
                    },
                    "display": {
                        "position": "left",
                        "width": 100,
                        "height": 200,
                        "hOffset": 0,
                        "vOffset": 0
                    },
                    "mobile": {
                        "show": true,
                        "scale": 0.1,
                    },
                    "react": {
                        "opacityDefault": 0.9,
                        "opacityOnHover": 0.2
                    }
                },
                showTalk: false,
                isOccupied: false,//外部占用，占用期间不再自言自语,
                currentWord: "",
                wordList: [
                    "么么哒(づ￣ 3￣)づ",
                    "天没降大任于我，照样苦我心智，劳我筋骨。",
                    "梦想是一个天真的词，实现梦想是一个残酷的词。",
                    "博主辛苦码代码中...",
                    "一分钟到底有多长？那要看你是蹲在厕所里还是等在厕所外面。"
                ],
                specialWord: {
                    head: "么么哒(づ￣ 3￣)づ",
                    body: "摸哪呢(｀ﾍ´)=3",
                },
                current: 0,
                sto: null,//计时器
            }
        },
        methods: {
            initLive2D() {
                L2Dwidget.init(this.initArgvs);
            },
            showWord(val, time = 5000) {

                if (this.sto) {
                    clearTimeout(this.sto);
                }
                this.showTalk = true;
                this.currentWord = val;
                this.sto = setTimeout(() => {
                    this.showTalk = false;
                    this.isOccupied = false;
                }, time)
            },
            //供外部组件使用的方法，叫停当前的话，说新的话，使用时组件进入被占用状态，说完后解除占用状态
            occupyWord(word) {
                this.isOccupied = true;
                this.showWord(word);
            },
            //自动讲话方法，10s一次
            autoWord() {
                setInterval(() => {
                    if (!this.showTalk && !this.isOccupied) {
                        this.showWord(this.wordList[this.current]);
                        this.current = (++this.current) % this.wordList.length;
                    }
                }, 10000)
            }
        },
        created() {
            //引入live2d库
            const s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = 'https://eqcn.ajz.miesnfu.com/wp-content/plugins/wp-3d-pony/live2dw/lib/L2Dwidget.min.js';
            document.body.appendChild(s);
        },
        mounted() {
            if (window.document.body.clientWidth <= 768) {
                window.onload = () => {
                    this.initArgvs.display.width = 50;
                    this.initArgvs.display.height = 100;
                    this.initLive2D(this.initArgvs);
                }
            } else {
                window.onload = () => {
                    this.initArgvs.display.width = 100;
                    this.initArgvs.display.height = 200;
                    this.initLive2D(this.initArgvs);
                }
            }
            this.autoWord();
        },
        computed: {
            isM() {
                return this.$store.state.isMobile
            },
            storeWord(){

                return this.$store.state.live2DWord
            }
        },
        watch: {
            storeWord(val){
                this.occupyWord(val);
            }
        }
    }
</script>

<style scoped>
    @media screen and (max-width: 768px){
        .girl{
            display: none;
        }
         .talk-box {
            position: fixed;
            width: 80px;
            min-height: 20px;
            max-height: 80px;
            background-color: #fff;
            z-index: 99998;
            bottom: 130px;
            left: 5px;
            border-radius: 10px;
            box-shadow: 3px 3px 10px rgba(0, 0, 0, .6);
            font-size: 1px;
            font-weight: 500;
            padding: 1px;
            animation: shake 50s linear;
        }
          .talk-box p {
            display: block;
            margin: auto;
        }

        @keyframes shake {

            2% {
                transform: translate(.5px, -1.5px) rotate(-.5deg)
            }
            4% {
                transform: translate(.5px, 1.5px) rotate(1.5deg)
            }
            6% {
                transform: translate(1.5px, 1.5px) rotate(1.5deg)
            }
            8% {
                transform: translate(2.5px, 1.5px) rotate(.5deg)
            }
            10% {
                transform: translate(.5px, 2.5px) rotate(.5deg)
            }
            12% {
                transform: translate(1.5px, 1.5px) rotate(.5deg)
            }
            14% {
                transform: translate(.5px, .5px) rotate(.5deg)
            }
            16% {
                transform: translate(-1.5px, -.5px) rotate(1.5deg)
            }
            18% {
                transform: translate(.5px, .5px) rotate(1.5deg)
            }
            20% {
                transform: translate(2.5px, 2.5px) rotate(1.5deg)
            }
            22% {
                transform: translate(.5px, -1.5px) rotate(1.5deg)
            }
            24% {
                transform: translate(-1.5px, 1.5px) rotate(-.5deg)
            }
            26% {
                transform: translate(1.5px, .5px) rotate(1.5deg)
            }
            28% {
                transform: translate(-.5px, -.5px) rotate(-.5deg)
            }
            30% {
                transform: translate(1.5px, -.5px) rotate(-.5deg)
            }
            32% {
                transform: translate(2.5px, -1.5px) rotate(1.5deg)
            }
            34% {
                transform: translate(2.5px, 2.5px) rotate(-.5deg)
            }
            36% {
                transform: translate(.5px, -1.5px) rotate(.5deg)
            }
            38% {
                transform: translate(2.5px, -.5px) rotate(-.5deg)
            }
            40% {
                transform: translate(-.5px, 2.5px) rotate(.5deg)
            }
            42% {
                transform: translate(-1.5px, 2.5px) rotate(.5deg)
            }
            44% {
                transform: translate(-1.5px, 1.5px) rotate(.5deg)
            }
            46% {
                transform: translate(1.5px, -.5px) rotate(-.5deg)
            }
            48% {
                transform: translate(2.5px, -.5px) rotate(.5deg)
            }
            50% {
                transform: translate(-1.5px, 1.5px) rotate(.5deg)
            }
            52% {
                transform: translate(-.5px, 1.5px) rotate(.5deg)
            }
            54% {
                transform: translate(-1.5px, 1.5px) rotate(.5deg)
            }
            56% {
                transform: translate(.5px, 2.5px) rotate(1.5deg)
            }
            58% {
                transform: translate(2.5px, 2.5px) rotate(.5deg)
            }
            60% {
                transform: translate(2.5px, -1.5px) rotate(1.5deg)
            }
            62% {
                transform: translate(-1.5px, .5px) rotate(1.5deg)
            }
            64% {
                transform: translate(-1.5px, 1.5px) rotate(1.5deg)
            }
            66% {
                transform: translate(.5px, 2.5px) rotate(1.5deg)
            }
            68% {
                transform: translate(2.5px, -1.5px) rotate(1.5deg)
            }
            70% {
                transform: translate(2.5px, 2.5px) rotate(.5deg)
            }
            72% {
                transform: translate(-.5px, -1.5px) rotate(1.5deg)
            }
            74% {
                transform: translate(-1.5px, 2.5px) rotate(1.5deg)
            }
            76% {
                transform: translate(-1.5px, 2.5px) rotate(1.5deg)
            }
            78% {
                transform: translate(-1.5px, 2.5px) rotate(.5deg)
            }
            80% {
                transform: translate(-1.5px, .5px) rotate(-.5deg)
            }
            82% {
                transform: translate(-1.5px, .5px) rotate(-.5deg)
            }
            84% {
                transform: translate(-.5px, .5px) rotate(1.5deg)
            }
            86% {
                transform: translate(2.5px, 1.5px) rotate(.5deg)
            }
            88% {
                transform: translate(-1.5px, .5px) rotate(1.5deg)
            }
            90% {
                transform: translate(-1.5px, -.5px) rotate(-.5deg)
            }
            92% {
                transform: translate(-1.5px, -1.5px) rotate(1.5deg)
            }
            94% {
                transform: translate(.5px, .5px) rotate(-.5deg)
            }
            96% {
                transform: translate(2.5px, -.5px) rotate(-.5deg)
            }
            98% {
                transform: translate(-1.5px, -1.5px) rotate(-.5deg)
            }
            0%,100% {
                transform: translate(0, 0) rotate(0)
            }
        }
    }
    @media screen and (min-width: 769px) {
        .girl {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 200px;
            height: 295px;
        }

        .head {
            width: 93px;
            height: 104px;
            margin: 0 auto;
        }

        .girl .body {
            width: 100px;
            height: 104px;
            margin: 0 auto;
        }

        .talk-box {
            position: fixed;
            width: 190px;
            min-height: 50px;
            max-height: 100px;
            background-color: #fff;
            z-index: 99998;
            bottom: 280px;
            left: 10px;
            border-radius: 10px;
            box-shadow: 3px 3px 10px rgba(0, 0, 0, .6);
            font-size: 16px;
            font-weight: 500;
            padding: 5px;
            animation: shake 50s linear;
        }

        .talk-box p {
            display: block;
            margin: auto;
        }

        @keyframes shake {

            2% {
                transform: translate(.5px, -1.5px) rotate(-.5deg)
            }
            4% {
                transform: translate(.5px, 1.5px) rotate(1.5deg)
            }
            6% {
                transform: translate(1.5px, 1.5px) rotate(1.5deg)
            }
            8% {
                transform: translate(2.5px, 1.5px) rotate(.5deg)
            }
            10% {
                transform: translate(.5px, 2.5px) rotate(.5deg)
            }
            12% {
                transform: translate(1.5px, 1.5px) rotate(.5deg)
            }
            14% {
                transform: translate(.5px, .5px) rotate(.5deg)
            }
            16% {
                transform: translate(-1.5px, -.5px) rotate(1.5deg)
            }
            18% {
                transform: translate(.5px, .5px) rotate(1.5deg)
            }
            20% {
                transform: translate(2.5px, 2.5px) rotate(1.5deg)
            }
            22% {
                transform: translate(.5px, -1.5px) rotate(1.5deg)
            }
            24% {
                transform: translate(-1.5px, 1.5px) rotate(-.5deg)
            }
            26% {
                transform: translate(1.5px, .5px) rotate(1.5deg)
            }
            28% {
                transform: translate(-.5px, -.5px) rotate(-.5deg)
            }
            30% {
                transform: translate(1.5px, -.5px) rotate(-.5deg)
            }
            32% {
                transform: translate(2.5px, -1.5px) rotate(1.5deg)
            }
            34% {
                transform: translate(2.5px, 2.5px) rotate(-.5deg)
            }
            36% {
                transform: translate(.5px, -1.5px) rotate(.5deg)
            }
            38% {
                transform: translate(2.5px, -.5px) rotate(-.5deg)
            }
            40% {
                transform: translate(-.5px, 2.5px) rotate(.5deg)
            }
            42% {
                transform: translate(-1.5px, 2.5px) rotate(.5deg)
            }
            44% {
                transform: translate(-1.5px, 1.5px) rotate(.5deg)
            }
            46% {
                transform: translate(1.5px, -.5px) rotate(-.5deg)
            }
            48% {
                transform: translate(2.5px, -.5px) rotate(.5deg)
            }
            50% {
                transform: translate(-1.5px, 1.5px) rotate(.5deg)
            }
            52% {
                transform: translate(-.5px, 1.5px) rotate(.5deg)
            }
            54% {
                transform: translate(-1.5px, 1.5px) rotate(.5deg)
            }
            56% {
                transform: translate(.5px, 2.5px) rotate(1.5deg)
            }
            58% {
                transform: translate(2.5px, 2.5px) rotate(.5deg)
            }
            60% {
                transform: translate(2.5px, -1.5px) rotate(1.5deg)
            }
            62% {
                transform: translate(-1.5px, .5px) rotate(1.5deg)
            }
            64% {
                transform: translate(-1.5px, 1.5px) rotate(1.5deg)
            }
            66% {
                transform: translate(.5px, 2.5px) rotate(1.5deg)
            }
            68% {
                transform: translate(2.5px, -1.5px) rotate(1.5deg)
            }
            70% {
                transform: translate(2.5px, 2.5px) rotate(.5deg)
            }
            72% {
                transform: translate(-.5px, -1.5px) rotate(1.5deg)
            }
            74% {
                transform: translate(-1.5px, 2.5px) rotate(1.5deg)
            }
            76% {
                transform: translate(-1.5px, 2.5px) rotate(1.5deg)
            }
            78% {
                transform: translate(-1.5px, 2.5px) rotate(.5deg)
            }
            80% {
                transform: translate(-1.5px, .5px) rotate(-.5deg)
            }
            82% {
                transform: translate(-1.5px, .5px) rotate(-.5deg)
            }
            84% {
                transform: translate(-.5px, .5px) rotate(1.5deg)
            }
            86% {
                transform: translate(2.5px, 1.5px) rotate(.5deg)
            }
            88% {
                transform: translate(-1.5px, .5px) rotate(1.5deg)
            }
            90% {
                transform: translate(-1.5px, -.5px) rotate(-.5deg)
            }
            92% {
                transform: translate(-1.5px, -1.5px) rotate(1.5deg)
            }
            94% {
                transform: translate(.5px, .5px) rotate(-.5deg)
            }
            96% {
                transform: translate(2.5px, -.5px) rotate(-.5deg)
            }
            98% {
                transform: translate(-1.5px, -1.5px) rotate(-.5deg)
            }
            0%,100% {
                transform: translate(0, 0) rotate(0)
            }
        }

    }


</style>