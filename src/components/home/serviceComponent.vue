<template>
  <div class="services">
    <div class="serviceContainer py-10 w-11/12 mx-auto">
      <h3 class="text-3xl mb-5 p-3 font-bold text-center">{{ heading }}</h3>
      <div class="service-items grid grid-cols-3 gap-10 lg:grid-cols-1">
        <div class="service">
          <img src="../../assets/icons/Code.png" class="service-icon" alt="">
          <h3 class="service-title">Software Development</h3>
          <p class="service-content">
            We develop robust, scalable, and customized software solutions that align with your business objectives. From web and mobile applications to enterprise software, we have you covered.
          </p>
          <router-link to="/register" class="action"><span>{{ action }}</span><font-awesome-icon class="icon" icon = "fa-solid fa-arrow-right" /></router-link>
        </div>

        <div class="service">
          <img src="../../assets/icons/icons8-one-way-transition-50 1.png" class="service-icon" alt="">
          <h3 class="service-title">Digital Transformation</h3>
          <p class="service-content">
            Embrace the digital age with our transformative solutions. We help businesses streamline processes, enhance customer experiences, and unlock new growth opportunities through digitalization.
          </p>
          <router-link to="/register" class="action"><span>{{ action }}</span><font-awesome-icon class="icon" icon = "fa-solid fa-arrow-right" /></router-link>
        </div>

        <div class="service">
          <img src="../../assets/icons/icons8-meeting-50 1.png" class="service-icon" alt="">
          <h3 class="service-title">IT Consulting</h3>
          <p class="service-content">
            Our experienced consultants provide strategic guidance, technology assessments, and roadmap development to help you navigate the complex IT landscape and make informed technology decisions.
          </p>
          <router-link to="/register" class="action"><span>{{ action }}</span><font-awesome-icon class="icon" icon = "fa-solid fa-arrow-right" /></router-link>
        </div>

        <div class="service">
          <img src="../../assets/icons/icons8-meeting-50 1.png" class="service-icon" alt="">
          <h3 class="service-title">UI/UX Design</h3>
          <p class="service-content">
            We develop robust, scalable, and customized software solutions that align with your business objectives. From web and mobile applications to enterprise software, we have you covered.
          </p>
          <router-link to="/register" class="action"><span>{{ action }}</span><font-awesome-icon class="icon" icon = "fa-solid fa-arrow-right" /></router-link>
        </div>

        <div class="service">
          <img src="../../assets/icons/icons8-product-management-68 1.png" class="service-icon" alt="">
          <h3 class="service-title">Product Management</h3>
          <p class="service-content">
            Embrace the digital age with our transformative solutions. We help businesses streamline processes, enhance customer experiences, and unlock new growth opportunities through digitalization.
          </p>
          <router-link to="/register" class="action"><span>{{ action }}</span><font-awesome-icon class="icon" icon = "fa-solid fa-arrow-right" /></router-link>
        </div>

        <div class="service">
          <img src="../../assets/icons/icons8-branding-48 1.png" class="service-icon" alt="">
          <h3 class="service-title">Branding</h3>
          <p class="service-content">
            Our experienced consultants provide strategic guidance, technology assessments, and roadmap development to help you navigate the complex IT landscape and make informed technology decisions.
          </p>
          <router-link to="/register" class="action"><span>{{ action }}</span><font-awesome-icon class="icon" icon = "fa-solid fa-arrow-right" /></router-link>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "serviceComponent",
  data: () => ({
    
  }),
  props: {
      heading: String,
      action: String,
    }
  
};
</script>

<style scoped>
.services{
  background: url("../../assets/images/Element.png") no-repeat;
  background-position: 0 20rem;
  background-size: contain;
}

.service {
  box-shadow: 0 0px 30px 1px rgb(238, 234, 234), 0 0 30px 1px rgb(239, 232, 232);
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff; 
}
.service:hover {
  transform: scale(1.05);
  transition: all 0.5s;
}
.service-title {
  color: #01091d;
  font-size: x-large;
  font-weight: 800;
  margin:10px 0;
}
.service-content{
  line-height: 30px;
  font-size: medium;
}
.service-icon{
  width: 20%;
}
.icon {
  color: #03001e;
  
}
.action {
  margin: 10px 0;
  display: flex;
  gap: 10px;
  align-items: center;
  color: #03001e;
}
.action:hover {
  background: #fff;
  border: 1px inset #03001e;
  transition: all 0.5s;
}
@media screen and (max-width: 1000px) {
  .serviceContainer> h3 {
    font-size: 2rem;
  }

  .service-title {
    color: #0c0c0c;
    font-size: 2rem;
  }
  .service-content{
    font-size: 1.2rem;
  }
  .service-icon{
    width: 10%;
  }
}

@media screen and (max-width: 500px) {
  .serviceContainer > h3 {
    font-size: 1.2rem;
  }

  .service-title {
    color: #0c0c0c;
    font-size: 1.2rem;
  }
  .service-icon{
    width: 20%;
  }
  .service-content{
    font-size: 0.8rem;
  }
}
</style>
