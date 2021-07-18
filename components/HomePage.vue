<template >
<section id="home" class="relative h-full">
<div class="flex w-full h-screen relative " >
    <div class="flex w-full  flex-col  self-end md:self-center  md:ml-16">

        <div class="image w-full h-full flex  md:absolute flex items-end justify-end md:right-36 md:bottom-60 z-10  ">
            <img class="max-w-full w-full  md:w-1/3 h-auto z-10 rounded-lg" src="../assets/img/Fotoreal2.jpeg" alt="">
        </div>


        <!-- TEXT HOME PAGE -->
        <div class=" ml-3 mb-3 mr-3 flex text-white flex-col relative "
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-once="true"
        >
            <p class="font-base md:ml-1 text-gray-200 text-xs">Muhammad Rayandika</p>
            <div class="relative">
                <h3 class="font-bold text-xl w-full relative w-96 md:text-5xl md:w-1/2">Frontend Web Developer
                    and User Interface Designer</h3>
                    <div class="underline my-2"></div>
            </div>
            <p class="font-base text-sm mr-6 w-full  md:w-1/2 text-justify md:text-base text-gray-200">My experiences in web development is around 4 years and thats start in my senior high school , until now i have finished many project especialy in ecommerce and portofolio projects
            </p>
        </div>



        <!-- BUTTON HOMEPAGE -->
        <div class="flex  mb-4"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-once="true"
        >

        <a class="ml-3" href="#project">
            <button class="border border-white text-white text-sm py-2 px-3 md:py-3 md:text-sm md:px12 transition-all hover:bg-white  hover:text-black" >View More</button>
        </a>

        </div>

        <!-- Scroll Animation -->

            <div class="icon-scroll mb-3 z-20 "></div>

                  <!-- Social Media -->
                  <SocialMedia />


    </div>



</div>
</section>
</template>
<script>
export default {

}
</script>
<style scoped >
.underline{
    width: 50px;
    height: 2px;
    background-color: #fff;
    content: '';
}
.icon-scroll,
.icon-scroll:before {
    position: absolute;
    left: 50%;
}
.icon-scroll {
    width: 30px;
    height: 50px;
    margin-left: -20px;
    bottom: 10px;
    margin-top: -35px;
    border: 2px solid #fff;
    border-radius: 25px;

}
@media (max-width: 767px) {
    .icon-scroll {
        display: none;
    }
}
.icon-scroll:before {
    content: '';
    width: 8px;
    height: 8px;
    background: #fff;
    margin-left: -4px;
    top: 8px;
    border-radius: 4px;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: scroll
}
@keyframes scroll {
    0% {
        opacity: 1
    }
    100% {
        opacity: 0;
        transform: translateY(26px)
    }
}

</style>