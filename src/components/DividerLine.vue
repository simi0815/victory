<template>
    <div class="divider-line">
        <!--树叶logo-->

        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-leaf"></use>
        </svg>
        {{title}}

    </div>
</template>

<script>
    export default {
        name: "DividerLine",
        data() {
            return {}
        },
        props: ['title']
    }
</script>

<style scoped>
    @media screen and (max-width: 768px){
        .divider-line{
            width: 95%;
        }
    }
    @media screen and (min-width: 769px){
        .divider-line{
            width: 56%;
            min-width: 768px;
        }
    }
    .divider-line{
        border-bottom: 1px dashed #ececec;

        padding: 50px 0 5px 0;
        margin: 0 auto 30px auto;
    }

</style>