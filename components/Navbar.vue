<template >
    <div class="h-full w-full">


        <div class="flex w-full h-24 justify-between fixed z-20">
            <!-- Rayandika -->

            <div class="flex text-white flex-col self-center pl-2 md:ml-16 z-50">
                <nuxt-link to="/">
                    <p class="text-xl font-semibold  cursor-pointer">Rayandika</p>
                    <p class="text-xs cursor-pointer">Web Front End & UI Designer</p>
                </nuxt-link>
            </div>

            <!-- Menu -->
            <div class="flex text-white self-center pr-2 mr-10 md:mr-16 md:hidden z-50 " >
                <div class="text-sm font-semibold cursor-pointer menu" :class="{ active : isActive }" v-on:click="Triggered" ></div>
            </div>
        </div>


          <!-- Nav Triggered -->

            <div class="fixed w-full  bg-black z-10 text-white Triggered"
            :class="{ active : isActive }"
            >
                <div class="flex flex-col w-full h-full items-center justify-center font-semibold ">
                    <scrollactive class="flex flex-col" active-class="active" :offset="150" :duration="500" >
                        <a v-for="item in navbar" :key="index" :href="item.href" class="text-3xl scrollactive-item text-gray-400" v-on:click="isActive = false">{{item.name}}</a>
                    </scrollactive>

                    <!-- social Media -->
                    <div class="flex w-full h-24 absolute bottom-0 items-center p-3" >
                        <a class="mx-1" v-for=" icons in iconnav" :key="index" :href="icons.link" target="_blank">
                            <img class="max-w-full w-5 cursor-pointer" :src="icons.icon" alt="">
                        </a>
                    </div>
                </div>
            </div>





    </div>
</template>
<script>
export default {
    data() {
        return {
            navbar : [
                {
                    href : "#home",
                    name : "Main"
                },
                {
                    href :"#project",
                    name : "Project"
                },
                {
                    href: "#personal",
                    name : "Personal"
                },
                {
                    href: "#contact",
                    name : "Contact"
                }
            ],
            iconnav:[
            {
                    link: 'https://github.com/mrayandika15' ,
                    icon : require("../assets/icon/github-11-512.png"),
                    name : 'Github'
                },
                {
                    link : 'https://www.instagram.com/mrayandikaa',
                    icon : require("../assets/icon/instagram-6-512.png"),
                    name : 'Instagram'
                },
                {
                    link : 'https://wa.me/+6285156413628',
                    icon : require("../assets/icon/whatsapp-512.png"),
                    name : 'Whatsapp'
                },
                {
                    link : 'https://www.linkedin.com/in/muhammad-rayandika-73b05420b/',
                    icon : require("../assets/icon/linkedin-2-512.png"),
                    name : 'Linked In'
                }
            ],
            isActive:false ,

        }
    },

    methods: {
        Triggered: function(){
            this.isActive = !this.isActive
        }
    },

}
</script>
<style  >


    .Triggered{
        transform: translateX(100%);
        transition: all .5s ease;
        height: 100%;
    }

    .Triggered.active{
        transform: translateX(0%);

    }

    .scrollactive-item.active{
        @apply font-semibold text-white ;
    }

    .menu{
        background: #fff;
        width: 17px;
        height: 2px;
        transition: all .3s ease-in-out;
    }

    .menu::after,
    .menu::before{
        content: '';
     position: absolute;
     width: 17px;;
     height: 2px;
     background: #fff;
     transition: all .3s ease-in-out;

    }

    .menu::after{
        transform: translateY(-5px);
    }

    .menu::before{
        transform: translateY( 5px);
    }

    .menu.active{
        background: transparent;
    }

    .menu.active.menu::before{
        transform: rotate(45deg) ;
    }

    .menu.active.menu::after{
        transform: rotate(-45deg) ;
    }



</style>