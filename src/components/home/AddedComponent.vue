<template>
  <div class="ad">
    <div class="adContainer">
      <div class="adText">
        <h2>Get Trained in Web Development</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>Javascript</li>
          <li>PHP</li>
          <li>Node</li>
        </ul>
      </div>
      <div class="adImage">
        <img src="../../assets/background (1).jpg" alt="Learn Web Image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddedComponent",
};
</script>

<style scoped>
.ad {
  background: rgb(0, 4, 25);
  color: #fff;
  padding: 2rem 0;
}

.adContainer {
  width: 80%;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.adContainer > div {
  width: 50%;
}
.adText h2 {
  font-size: 3rem;
}
.adText ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 10px 0;
}
.adText h3,
.adText li {
  font-size: 1.5rem;
  margin: 10px;
  padding: 0 15px;
}
.adImage img {
  width: 100%;
  object-fit: cover;
}

@media screen and (max-width: 500px) {
  .ad {
    background: rgb(0, 4, 25);
    color: #fff;
    padding: 10px;
  }
  .adContainer {
    width: 100%;
    flex-flow: column-reverse;
  }
  .adContainer > div {
    width: 80%;
  }
  .adText h2 {
    font-size: 1.8rem;
  }
  .adText li {
    font-size: 1.2rem;
    margin: 10px 10px 10px 0;
    padding: 5px 0;
    /* list-style: disc; */
  }
}
</style>
