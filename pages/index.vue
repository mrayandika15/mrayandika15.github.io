<template >
  <div class="container">

    <placeholder />

      <HomePage />
      <Project />
      <Personal />
      <contact />

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

  body {
  min-height: 100vh;
  min-height: -webkit-fill-available;
}
html {
  height: -webkit-fill-available;
}

  html{
    font-family: Montserrat;
  }




</style>