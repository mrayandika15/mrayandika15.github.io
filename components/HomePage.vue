<template >
<div class="flex w-full h-screen relative">
    <div class="flex w-full flex-col  self-end md:self-center  md:ml-16">
        <!-- TEXT HOME PAGE -->
        <div class=" ml-3 mb-3 mr-3 flex text-white flex-col relative ">
            <p class="font-base text-xs">Muhammad Rayandika</p>
            <div class="relative">
                <h3 class="font-bold text-xl relative w-96 md:text-3xl md:w-1/2">Frontend Web Developer
                    and User Interface Designer</h3>
                    <div class="underline my-2"></div>
            </div>
            <p class="font-base text-xs mr-6 w-96  md:w-80 md:text-sm text-gray-200">My experiences in web development is around 4 years and thats start in my senior high school , until now i have finished many project especialy in ecommerce and portofolio projects
            </p>
        </div>


        <!-- BUTTON HOMEPAGE -->
        <div class="flex ml-3 mb-4">
                <button class="border border-white text-white text-xs py-1 px-3 mr-5 md:py-2 md:px-3 transition-all hover:bg-white hover:text-black " >Read More</button>
                <button class="border border-white text-white text-xs py-1 px-3 transition-all hover:bg-white hover:text-black" >View More</button>
        </div>

        <!-- Scroll Animation -->

            <div class="icon-scroll mb-3 "></div>


    </div>
</div>
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