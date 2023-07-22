<template>
  <div class="hero">
    <div class="hero-content">
      <div class="hero-txt">
        <h3 class="hero-text-head">
          Transforming <span class="hero-text-color"> Businesses </span>through
          <span class="hero-text-color"> Innovative </span> ICT Solutions
        </h3>
        <p class="hero-text-body">
          At Meln Hub, we believe in the power of technology to shape a better
          world. We are dedicated to providing cutting-edge solutions that
          empower businesses, drive digital transformation, and unlock new
          opportunities.
        </p>
        <div class="btns">
          <router-link class="btn" to="/contact">Get Started</router-link>
          <router-link class="btn learn-more" to="/contact">Learn More</router-link>
        </div>
      </div>
      <div class="features">
        <div class="feat-item ideate">
          <div class="icon">
            <img src="../../assets/icons/python.svg" alt="ideate-icon">
          </div>
          <div class="text">
            <h3>Ideate</h3>
            <p>Embrace the power of ideation to fuel your digital transformation journey and revolutionize your business</p>
          </div>
        </div>
        <div class="feat-item collaborate">
          <div class="icon">
            <img src="../../assets/icons/colorfilter.svg" alt="collaborate-icon">
          </div>
          <div class="text">
            <h3>Collaborate</h3>
            <p>"Experience the transformative impact of collaboration, where diverse perspectives converge to create solutions that surpass expectations."</p>
          </div>
        </div>
        <div class="feat-item build">
          <div class="icon">
            <img src="../../assets/icons/building3.svg" alt="build-icon">
          </div>
          <div class="text">
            <h3>Build</h3>
            <p>Embrace the power to build, as you transform your ideas into reality, creating innovative products and solutions that shape industries</p>
          </div>
        </div>
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
  background: url('../../assets/images/hero-background.png') no-repeat;
  background-size: cover;
  height: 100vh;
  position: relative;
}
.hero-content{
  position: relative;
  top: 35%;
  width: 90%;
  margin: auto auto;
  color: #fff;
  text-align: center;
}
.hero-text-head{
  font-size: 3.5rem;
  margin: 10px;
  padding: 10px;
  line-height: 60px;
}
.hero-text-body{
  width: 80%;
  margin: auto auto;
  font-size: 1.359rem;
  padding: 10px;
  line-height: 30px;
}
.hero-text-color{
  color: #5CEAF3;
  font-weight:900;
}
.btns{
  margin: 30px auto 70px;
}
.btn{
  background: #e1e1e1;
  padding: 15px 35px;
  margin: 10px;
  border-radius: 10px;
  font-weight: 900;
}
.learn-more{
  background: none;
  outline: #5CEAF3 1px solid;
  color: #5CEAF3;
}
.features{
  display: flex;
  gap:20px;
  justify-content: space-between;
  align-items: center;
  position: relative;
  bottom: 5px;
}
.feat-item{
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 15px;
  border-radius: 20px;
  text-align: left;
  font-size: 0.8rem;
}
.ideate{
  background: #353535;
}
.collaborate{
  background: #2A328D;
}
.build{
  background: #5CEAF3;
  color:#000;
  font-weight: 900;
}
.text h3{
  font-size: x-large;
  font-weight: bolder;
  margin: 5px 0 10px;
}

.icon{
  border-radius: 50%;
  background: #fff;
  padding: 10px;
}
@media screen and (max-width:1200px) {
  .hero{
    height:150vh;
  }
}
@media screen and (max-width:1000px) {
  .hero{
    height:130vh;
    margin-bottom: 400px;
  }
  .hero-content{
    top: 150px;
  }
  .features{
    flex-direction: column;
    bottom: 0px;
  }
  .features>div{
    width: 100%;
    padding: 15px;
  }
  .feat-item{
    flex-flow: column;
    text-align: center;
    margin:10px;
  }
  .text h3{
    margin: 0 auto;
  }
  .text p{
    font-size: 1.2rem;
  }
}
@media screen and (max-width:700px) {
  .hero{
    height: 150vh;
  }
  
}

@media screen and (max-width:500px) {
  .hero{
    height: 100vh;
  }
  .hero-content{
    top: 100px;
  }
  .hero-text-head{
    font-size: 2.5rem;
    margin: 10px;
    padding: 10px;
    line-height: 40px;
  }
  .hero-text-body{
    width: 80%;
    margin: auto auto;
    font-size: 1rem;
    padding: 10px;
    line-height: 25px;
  }
  .features{
    position: relative;
    bottom:50px;
    gap: 10px;
  }
  
  .btn{
    display: block;
  }
  .text p{
    font-size: 0.9rem;
  } 
  
}
@media screen and (max-width:400px) {
  .hero{
    height: 120vh;
  }
}

@media screen and (max-width:320px) {
  .hero{
    height: 150vh;
  }
}
</style>