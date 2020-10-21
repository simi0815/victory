<template>
  <div class="home" @click="hander">
    <div class="container">

    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  methods:{
    hander(){
      this.$parent.isShow = false
    }

  },
  created() {

  }
}
</script>
<style scoped>
  .home{
    width: 100%;
    height: 100%;
    background: url("../assets/images/index/cover2.jpeg");
  }
</style>