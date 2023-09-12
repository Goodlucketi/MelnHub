<template>
  <div class="training">
    <div class="trainingcontainer">
      <TemporaryComponent />
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import TemporaryComponent from "@/components/TemporaryComponent.vue";
import FooterComponent from "@/components/home/FooterComponent.vue";
export default {
  name: "TrainingView",
  data: () => ({
    title: "Trainings",
  }),
  components: {
    TemporaryComponent,
    FooterComponent,
  },
};
</script>
