<template>
  <div class="home">
    <HeroComponent />
    <serviceComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroComponent from "@/components/home/HeroComponent.vue";
import serviceComponent from "@/components/home/serviceComponent.vue";

export default {
  name: "HomeView",
  components: {
    HeroComponent,
    serviceComponent,
  },
};
</script>
