<template >
    <section id="personal" class="relative h-full" >
        <div class="flex w-full h-full  "  >
            <div class="flex  w-full mt-24 flex-col ">
                <!-- Headline Project  -->
                <div class="flex text-white font-semibold text-2xl ml-2 md:ml-16  flex-col "
                data-aos="fade-up"
                data-aos-once="true"
                >
                    <h4 class="md:text-5xl text-2xl md:my-3">Personal Project</h4>

                    <div class="underline my-3"></div>
                </div>
                <!-- Content Project -->
                <!-- <div class="flex text-white w-full items-center flex-col  md:ml-16 md:flex-row md:flex-wrap"> -->
                <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  place-items-center relative">
                    <div class="card relative w-96 md:h-full my-4 md:mr-14 cursor-pointer"
                    v-for="card in filteredPersonal"
                    data-aos="fade-up"
                    data-aos-once="true" >
                    <nuxt-link :to="card.number"  >
                        <!-- Image Content -->
                        <div class="absolute w-full h-full">
                            <img class="bg-auto bg-no-repeat bg-center w-full h-full" :src="card.img" alt="">
                        </div>
                        <!-- Black Screen -->
                        <div class="BlackScreen"></div>
                        <!-- Text Content -->
                        <div class="flex absolute  w-56 h-28 flex-col ml-3 mt-3 ">
                            <p class="text-sm font-base text-gray-300">{{ card.year }}</p>
                            <p class="text-xl font-bold text-white">{{ card.name  }}</p>
                        </div>
                    </nuxt-link>

                    </div>

                </div>

            </div>
        </div>
    </section>
    </template>
    <script>
    export default {
       async fetch(){
           this.personal = await fetch(
               'https://my-porto-api.herokuapp.com/porto'
           ).then((res) => res.json())


       },
       data() {
           return {
               personal:[]
           }
       },

       computed:{
           filteredPersonal(){
               return this.personal.slice(4,7);
           }
       }
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
            position: relative;
            transition: all 0.5s ease;
            overflow: hidden;
        }
        .card:hover img{
            transform: scale(1.1);
            transition: 0.6s all ease-in-out;
        }

        .BlackScreen{
            width: 100%;
            height: 100%;
            background-color: #000;
            position: absolute;
            opacity: 0;
            transition: 0.3s all ease-in-out ;
        }

        .BlackScreen:hover {
            opacity: 0.3;
        }



        @media (min-width: 768px) {

            .card{
                height:32rem;
                width: 32rem;

            }

        }






    </style>