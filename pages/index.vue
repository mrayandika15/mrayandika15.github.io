<template >
  <div class="container">

    <placeholder />
    <vue-scroll-snap :fullscreen="true">
      <HomePage />
      <Project />
      <Personal />
      <contact />
   </vue-scroll-snap>
  </div>
</template>
<script>

export default {
  created () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    })
  },


}
</script>
<style >
  body{
    height: 100%;
    margin: 0;
    overflow-x: hidden;

  }

  .container{
    scroll-snap-type: y  mandatory;
  }

  section{
    scroll-snap-align: start;
  }

  html{
    font-family: Montserrat;
  }




</style>