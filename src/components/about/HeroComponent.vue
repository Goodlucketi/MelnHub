<template>
  <div class="hero">
    <div class="about-container">
      <div class="aboutTitle">
        <h3>About Us</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi vero
          obcaecati quae qui alias odio rem aliquam facilis deleniti nobis.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutHero",
};
</script>

<style>
.hero {
  background: url("../../assets/herobackground.png");
  height: 70vh;
}
.about-container {
  width: 80%;
  margin: 0 auto;
  padding: 10px;
  color: #f5f5f5;
}
.aboutTitle {
  position: absolute;
  top: 40%;
  font-size: x-large;
  width: 50%;
}
</style>
