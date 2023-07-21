<template>
  <div>
    <div class="hero">
      <div class="about-container">
        <div class="aboutTitle">
          <h2>About Meln Hub</h2>
        </div>
      </div>
    </div>
    <div class="about">
      <div class="about-us">
        <p>
          Meln Hub is a growing Information and Communication Technology
          startup, located in Nung Udoe, Ibesikpo LGA, Akwa Ibom state. We are a
          team of energetic and innovative developers, engineers and designers,
          passionate about implementing customer’s needs with an approach
          focused on satisfaction, innovation and timely delivery. Our services
          include software development, website and mobile application
          development, user interface/experience design, computer hardware
          maintenance and repair, Electrical Installation and Maintenance and
          inverter/solar panel installation, Project Management, Data Analysis
          and Data Science. We also engage in talent development by empowering
          youths through training and internship program.
        </p>
      </div>
      <div class="abt grid">
        <div class="vision">
          <h3>Vision</h3>
          <p>
            Our Vision is to create a world where every youth has the
            opportunity to gain and apply relevant ICT skill thereby creating
            sustainable solutions and economic value.
          </p>
        </div>
        <div class="mission">
          <h3>Mission</h3>
          <p>
            We are committed to providing Information and Communication
            Technology solutions through training and equipping the youths with
            sufficient ideas, expertise and resources necessary to transform
            individuals, organization and society in general and creating
            sustainable products that will be of benefit to the society, the
            nation, Africa and the world at large.
          </p>
        </div>
        <div class="values">
          <h3>Core Values</h3>
          <ul>
            <li>Team Work</li>
            <li>Excellence</li>
            <li>Quality Service</li>
            <li>Integrity</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutHero",
};
</script>

<style scoped>
.hero {
  background: url("../../assets/herobackground.png");
  background-size: cover;
  height: 70vh;
}
.about-container,
.about {
  width: 80%;
  margin: 0 auto;
  padding: 10px;
  /* color: #f5f5f5; */
}
.aboutTitle {
  position: absolute;
  top: 40%;
  font-size: x-large;
  width: 50%;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  grid-gap: 4rem;
}
.about > div {
  margin: 20px auto;
  font-size: large;
}
.abt > div {
  padding: 15px;
  box-shadow: 2px 3px 5px rgb(182, 178, 178);
  border-radius: 10px;
}

.abt > div h3 {
  text-align: center;
  padding: 5px;
}

.values li {
  list-style: none;
  padding: 5px;
  margin-left: 10px;
}

.values li::before {
  content: "✔";
  padding: 5px;
}
</style>
