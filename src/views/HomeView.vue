<template>
  <div class="home">
    <HeroComponent />
    <serviceComponent />
    <AddedComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroComponent from "@/components/home/HeroComponent.vue";
import serviceComponent from "@/components/home/serviceComponent.vue";
import AddedComponent from "@/components/home/AddedComponent.vue";

export default {
  name: "HomeView",
  components: {
    HeroComponent,
    serviceComponent,
    AddedComponent,
  },
};
</script>
