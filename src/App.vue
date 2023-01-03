<template>
  <div id="app">
    <nav>
      <div class="nav-content">
        <div class="logo">
          <h3 class="logo-text">MELN</h3>
        </div>
        <div class="link">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/training">Training</router-link>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
nav {
  background: rgb(12, 2, 2);
  padding: 10px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
}

.nav-content {
  width: 80%;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
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

@media screen and (max-width: 500px) {
  .link {
    display: none;
  }
}
</style>
