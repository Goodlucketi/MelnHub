<template>
  <div class="register">
    <div class="regContainer w-11/12 py-10 mx-auto">
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
            <font-awesome-icon class="icon" icon="fa-solid fa-phone" />
            <label for="gender" class="block">Gender</label>
            <select name="gender" id="gender" class="block">
              <option value="null">--Select--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <font-awesome-icon class="icon" icon="fa-solid fa-phone" />
            <label for="dob" class="block">Date of Birth</label>
            <input type="date" name="dob" id="dob" placeholder="Date of Birth:" class="block" />
          </div>
          <div>
            <font-awesome-icon class="icon" icon="fa-solid fa-phone" />
            <input type="text" name="address" id="address" placeholder="Address:" />
          </div>

          <div>
            <font-awesome-icon class="icon" icon="fa-solid fa-phone" />
            <input type="text" name="course" id="course" placeholder="Course:" />
          </div>
          
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistrationForm",
  data() {
    return {
      
    }
  },
};
</script>

<style scoped>

</style>
