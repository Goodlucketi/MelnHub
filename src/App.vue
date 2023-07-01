<template>
  <div id="app">
    <nav>
      <div class="nav-content">
        <div class="logo">
          <router-link to="/">
            <img
              src="./assets/images/Logo_Primary_white.png"
              alt="Logo"
              width="80%"
            />
          </router-link>
        </div>
        <div :id="openNav" class="link" :style="{ display: nav }">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/about">About</router-link>
          <router-link class="nav-link" to="/services">Services</router-link>
          <router-link class="nav-link" to="/projects">Projects</router-link>
          <router-link class="nav-link" to="/training">Training</router-link>
          <router-link class="nav-link" to="/blog">Blog</router-link>
        </div>
        <div class="contact-us">
          <router-link to="/contact">Contact us</router-link>
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
  background: rgba(151, 71, 255, 0.3);
  backdrop-filter: blur(10px);
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
}

.nav-content {
  width: 90%;
  margin: auto auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
}
.nav-link {
  padding: 20px;
  text-decoration: none;
  color: #fff;
}

.menu-icon {
  color: #fff;
  display: none;
}
.contact-us {
  background: #e1e1e1;
  padding: 15px 35px;
  border-radius: 10px;
}
.contact-us a {
  color: #353535;
  text-decoration: none;
  font-weight: 700;
}
.nav-link:hover {
  color: #020e48;
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
  .nav-link {
    display: block;
    transition: 2s;
  }
}
</style>
