<template >
     <!-- placeholder  -->
     <div class="fixed h-screen  z-40 hidden md:flex inset-y-0 right-0 w-40  flex items-center justify-center   text-gray-400 ">
        <scrollactive active-class="active" :offset="150" :duration="500"    class=" ml-3 flex flex-col ">
            <a href="#home" class="my-14 transform rotate-90  scrollactive-item ">Main</a>
            <a  href="#project" class="my-14 transform rotate-90 scrollactive-item ">Projects</a>
            <a href="#personal" class="my-14 transform rotate-90 scrollactive-item ">Personal</a>
            <a href="#contact" class="my-14 transform rotate-90 scrollactive-item ">Contact</a>
        </scrollactive  >
    </div>
</template>
<script>
export default {

}
</script>
<style >
    .scrollactive-item.active{
        @apply font-semibold text-white ;
    }
</style>