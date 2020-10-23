<template>
    <div class="mobile-home">

    </div>
</template>

<script>
    export default {
        name: "MobHome",
        data() {
            return {}
        },
        computed: {
            monitor() {
                return this.$store.state.isMobile
            }
        },
        watch: {
            monitor(val) {
                if (!val) {
                    this.$router.push('/index')
                }
            }
        },
        created() {
            //    检测是否是PC，如果是跳转PC版首页
            if (!this.$store.state.isMobile) {
                this.$router.push({path: '/index'})

            }

        }

    }
</script>

<style scoped>

</style>