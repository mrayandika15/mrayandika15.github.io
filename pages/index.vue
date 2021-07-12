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
      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  }

}
</script>
<style >
  body{
    height: 100%;
    margin: 0;
    overflow-x: hidden;

  }
















</style>