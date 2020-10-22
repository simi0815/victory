<template>
    <div class="jumptext">

        <span class="text">{{text}}</span>
    </div>
</template>

<script>
    export default {
        name: "JumpText",
       props:['text']
    }
</script>

<style scoped>
    .text{
        animation: flash 1s ease-in-out infinite;
        font:normal bolder 60px Serif;
    }
    @keyframes flash {
        0%{
            text-shadow: 0 0 red ;
        }

        30%{
            text-shadow:-3px 0 yellow;
        }
        60%{
            text-shadow:3px 0 yellow;
        }
        100%{
            text-shadow: 0 0 ;
        }
    }
</style>