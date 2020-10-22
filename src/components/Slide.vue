<template>
    <div class="slide">
        <transition
                name="custom-classes-transition"
                enter-active-class="animated slideInDown"
                leave-active-class="animated slideOutUp"
        >
            <img src="../assets/images/slide.png" alt="" v-show="isSlideShow">
        </transition>

    </div>
</template>

<script>
    export default {
        name: "Slide",
        data() {
            return {
                minTop: 200,
                isSlideShow: false
            }
        },
        methods: {},
        mounted() {
            console.log("mounted");
            console.log(window);
            window.onscroll = () => {
                if(window.pageYOffset > this.minTop) {
                    this.isSlideShow = true;
                }else {
                    this.isSlideShow = false;
                }
            }
        }
    }
</script>

<style scoped>
    .slide {
        position: fixed;
        right: 20px;
        top: -300px;
        z-index: 9998;
        animation: wing  2s linear infinite;
    }
    @keyframes wing {
        0%{
            top: -300px;
        }
        50%{
            top: -280px;
        }
        100%{
            top: -300px;
        }
    }
</style>