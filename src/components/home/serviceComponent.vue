<template>
  <div class="services">
    <div class="serviceContainer">
      <h3>Our Services</h3>
      <div class="service-items">
        <div class="service">
          <h3>Web Development</h3>
        </div>
        <div class="service">
          <h3>Graphic Design</h3>
        </div>
        <div class="service">
          <h3>Data Analysis</h3>
        </div>
        <div class="service">
          <h3>Project Management</h3>
        </div>
        <div class="service">
          <h3>Training</h3>
        </div>
        <div class="service">
          <h3>IT/SIWES</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "serviceComponent",
};
</script>

<style scoped>
.serviceContainer {
  width: 80%;
  margin: 4rem auto;
}
.serviceContainer > h3 {
  font-size: x-large;
  text-align: center;
  padding: 1rem;
}
.service-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
}
.service {
  text-align: center;
  height: 25vh;
  background: #7e7e7e;
  padding: 1rem;
  border-radius: 10px;
}
@media screen and (max-width: 500px) {
  .service-items {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
}
</style>
