<template>
  <div class="footer">
    <div class="footerContainer">
      <div class="logo">
        <img src="../../assets/images/Logo_Primary_white.png" alt="Company Logo" width="90%">
      </div>
      <div class="company-info">
        <div class="platforms">
          <p><span><font-awesome-icon class="foot-social-icon" icon="fa-solid fa-envelope"/></span> melnhub203@gmail.com</p>
          <p><font-awesome-icon class="foot-social-icon" icon="fa-solid fa-location-dot"/> #55 Uyo Road, Beside Geneto Hotel, Nung Udoe, Ibesikpo</p>
          <p><font-awesome-icon class="foot-social-icon" icon="fa-solid fa-phone"/> +234 9066600060, +234 8060867256</p>
        </div>
        <div class="links">
          <div class="company">
            <h4>COMPANY</h4>
            <p><router-link to="" class="footer-link">About Us</router-link></p>
            <p><router-link to="" class="footer-link">Our Vision</router-link></p>
            <p><router-link to="" class="footer-link">Our Mission</router-link></p>
            <p><router-link to="" class="footer-link">Our Projects</router-link></p>
            <p><router-link to="" class="footer-link">Our Team</router-link></p>
          </div>
          <div class="quick-links">
            <h4>QUICK LINKS</h4>
            <p><router-link to="/" class="footer-link">Home</router-link></p>
            <p><router-link to="/about" class="footer-link">About</router-link></p>
            <p><router-link to="/service" class="footer-link">Services</router-link></p>
            <p><router-link to="/project" class="footer-link">Projects</router-link></p>
            <p><router-link to="/training" class="footer-link">Trainings</router-link></p>
            <p><router-link to="/blog" class="footer-link">Blog</router-link></p>
          </div>
        </div>
      </div>
      <div class="trademark">
        <p>&copy; 2023 Meln Hub. All right reserved</p>
        <div class="com-social-icons">
          <a :href="facebook" :target="target"><font-awesome-icon class="foot-social-icon footer-link" icon="fa-brands fa-facebook"/></a>
          <a :href="linkedin" :target="target"><font-awesome-icon class="foot-social-icon footer-link" icon="fa-brands fa-linkedin"/></a>
          <a :href="twitter" :target="target"><font-awesome-icon class="foot-social-icon footer-link" icon="fa-brands fa-twitter"/></a>
          <a :href="instagram" :target="target"><font-awesome-icon class="foot-social-icon footer-link" icon="fa-brands fa-instagram"/></a>
          <a :href="whatsapp" :target="target"><font-awesome-icon class="foot-social-icon footer-link" icon="fa-brands fa-whatsapp"/></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      facebook:"https://www.facebook.com/profile.php?id=100092200862993",
      twitter: 'https://www.twitter.com/Melnhub',
      linkedin: 'https://www.linkedin.com/in/meln-hub/',
      instagram: 'https://www.instagram.com/melnhub',
      target: '_blank',
      whatsapp: 'https://chat.whatsapp.com/Ke8EcoUXVSB3LzsEfh4D8r',
    }
  },
};
</script>

<style scoped>
.footer {
  background: url("../../assets/images/footer.png");
  color:#fff;
  font-weight: 100;
  font-size: 0.8rem;
}

.footerContainer {
  width: 90%;
  margin: 0 auto;
  padding: 3rem 0 0.2rem;
}
.footerContainer>div{
  margin: 20px 0;
}
.company-info{
  display: flex;
  justify-content: space-between;
}
.links{
  display: flex;
  gap: 50px;
}
.links h4{
  margin: 10px auto;
  font-size: 0.8rem;
}
.links p{
  margin: 5px auto;
}
.platforms p{
  margin: 10px auto;
  font-size: 0.8rem;
}
.trademark{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.foot-social-icon{
  margin:auto 10px;
  font-size: 1rem;
}
.footer-link{
  color: #fff;
}

@media screen and (max-width: 1000px) {
  .company-info{
    flex-flow: column wrap;
  }
  .links{
    gap:120px;
  }
  .platforms p{
    font-size: 0.7rem;
  }
  .foot-social-icon{
    margin:auto 5px;
    font-size: 0.8rem;
  }
}
@media screen and (max-width:500px){
  .platforms p{
    font-size: 0.65rem;
  }
  .foot-social-icon{
    margin: auto 2px;
  }
}
</style>
