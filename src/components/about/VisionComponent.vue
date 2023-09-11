<template>
    <div class="vision flex justify-between align-center gap-5 p-24">
        <div class="vis bg-black text-white text-center py-16 px-10 rounded-3xl w-6/12">
            <h4 class="text-xl">Vision</h4>
            <p class="font-thin p-2">
                To create a world where every youth has the oportunity to gain and apply relevant ICT skills
            </p>
        </div>
        <div class="mission bg-black text-white text-center py-16 px-10 rounded-3xl w-6/12">
            <h4 class="text-xl">Mission</h4>
            <p class="font-thin p-2">
                We are committed to providing information and communication technology solutions through training and equipping the youths with sufficient ideas, expertise and resources necessary to transform individuals.
            </p>
        </div>
    </div>
</template>
  
  <script>
  export default {
    name: "visionComponent",
  };
  </script>
  
  <style scoped>
    .vision{
        background: url("../../assets/images/VisionBg.png");
        background-size: cover;
    }
  
  </style>
  