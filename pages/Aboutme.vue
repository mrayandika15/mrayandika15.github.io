<template >
    <div class="w-full grid grid-cols-1 text-white  ">

        <!-- aboutme  -->
        <div class="mt-24 w-full h-full">
            <div class="flex flex-col justify-center items-center">
                <p class="md:text-xl text-gray-300 mb-4">About Me</p>
                <p class="font-semibold text-xl md:text-3xl  text-center">
                    i’m Muhammad Rayandika , a frontend web designer
                    who focuses on a small detail component’s , i specialize in making a responsive website and user interfaces.
                </p>
                <div class="underline1 my-5"></div>
                <p class="text-gray-300 text-sm text-center md:w-100 md:text-justify ">My experiences in web development is around 4 years and thats start in my senior high school , until now i have finished many project especialy in ecommerce and portofolio projects
                </p>
            </div>
            <!-- Image  -->
            <div class="grid grid-cols-1 place-items-center">
                <div class="flex w-10/12 h-5/6 justify-center items-center ">
                    <img class="w-full h-full" src="../assets/img/trenandy.png" alt="">
                </div>
            </div>
        </div>


        <div class="flex flex-col justify-center items-center">
            <p class="md:text-xl text-gray-300 mb-4">Experience</p>
            <div class="underline1 my-5"></div>
        </div>


        <!-- Experience -->
        <div class="flex w-full h-full px-2 md:px-5 " v-for="data in DataExperience" >
            <!-- cols 1 -->
            <div class="grid grid-cols-1 px-5 md:grid md:grid-cols-3 md:place-items-center w-full ">
                <p class="font-semibold ">{{ data.name }}</p>
                <p class="text-gray-300  ">{{ data.pos }}</p>
                <p class="text-gray-300 mb-5 md:mb-0">{{ data.date }}</p>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            DataExperience:[
            {name:'Company Profile Daramas Perkasa',pos:'FullStack Web And Design',date:'March 2021 - Present'},
            {name:'Portofolio Artist Design',pos:'FullStack Web And Design',date:'December 2020 - Feb 2021'},
            {name:'Portofolio Marketing Design',pos:'FullStack Web And Design',date:'November 2020 - December 2020'},
            {name:'Portofolio Developer',pos:'FullStack Web And Design',date:'March 2021 - Present'},
            {name:'MBTI Test Website',pos:'FullStack Web And Design',date:'May 2021 - June 2021'},
            {name:'Russun E-Commerce',pos:'FullStack Web',date:'May 2021 - June 2021'},
            {name:'Text To Speech Website',pos:'FullStack Web',date:'Jan 2020 - March 2020'},
            {name:'Donation Website Waqaf',pos:'UI/UX',date:'Dec 2020 - Feb 2021'},
        ]
        }
    },
    created () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  }
}
</script>
<style  >
  .underline1{
        width: 90px;
        height: 1px;
        background-color: #fff;
        content: '';
    }
</style>