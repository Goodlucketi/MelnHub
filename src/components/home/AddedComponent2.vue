<template>
  <div class="ad">
    <div class="adContainer">
      <div class="adText">
        <h2>Become a Professional Graphics Designer</h2>
        <br />
        <h2>Create designs with Photoshop, Illustrator and Figma</h2>
      </div>
      <div class="adImage">
        <img src="../../assets/4738060.jpg" alt="Learn Web Image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddedComponent2",
};
</script>

<style scoped>
.ad {
  color: rgb(3, 1, 27);
  padding: 2rem 0;
}

.adContainer {
  width: 80%;
  margin: 2rem auto;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
}

.adContainer > div {
  width: 45%;
}
.adText h2 {
  font-size: 2rem;
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
    color: rgb(2, 0, 26);
    padding: 10px;
  }
  .adContainer {
    width: 100%;
    flex-flow: column-reverse;
  }
  .adContainer > div {
    width: 80%;
    margin: 15px auto;
  }
  .adText h2 {
    font-size: 1.5rem;
  }
  .adText li {
    font-size: 1.2rem;
    margin: 10px 10px 10px 0;
    padding: 5px 0;
    /* list-style: disc; */
  }
}
</style>
