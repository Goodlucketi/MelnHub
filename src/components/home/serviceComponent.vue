<template>
  <div class="services">
    <div class="serviceContainer">
      <h3>Our Services</h3>
      <div class="service-items">
        <div class="service">
          <font-awesome-icon class="icon" icon="fa-solid fa-code" size="4x" />
          <h3>Web Development</h3>
        </div>
        <div class="service">
          <font-awesome-icon class="icon" icon="fa-solid fa-pencil" size="4x" />
          <h3>Graphic Design</h3>
        </div>
        <div class="service">
          <font-awesome-icon
            class="icon"
            icon="fa-solid fa-bar-chart"
            size="4x"
          />
          <h3>Data Analysis</h3>
        </div>
        <div class="service">
          <font-awesome-icon
            class="icon"
            icon="fa-solid fa-line-chart"
            size="4x"
          />
          <h3>Project Management</h3>
        </div>
        <div class="service">
          <font-awesome-icon
            class="icon"
            icon="fa-solid fa-graduation-cap"
            size="4x"
          />
          <h3>Training</h3>
        </div>
        <div class="service">
          <font-awesome-icon
            class="icon"
            icon="fa-solid fa-paint-brush"
            size="4x"
          />
          <h3>UI/UX Design</h3>
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
  height: 20vh;
  box-shadow: 0 5px 10px 5px rgb(210, 196, 196);
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.service h3 {
  color: #0c0c0c;
  font-size: x-large;
}
.icon {
  color: #0a3c35;
}
@media screen and (max-width: 500px) {
  .service-items {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
}
</style>
