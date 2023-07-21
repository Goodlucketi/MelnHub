<template>
  <div class="ad">
    <div class="adContainer">
      <div class="adContents">
        <div class="adImage">
          <img src="../../assets/images/Vector.png" alt="Learn Web Image" />
        </div>
        <div class="adText">
          <h3>Why Choose Us</h3>
          <span class="sub-text">Transforming the Future with Innovative Technology</span>
          <div class="underline"></div>
          <p>
            At Meln Hub, we believe in the power of technology to shape a better world. We are a leading tech firm dedicated to providing cutting-edge solutions that empower businesses, drive digital transformation, and unlock new opportunities. With years of experience in the industry, our team of skilled professionals possesses deep knowledge and expertise across a wide range of technologies. We stay ahead of the curve to ensure we deliver solutions that are tailored to your specific needs. 
          </p>
          <div class="btns">
            <router-link class="read-more-btn" to="/contact">Read More</router-link>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
  export default {
    name: "AboutHome"
  }
</script>

<style scoped>
.ad {
  color: rgb(3, 1, 27);
  padding: 2rem 0;
  margin: 2rem auto 0;
}
.adContainer{
  width: 90%;
  margin: 2rem auto 0;
}

.adContents {
  margin: 2rem auto 0;
  display: flex;
  gap: 30px;
  justify-content: space-between;
  padding:30px 0;
}
.adContents>div{
  width: 50%;
}

.adText h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 30px;
}
.sub-text{
  font-size: smaller;
  color: #353535;
}
.adText p{
  font-size: larger;
  line-height: 35.5px;
}
.underline{
  height: 1px;
  background: #353535;
  width: 70%;
  margin:10px 0;
}
.adImage img {
  width: 100%;
}
.btns{
  background: #2A328D;
  padding: 15px 35px;
  margin: 20px 0 0;
  border-radius: 10px;
  font-weight: 900;
  display: inline-block;
}
.read-more-btn{
  color: #fff;
}

@media screen and (max-width: 1000px) {
  .ad {
    color: rgb(2, 0, 26);
    padding: 10px;
  }
  .adContainer{
    margin: 15rem auto 0;
  }
  .adContents {
    width: 100%;
    flex-flow:wrap;
  }
  .adContents > div {
    width: 100%;
    margin: 15px auto;
  }
  .adText{
    text-align: center;
  }
  .adText h3 {
    font-size: 1.5rem;
    color: #2A328D;
  }
  .adText p{
    font-size: medium;
  }
  
  .underline{
    margin: 10px auto;
  }

  .btns{
    display: block;
  }
  
}
</style>
