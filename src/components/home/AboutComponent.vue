<template>
  <div class="ad">
    <div class="adContainer">
      <div class="adText">
        <h3>MELN HUB</h3>
        <p>
          Meln Hub Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatum voluptate architecto nisi! Recusandae aspernatur nihil
          blanditiis minima obcaecati, est rem, at rerum tempora accusamus
          aperiam aut et culpa optio ad a commodi itaque placeat. Amet, odio
          voluptate atque dolorem harum eaque ipsa nemo ea maiores vitae quidem
          aperiam fugiat itaque consectetur debitis nam neque sapiente natus,
          numquam facilis repellendus quaerat. Rem quia vel nemo, officiis,
          nobis voluptate impedit ab molestiae omnis obcaecati minus non. Minus
          hic sequi aliquid ipsum, tempore placeat consectetur quas expedita
          enim laborum iure dolore repellat et magnam obcaecati quam ducimus,
          dolor cum rem aperiam corporis. Reiciendis!
        </p>
      </div>
      <div class="adImage">
        <img src="../../assets/about (1).jpg" alt="Learn Web Image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutComponent",
};
</script>

<style scoped>
.ad {
  color: rgb(249, 249, 252);
  padding: 2rem 0;
  background: linear-gradient(
      45deg,
      rgba(2, 4, 34, 0.808),
      rgba(0, 3, 25, 0.884)
    ),
    url("../../assets/tech\ background.jpg") no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

.adContainer {
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: center;
}

.adContainer > div {
  width: 50%;
}
.adText h3 {
  font-size: 2rem;
}
.adText p {
  font-size: 1.2rem;
  margin: 10px auto;
  padding-right: 10px;
}
.adImage img {
  width: 100%;
  object-fit: cover;
}

@media screen and (max-width: 500px) {
  .ad {
    padding: 10px;
  }
  .adContainer {
    width: 100%;
    gap: 1rem;
    flex-flow: column-reverse;
  }
  .adContainer > div {
    width: 80%;
    margin: 20px auto;
  }
  .adText h3 {
    font-size: 1.5rem;
  }
  .adText p {
    font-size: 1rem;
    padding: 10px 0;
  }
}
</style>
