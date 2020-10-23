<template>
    <div class="bubbleBox">

        <div class="wrapper">
            <div class="rectan"></div>
            <div class="massage">
                "The shortest way to do many things is to only one thing at a time"
            </div>
            <div class="linkArea">

                <ul class="clearfix">
                     <li>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-zuo"></use>
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
                            <use xlink:href="#icon-github"></use>
                        </svg>
                    </li>
                    <li>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-csdn"></use>
                        </svg>
                    </li>
                    <li>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-facebook"></use>
                        </svg>
                    </li>
                    <li>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-weibo"></use>
                        </svg>
                    </li>
                     <li>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-you"></use>
                        </svg>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BubbleBox"
    }
</script>

<style scoped>
    .bubbleBox,.wrapper {
        width: 100%;
        height: 100%;
    }

    .wrapper {
        background-color: rgba(0, 0, 0, .5);
        position: absolute;
        border-radius: 20px;
    }

    .rectan {
        width: 0;
        height: 0;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 15px solid rgba(0, 0, 0, .5);
        position: absolute;
        top: -15px;
        left: 80px
    }

    .massage, .linkArea {
        width: 100%;
        height: 45px;
        line-height: 45px;
        text-align: center;
        color: #f1f1f1;

        font-weight: bolder;
    }

    .linkArea ul {
        margin: 0 auto;
        display: inline-block;
    }

    .linkArea li {
        float: left;
        display: block;
        margin: 0 10px;
    }




</style>