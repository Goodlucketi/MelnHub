<template>
    <div class="project">
      <div class="projectcontainer">
        
        <TemporaryComponent />
        <FooterComponent />
      </div>
    </div>
  </template>
  
  <script>
  import TemporaryComponent from "@/components/TemporaryComponent.vue";

  import FooterComponent from "@/components/home/FooterComponent.vue";
  export default {
    name: "ProjectView",
    data: () => ({
      
    }),
    components: {
      TemporaryComponent,
      FooterComponent,
    },
  };
  </script>
  