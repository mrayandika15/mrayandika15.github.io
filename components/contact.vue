<template >
<section id="contact">
    <div class="flex w-full h-full flex-col text-white ml-2 md:ml-16 my-36"
    data-aos="fade-up"   data-aos-once="true"
    >
        <!-- Pembatas -->
        <div class="flex flex-col">
            <h4 class="md:text-5xl md:my-3 text-2xl font-semibold">Contact</h4>
            <div class="underline my-3"></div>
            <p class="text-gray-300 text-base md:text-lg font-semibold">Interested ? Drop me a line if you want to work together on something exciting. Big or small </p>
        </div>

        <div class="flex w-4/5 h-full relative">
            <form @submit.prevent="sendEmail" class="max-w-sm md:text-lg rounded-lg shadow-xl p-3  md:max-w-xl w-full  " >

                <!-- Nama -->
                <div class="relative py-2    ">
                  <label class="inline-block my-3" >Name</label>
                  <input
                  type="text"
                  v-model="name"
                  name="name"
                  placeholder="What's your name ? "
                  class="block w-full appearance-none focus:outline-none bg-transparent text-white focus-within:border-color2 border p-2  " />

              </div>

              <!-- Email -->

              <div class="relative py-2    ">
                <label class="inline-block my-3" >Email</label>
                <input
                type="text"
                v-model="email"
                name="email"
                placeholder="What’s your email address ?"
                class="block w-full appearance-none focus:outline-none bg-transparent text-white focus-within:border-color2 border p-2" />

            </div>

            <!-- Message -->
            <div class="relative py-2   ">
              <label class="inline-block my-3" >Message</label>
              <textarea
              type="text"
              v-model="message"
              name="message"
              placeholder="What’s your message ? "
              class="block w-full appearance-none focus:outline-none bg-transparent text-white focus-within:border-color2 border h-32 p-2 " />

            </div>

              <div class="flex w-full ">
                <input class="py-2 px-10 mt-6 text-base font-semibold border bg-transparent transition-all cursor-pointer hover:bg-color1   " type="submit" value="Send Email">
              </div>


              </form>

        </div>



    </div>
</section>
</template>
<script>
import emailjs from 'emailjs-com';

export default {
    data() {
    return {
      name: '',
      email: '',
      message: '',
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('gmail_porto', 'templategmail_porto', e.target,
        'user_n2UXvjBFPlJgedfzZ8y5T', {
          name: this.name,
          email: this.email,
          message: this.message
        })
        this.$toasted.show("Email has been sent", {
        theme: "outline",
        position: "top-center",
        duration : 5000
      });
      } catch(error) {
        this.$toast.error('Oops...Something went wrong')
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  },


}
</script>
<style >

</style>