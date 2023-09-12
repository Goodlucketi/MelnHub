<template>
    <div class="blog">
      <div class="blogcontainer">
        
        <TemporaryComponent />
        <FooterComponent />
      </div>
    </div>
  </template>
  
  <script>
  import TemporaryComponent from "@/components/TemporaryComponent.vue";
  import FooterComponent from "@/components/home/FooterComponent.vue";
  export default {
    name: "BlogView",
    data: () => ({
      
    }),
    components: {
      TemporaryComponent,
      FooterComponent,
    },
  };
  </script>
  