<template >
        <div class="flex w-full h-24 justify-between fixed z-10">
            <!-- Rayandika -->
            <div class="flex text-white flex-col self-center pl-2 md:ml-16">
                <p class="text-xl font-semibold">Rayandika</p>
                <p class="text-xs">Web Front End & UI Designer</p>
            </div>

            <!-- Menu -->
            <div class="flex text-white self-center pr-2 mr-10 md:mr-16 md:hidden z-50 " >
                <p class="text-sm font-semibold">Menu</p>
            </div>

            <!-- Nav Triggered -->
            <div class="absolute w-full h-screen bg-black z-10 text-white">
                <div class="flex flex-col w-full h-full items-center justify-center font-semibold">
                    <a href="#home" class="text-2xl">Main</a>
                    <a href="#project" class="text-2xl">Projects</a>
                    <a href="#personal" class="text-2xl">Personal</a>
                    <a href="#contact" class="text-2xl">Contact</a>
                </div>
            </div>



            <!-- Social Media -->
            <SocialMedia />




        </div>
</template>
<script>
export default {

}
</script>
<style >



</style>