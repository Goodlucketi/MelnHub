<template>
  <div class="about">
    <div class="aboutcontainer">
      <AboutHero />
    </div>
  </div>
</template>

<script>
import AboutHero from "@/components/about/HeroComponent.vue";
export default {
  name: "AboutView",
  components: {
    AboutHero,
  },
};
</script>
