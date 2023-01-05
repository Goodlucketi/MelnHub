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
  background: url("../../assets/herobackground.png") no-repeat;
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
  font-size: x-large;
  width: 40%;
}
@media screen and (max-width: 500px) {
  .hero {
    background-position: right;
    height: 95vh;
  }
  h3 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
  .hero-txt {
    width: 75%;
    line-height: 30px;
    top: 40%;
    font-size: large;
  }
}
</style>
