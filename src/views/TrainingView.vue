<template>
  <div class="about">
    <div class="aboutcontainer">
      <AboutHero />
      <serviceComponent />
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import AboutHero from "@/components/about/HeroComponent.vue";
import serviceComponent from "@/components/home/serviceComponent.vue";
import FooterComponent from "@/components/home/FooterComponent.vue";
export default {
  name: "TrainingView",
  components: {
    AboutHero,
    serviceComponent,
    FooterComponent,
  },
};
</script>
