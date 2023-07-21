<template>
  <div id="app">
    <nav>
      <div class="nav-content">
        <div class="logo">
          <router-link to="/">
            <img
              src="./assets/images/Logo_Primary_white.png"
              alt="Logo"
              width="100%"
            />
          </router-link>
        </div>
        <div :id="openNav " class="link" :style="{ height: nav }">
          <router-link class="nav-link home" to="/">Home</router-link>
          <router-link class="nav-link" to="/about">About</router-link>
          <router-link class="nav-link" to="/services">Services</router-link>
          <router-link class="nav-link" to="/projects">Projects</router-link>
          <router-link class="nav-link" to="/training">Training</router-link>
          <router-link class="nav-link" to="/blog">Blog</router-link>
          <div class="contact-us">
            <router-link to="/contact">Contact us</router-link>
          </div>
          <div class="social-icons">
            <router-link to="/facebook"><font-awesome-icon class="icon" icon="fa-brands fa-facebook"/></router-link>
            <font-awesome-icon class="icon" icon="fa-brands fa-linkedin"/>
            <font-awesome-icon class="icon" icon="fa-brands fa-twitter"/>
            <font-awesome-icon class="icon" icon="fa-brands fa-instagram"/>
            <font-awesome-icon class="icon" icon="fa-brands fa-whatsapp"/>
          </div>
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
        if(screen.width <= "1000"){
          this.nav = "90vh";
        }
        if(screen.width <= "500"){
          this.nav = "70vh";
        }
       
      } else {
        this.openNav = false;
        this.nav = "0";
      }
    },
  },
  
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@500&family=Roboto:wght@300;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@500&family=Inter:wght@500&family=Roboto:wght@300;500&display=swap');

* {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  box-sizing: border-box;
}
a{
  text-decoration: none;
  color:#353535;
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
  z-index: 1000;
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
.logo {
  width: 15%;
}
.link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
}
.nav-link {
  text-decoration: none;
  color: #fff;
  transition: all 1s;
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
.social-icons{
  display: none;
}
.icon{
  margin:5px;
  color: #020e48;
}

@media screen and (max-width: 1000px) {
  .logo{
    width: 25%;
  }
  .link {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    background: rgb(203, 202, 202);
    border-radius: 10px;
    height: 0;
    overflow: hidden;
    transition: all 1s;
    text-align: center;
    width: 100%;
  }
  .menu-icon {
    display: block;
    position: absolute;
    right:30px;
    z-index: 1000;
  }
  .contact-us {
    width:80%;
    margin: 20px auto;
    background: #020e48;
    text-align: center;
    
  }
  
  .contact-us a{
    color: #fff;
  }
  .nav-link {
    display: block;
    padding:10px;
    margin: 10px;
    color: #353535;
    border-bottom:1px solid #353535;
  }
  .social-icons{
    display: block;
  }
}
@media screen and (max-width:500px) {
  .logo{
    width: 35%;
    z-index: 1000;
  }
  .home{
    margin-top: 50px;
  }
}
</style>
