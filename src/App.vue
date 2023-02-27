<template>
  <div id="app">
    <nav>
      <div class="nav-content">
        <div class="logo">
          <router-link to="/"><h3 class="logo-text">MELN</h3></router-link>
        </div>
        <div :id="openNav" class="link" :style="{ display: nav }">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/training">Training</router-link>
          <router-link to="/blog">Blog</router-link>
        </div>
        <div @click="navigation" class="menu-icon">
          <font-awesome-icon class="icon" icon="fa-solid fa-bars" size="lg" />
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "RegistrationForm",
  data: () => ({
    openNav: false,
    nav: "",
  }),

  methods: {
    navigation: function () {
      if (this.openNav == false) {
        this.openNav = true;
        this.nav = "block";
      } else {
        this.openNav = false;
        this.nav = "none";
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  scroll-behavior: smooth;
}
nav {
  background: rgb(12, 2, 2);
  padding: 5px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
}

.nav-content {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav a {
  padding: 20px;
  text-decoration: none;
  font-size: larger;
  color: #fff;
}
.logo-text {
  color: #fff;
}
.menu-icon {
  color: #fff;
  display: none;
}

@media screen and (max-width: 500px) {
  .link {
    display: none;
    position: fixed;
    top: 70px;
    left: 0;
    background: rgba(0, 0, 0, 0.825);
    width: 100%;
    height: 100vh;
    padding: 20px;
  }
  .menu-icon {
    display: block;
  }
  nav a {
    display: block;
    transition: 2s;
  }
  nav a:hover {
    background: #fff;
    color: #000;
  }
}
</style>
