<template>
  <div class="home">
    <HeroComponent />
    <AboutHome />
    <serviceComponent :heading="head" :action="link" />
    <AdComponent />
    <MeetTeam />
    <Blog />
    <ContactForm />
    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroComponent from "@/components/home/HeroComponent.vue";
import AboutHome from "@/components/home/AboutHome.vue";
import serviceComponent from "@/components/home/serviceComponent.vue"
import AdComponent from "@/components/home/AdComponent.vue"
import MeetTeam from "@/components/home/MeetTeam.vue"
import Blog from "@/components/home/BlogComponent.vue"
import ContactForm from "@/components/home/ContactUs.vue"
import FooterComponent from '@/components/home/FooterComponent.vue';

export default {
  name: "HomeView",
  data() {
    return {
      head:"Discover Our Services",
      link: 'Explore'
    }
  },
  components: {
    HeroComponent,
    AboutHome,
    serviceComponent,
    AdComponent,
    MeetTeam,
    Blog,
    ContactForm,
    FooterComponent
  },
};
</script>
