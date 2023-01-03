<template>
  <div class="hero">
    <div class="hero-content">
      <div class="hero-txt">
        <h3>MELN HUB</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
          nulla,quibusdam dolorem ipsam neque tempora maiores quis molestiae
          fugiat officia.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroComponent",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero {
  background: url("../../assets/background\ \(3\).jpg") no-repeat;
  background-size: cover;
  height: 95vh;
}
h3 {
  color: rgb(253, 248, 248);
  font-size: 4rem;
}
.hero-content {
  width: 80%;
  margin: 0px auto;
}
.hero-txt {
  color: #f5f5f5;
  position: absolute;
  top: 40%;
  font-size: large;
  width: 40%;
}
@media screen and (max-width: 500px) {
  h3 {
    font-size: 3rem;
  }
  .hero-txt {
    top: 30%;
  }
}
</style>
