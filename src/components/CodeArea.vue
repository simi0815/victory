<template>
    <div class="code-area">
        <div class="bar">
            <div class="state"><span></span><span></span><span></span></div>

            <div class="lan">{{language || "auto"}}</div>
            <div class="copy copy-btn"  :data-clipboard-text="code">
                <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-copy" ></use>
                </svg>
            </div>
        </div>
        <div class="realcode">
             <pre style="width: 100%;overflow: scroll;font-size: 1em ;z-index: 900">
    <code class="line-numbers" :class="'language-'+language" >{{code}}</code>
            </pre>
        </div>
    </div>
</template>

<script>
    import Prism from 'prismjs'
    import ClipboardJS from 'clipboard'

    export default {
        name: "CodeArea",
        props: ["language","code"],
        methods:{
        },
        mounted() {
            Prism.highlightAll();
            let cbj = new ClipboardJS('.copy-btn');
            cbj.on("success", (e)=> {
                this.$store.commit("setLiveWord","已经复制到剪切板了...")
            });
            cbj.on("error", (e)=> {
                  this.$store.commit("setLiveWord","出错了，剪切板没有找到内容...")
            });
        }
    }
</script>

<style scoped>
    .code-area, .realcode {
        width: 100%;
        position: relative;
    }

    .bar {
        position: absolute;
        top: 0;
        z-index: 999;
        height: 1.8em;
        width: 100%;
        /*background-color: pink;*/
    }

    .state {
        width: 6em;
        height: 1em;
        margin: 0.4em 0;

    }

    .state span {
        width: 1em;
        height: 1em;
        display: block;
        float: left;
        border-radius: 50%;
        margin-left: 0.7em;
    }

    .state span:first-child {
        background-color: red;
    }

    .state span:nth-child(2) {
        background-color: gray;
    }

    .state span:last-child {
        background-color: green;
    }

    .lan {
        height: 1em;
        width: 12em;
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -6em;
        font-size: 1.8em;
        text-align: center;
        color: white;
    }
    .copy{
        position: absolute;
        top: 0;
        right: 0;
        font-size: 2em;
    }
    .copy:hover{
        color: #fff;
        cursor: url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/cursor/ayuda.cur), auto !important;
    }
    pre {
        padding-top: 1.8em;
    }
</style>