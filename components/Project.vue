<template >
    <div class="flex w-full h-screen">
        <div class="flex  w-full mt-24 flex-col ">
            <!-- Headline Project  -->
            <div class="flex text-white font-semibold text-2xl ml-2 md:ml-16  flex-col ">
                <h4 class="md:text-3xl" >Project</h4>
                <div class="underline my-3"></div>
            </div>

            <!-- Content Project -->
            <div class="flex text-white w-full items-center flex-col  md:ml-16 md:flex-row md:flex-wrap">
                <div class="card relative w-96 h-full my-4 md:mr-14  " v-for="card in DataContent" >
                    <!-- Image Content -->
                    <div class="absolute w-full h-full">
                        <img class="w-full h-full" :src="card.img" alt="">
                    </div>

                    <!-- Black Screen -->
                    <!-- <div class="flex w-full h-full absolute bg-black opacity-30"></div> -->


                    <!-- Text Content -->
                    <div class="flex absolute  w-56 h-28 flex-col ml-3 mt-3 ">
                        <p class="text-sm font-base text-gray-200">{{ card.Date }}</p>
                        <p class="text-xl font-bold ">{{ card.Name  }}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
data() {
    return {

        DataContent:[
            {Date:'2020-2021',Name:'Marketing Portofolio - Bagas Portofolio Website',img:require('../assets/img/bagasporto.png')},
            {Date:'2021',Name:'Artist Portofolio - Trenandy Portofolio Website',img:require('../assets/img/trenandy.png')},
            {Date:'2021',Name:'Company Profile Website - Daramas Perkasa Portofolio Website',img:require('../assets/img/company.png')},
        ]

    }
},
}
</script>
<style scoped>
    .underline{
        width: 90px;
        height: 2px;
        background-color: #fff;
        content: '';
    }
    .card{
        height: 24rem ;
    }

    @media (min-width: 768px) {

        .card{
            height:32rem;
            width: 32rem;

        }

    }




</style>