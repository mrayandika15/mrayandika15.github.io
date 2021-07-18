<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-24 text-white ">

        <!-- Project  -->
        <div class="PersonalProject  w-full h-full"  data-aos="fade-up"   data-aos-once="true">
            <div class="flex flex-col ml-2 md:ml-16 mt-5">
                <p class="text-base text-gray-300">Project</p>
                <h3 class="text-3xl font-semibold">{{ porto.name }} </h3>
                <div class="underline my-3"></div>
                <p class="text-sm text-gray-200 text-base my-2">My Role</p>
                <p class="text-xs text-gray-300 text-base" v-for="role in porto.role" >{{role}}</p>

                <p class="text-sm text-gray-200 mt-2 mb-1 text-base">Year</p>
                <p class="text-xs text-gray-300 text-base">{{ porto.year }} </p>
            </div>

        </div>
        <!-- Project Description -->
        <div class="PersonalProjectDesc w-full h-full mt-5 md:mt-0  "  data-aos="fade-up"   data-aos-once="true">
            <div class="flex mx-3 md:mt-5 md:mr-8 text-justify text-lg ">
                <p>{{ porto.desc }}</p>
            </div>
        </div>
        <!-- Project Img -->
        <div class=" w-full h-full  md:col-span-2 "  data-aos="fade-up">

            <div class="grid grid-cols-1 md:grid-cols-2 place-items-center">
                <div class="flex w-10/12 h-5/6 my-12 justify-center items-center " v-for="product in porto.product">
                    <img class="max-w-full h-auto" :src="product" alt="">
                </div>
            </div>

        </div>

        <!-- Container Button -->

        <div class="w-full h-full md:col-span-2 my-10 "  data-aos="fade-up"   data-aos-once="true">
            <div class="flex justify-center">
                <a :href="porto.website" target="_blank">
                    <button class="border border-white text-white text-xs py-1 px-3 mr-5 md:py-2 md:px-6 transition-all hover:bg-white hover:text-black text-md" >Website</button>
                </a>

                <a :href="porto.source" target="_blank">
                    <button class="border border-white text-white text-xs py-1 px-3 mr-5 md:py-2 md:px-6 transition-all hover:bg-white hover:text-black text-md" >Source Code</button>
                </a>

            </div>
        </div>



    </div>
</template>
<script>
    export default {
    async asyncData({ params, $axios }) {
      const porto = await $axios.$get(`https://my-porto-api.herokuapp.com/porto/${params.number}`)
      return { porto }
    },

}

</script>
<style>
     .underline{
        width: 90px;
        height: 2px;
        background-color: #fff;
        content: '';
    }

</style>