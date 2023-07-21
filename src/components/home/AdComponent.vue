<template>
  <div class="ad">
    <div class="adContainer">
      <div class="adText">
        <h2>Level up your IT skills with our comprehensive training program.</h2>
        <p>
          Use marketing automation to identify hot leads and email your sales team telling them to follow up. Nurture and contact leads at the opportune time to maximize.
        </p>
        <router-link class="btn" to="/register">Get Started Now</router-link>
      </div>
      <div class="adImage">
        <div class="ad-background"></div>
        <img src="../../assets/images/digital-service2 1.png" alt="Learn Web Image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdComponent",
};
</script>

<style scoped>
.ad {
  color: #000000;
  padding: 2rem 0;
  margin: 4rem 0;
  background: #f4f9fa;
}

.adContainer {
  width: 90%;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  height: auto;
}

.adContainer > div {
  width: 50%;
  position: relative;
}
.adText h2 {
  font-size: 2.5rem;
  font-weight: 700;
}
.adText p{
  font-size: 1.2rem;
  margin: 20px auto;
}
.adImage{
  position: relative;
}
.adImage img {
  width: 80%;
  position:relative ;
  object-fit: cover;
}

.btn{
  background:#2A328D;
  color: #fff;
  padding: 15px 35px;
  position: absolute;
  bottom:-50px;
  border-radius: 10px;
  font-weight: 900;
}

@media screen and (max-width: 1000px) {
  .adContainer {
    flex-direction: column-reverse;
  }
  .adContainer > div {
    width: 100%;
    margin: 20px auto;
    text-align: center;
  }
  .adText h2 {
    font-size: 2.2rem;
  }
  .adText p{
    font-size: 1.5rem;
  }
  .adImage img {
    width: 80%;
  }

.btn{
  width:100%;
  left: 0;
}
  
}
@media screen and (max-width: 500px) {
  .adText h2 {
    font-size: 1.2rem;
  }
  .adText p{
    font-size: 0.9rem;
  }
  .adImage img {
    width: 100%;
  }
    
}
</style>
