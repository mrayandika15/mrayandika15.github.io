<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-24 text-white ">
        <!-- Project  -->
        <div class="PersonalProject  w-full h-full">
            <div class="flex flex-col ml-2 md:ml-16 mt-5">
                <p class="text-xs text-gray-300">Personal Projects</p>
                <h3 class="text-2xl font-semibold">RussunEcommerce</h3>
                <div class="underline my-3"></div>
                <p class="text-sm text-gray-200 my-2">My Role</p>
                <p class="text-xs text-gray-300">Front End Website</p>
                <p class="text-xs text-gray-300">Back End Website</p>
                <p class="text-sm text-gray-200 mt-2 mb-1">Year</p>
                <p class="text-xs text-gray-300">2020-2021</p>
            </div>
        </div>
        <!-- Project Description -->
        <div class="PersonalProjectDesc w-full h-full mt-5 md:mt-0  ">
            <div class="flex mx-3 md:mt-5 md:mr-8 text-justify ">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione non, magni reiciendis veniam tenetur debitis porro enim expedita in officia eum. Ipsa labore inventore incidunt omnis eos voluptatum cumque autem fugiat assumenda esse, dicta reprehenderit nisi ex laboriosam commodi! Odio non aliquam deleniti animi eveniet perferendis placeat asperiores aperiam quasi!</p>
            </div>
        </div>
        <!-- Project Img -->
        <div class=" w-full h-full  md:col-span-2 ">

            <div class="grid grid-cols-1 place-items-center">
                <div class="flex w-10/12 h-5/6 justify-center items-center ">
                    <img class="w-full h-full" src="../assets/img/trenandy.png" alt="">
                </div>
            </div>

        </div>

        <!-- Container Button -->

        <div class="w-full h-full md:col-span-2 ">
            <div class="flex justify-center">
                <button class="border border-white text-white text-xs py-1 px-3 mr-5 md:py-3 md:px-4 transition-all hover:bg-white hover:text-black text-md" >Website</button>
                <button class="border border-white text-white text-xs py-1 px-3 mr-5 md:py-3 md:px-4 transition-all hover:bg-white hover:text-black text-md" >Source Code</button>
            </div>
        </div>

    </div>
</template>
<script>
export default {

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