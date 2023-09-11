<template>
    <div class="service">
      <div class="serviceContainer">
        <ServiceHero />
        <serviceComponent />
        <ContactForm />
        <Footer />
      </div>
    </div>
  </template>
  
  <script>
  import ServiceHero from "@/components/service/ServiceHero.vue";
  import serviceComponent from "@/components/home/serviceComponent.vue"
  import ContactForm from "@/components/home/ContactUs.vue";
  import Footer from '@/components/home/FooterComponent.vue';
  
  export default {
    name: "ServiceView",
    components: {
      ServiceHero,
      serviceComponent,
      ContactForm,
      Footer
    },
  };
  </script>
  