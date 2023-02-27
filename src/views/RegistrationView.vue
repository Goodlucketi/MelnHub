<template>
  <div class="about">
    <div class="aboutcontainer">
      <AboutHero />
      <RegistrationForm />
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import AboutHero from "@/components/about/HeroComponent.vue";
import RegistrationForm from "@/components/register/RegistrationForm.vue";
import FooterComponent from "@/components/home/FooterComponent.vue";
export default {
  name: "RegistrationView",
  data: () => ({
    title: "Trainings",
  }),
  components: {
    AboutHero,
    RegistrationForm,
    FooterComponent,
  },
};
</script>
