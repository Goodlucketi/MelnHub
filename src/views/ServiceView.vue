<template>
    <div class="service">
      <div class="serviceContainer">
        <ServiceHero />
        <serviceComponent :heading="heading" :action="link"/>
        <ContactForm />
        <FooterComponent />
      </div>
    </div>
  </template>
  
  <script>
  import ServiceHero from "@/components/service/ServiceHero.vue";
  import serviceComponent from "@/components/home/serviceComponent.vue"
  import ContactForm from "@/components/home/ContactUs.vue";
  import FooterComponent from '@/components/home/FooterComponent.vue';
  
  export default {
    name: "ServiceView",
    data() {
      return {
        heading:'Our Services',
        link: 'Explore'
      }
    },
    components: {
      ServiceHero,
      serviceComponent,
      ContactForm,
      FooterComponent
    },
  };
  </script>
  