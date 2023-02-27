<template>
  <div class="register">
    <div class="regContainer">
      <h3>Register</h3>
      <div class="form">
        <form class="regForm">
          <div>
            <font-awesome-icon class="icon" icon="fa-solid fa-user" />
            <input type="text" name="name" id="name" placeholder="Name:" />
          </div>
          <div>
            <font-awesome-icon class="icon" icon="fa-solid fa-envelope" />
            <input type="email" name="email" id="email" placeholder="Email:" />
          </div>
          <div>
            <font-awesome-icon class="icon" icon="fa-solid fa-phone" />
            <input type="text" name="phone" id="phone" placeholder="Phone:" />
          </div>
          <div>
            <label for="gender">
              <font-awesome-icon class="icon" icon="fa-solid fa-male" />
              <input type="radio" name="gender" id="male" value="male" />
            </label>
            <label for="female">
              <font-awesome-icon class="icon" icon="fa-solid fa-female" />
              <input type="radio" name="gender" id="gender" value="female" />
            </label>
          </div>
          <div>
            <font-awesome-icon class="icon" icon="fa-solid fa-book" />
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <font-awesome-icon class="icon" icon="fa-solid fa-user" />
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <font-awesome-icon class="icon" icon="fa-solid fa-user" />
            <input type="text" name="name" id="name" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistrationForm",
  data: () => ({}),
};
</script>

<style scoped>
.regContainer {
  width: 80%;
  margin: 4rem auto;
  outline: 2px solid red;
}
.regContainer > h3 {
  font-size: x-large;
  text-align: center;
  padding: 1rem;
}
.regForm {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;
  justify-content: space-between;
  margin: 10px auto;
  outline: 1px solid red;
}
.regForm input {
  padding: 1rem;
  width: 80%;
  margin: auto auto;
  border-radius: 10px;
}

@media screen and (max-width: 500px) {
  .regForm {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }

  .regContainer h3 {
    color: #0c0c0c;
    font-size: large;
  }
}
</style>
