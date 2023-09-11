<template>
  <div class="about">
    <div class="aboutcontainer">
      <AboutHero />
      <AboutComponent />
      <VisionComponent />
      <ObjectiveComponent />
      <valuesComponent />
      <MeetTeam />
      <ContactForm />
      <Footer />
    </div>
  </div>
</template>

<script>
import AboutHero from "@/components/about/HeroComponent.vue";
import AboutComponent from "@/components/about/AboutComponent.vue";
import VisionComponent from "@/components/about/VisionComponent.vue";
import ObjectiveComponent from "@/components/about/ObjectiveComponent.vue";
import valuesComponent from "@/components/about/ValuesComponent.vue";
import MeetTeam from "@/components/home/MeetTeam.vue";
import ContactForm from "@/components/home/ContactUs.vue";
import Footer from '@/components/home/FooterComponent.vue';

export default {
  name: "AboutView",
  components: {
    AboutHero,
    AboutComponent,
    VisionComponent,
    ObjectiveComponent,
    valuesComponent,
    MeetTeam,
    ContactForm,
    Footer
  },
};
</script>
