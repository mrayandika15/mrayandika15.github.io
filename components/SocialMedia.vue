<template >
    <div class="absolute  inset-y-0 left-0 w-10 hidden md:flex flex-col items-center justify-end text-white  "
    data-aos="fade-up"
    data-aos-delay="500"
    >

        <div class="my-2  mb-7 ContainerSocial relative " v-for="icons in icon"

        >
            <div class=" w-32 h-5 absolute top-0 left-8 text-white Social opacity-0 hidden  ">
                {{ icons.name }}
            </div>
            <a :href="icons.link" target="_blank">
                <img class="max-w-full w-4 cursor-pointer" :src="icons.icon" alt="">
            </a>
        </div>




    </div>
</template>
<script>
export default {
    data() {
        return {
            icon : [
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
            ]
        }
    },
}
</script>
<style >
    .ContainerSocial:hover .Social{
        @apply  block opacity-100 ;
        opacity: 1;
	    animation-name: fadeInOpacity;
	    animation-iteration-count: 1;
	    animation-timing-function: ease-in;
	    animation-duration: .4s;
    }

    @keyframes fadeInOpacity {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
</style>