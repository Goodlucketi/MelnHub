<template>
  <div class="services">
    <div class="serviceContainer">
      <h3>{{ title }}</h3>
      <div class="service-items">
        <div class="service">
          <font-awesome-icon class="icon" icon="fa-solid fa-code" size="4x" />
          <h3>Web Development</h3>
          <router-link to="/register" class="action">Get Started</router-link>
        </div>
        <div class="service">
          <font-awesome-icon class="icon" icon="fa-solid fa-pencil" size="4x" />
          <h3>Graphic Design</h3>
          <router-link to="/register" class="action">Get Started</router-link>
        </div>
        <div class="service">
          <font-awesome-icon
            class="icon"
            icon="fa-solid fa-bar-chart"
            size="4x"
          />
          <h3>Data Analysis</h3>
          <router-link to="/register" class="action">Get Started</router-link>
        </div>
        <div class="service">
          <font-awesome-icon
            class="icon"
            icon="fa-solid fa-line-chart"
            size="4x"
          />
          <h3>Project Management</h3>
          <router-link to="/register" class="action">Get Started</router-link>
        </div>
        <div class="service">
          <font-awesome-icon
            class="icon"
            icon="fa-solid fa-paint-brush"
            size="4x"
          />
          <h3>UI/UX Design</h3>
          <router-link to="/register" class="action">Get Started</router-link>
        </div>
        <div class="service">
          <font-awesome-icon
            class="icon"
            icon="fa-solid fa-graduation-cap"
            size="4x"
          />
          <h3>Training</h3>
          <router-link to="/register" class="action">Get Started</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "serviceComponent",
  data: () => ({
    title: "Services",
  }),
  // props: {
  //   head: Training,
  // },
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
  grid-gap: 3rem;
}
.service {
  text-align: center;
  box-shadow: 0 0px 15px 1px rgb(210, 196, 196);
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.service:hover {
  transform: scale(1.05);
  transition: all 0.5s;
}
.service h3 {
  color: #01091d;
  font-size: larger;
  margin: 10px;
}
.icon {
  color: #03001e;
}
.action {
  padding: 15px;
  margin: 15px auto;
  border-radius: 10px;
  background: #03001e;
  color: #fff;
  text-decoration: none;
}
.action:hover {
  color: #03001e;
  background: #fff;
  border: 1px inset #03001e;
  transition: all 0.5s;
}
@media screen and (max-width: 500px) {
  .service-items {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }

  .service h3 {
    color: #0c0c0c;
    font-size: large;
  }
}
</style>
