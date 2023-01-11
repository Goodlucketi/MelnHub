<template>
  <div class="footer">
    <div class="footerContainer">
      <div class="links">
        <a href="#"><li>About</li></a>
        <a href="#"><li>Service</li></a>
        <a href="#"><li>Training</li></a>
        <a href="#"><li>Blog</li></a>
      </div>
      <div class="social-media">
        <a href="#">
          <font-awesome-icon
            class="icon"
            icon="fa-brands fa-facebook"
            size="2x"
        /></a>
        <a href="#">
          <font-awesome-icon class="icon" icon="fa-brands fa-youtube" size="2x"
        /></a>
        <a href="#">
          <font-awesome-icon
            class="icon"
            icon="fa-brands fa-instagram"
            size="2x"
        /></a>
        <a href="#">
          <font-awesome-icon class="icon" icon="fa-brands fa-twitter" size="2x"
        /></a>
      </div>
      <div class="contact">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, labore!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer {
  color: rgb(1, 1, 29);
  padding: 2rem 0;
  height: 50vh;
  background: linear-gradient(
    180deg,
    rgba(244, 245, 249, 0.808),
    rgba(95, 97, 107, 0.884)
  );
}

.footerContainer {
  width: 80%;
  margin: 2rem auto;
  /* padding: 10px; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  justify-items: center;
  align-items: center;
}
.social-media a,
.links a {
  margin: 5px;
  padding: 5px;
  text-decoration: none;
  font-size: large;
  font-weight: 600;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: rgb(1, 1, 36);
}
.links li {
  list-style: none;
}
.contact {
  text-align: center;
}

@media screen and (max-width: 500px) {
  .footer {
    padding: 10px;
  }
  .footerContainer {
    width: 100%;
    grid-template-columns: 1fr;
  }
}
</style>
