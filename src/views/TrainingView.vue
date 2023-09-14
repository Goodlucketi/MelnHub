<template>
  <div class="training">
    <div class="trainingcontainer">
      <TrainingComponent />
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import TrainingComponent from '@/components/training/TrainingComponent.vue';
import FooterComponent from "@/components/home/FooterComponent.vue";
export default {
  name: "TrainingView",
  data() {
    return {
      
    }
  },
  components: {
    TrainingComponent,
    FooterComponent,
  },
};
</script>
