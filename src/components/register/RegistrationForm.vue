<template>
  <div class="register">
    <div class="regContainer w-11/12 py-10 mx-auto">
      <div class="form flex gap-5 justify-center align-center lg:flex-col">
        <form class="regForm border-l border-slate-600 rounded-xl p-4 w-5/12 lg:mx-auto lg:w-8/12 sm:w-11/12">
          <h3 class="text-2xl text-center mb-3 p-2">Register</h3>

          <div class="p-2 border-b mb-3 relative ">
            <font-awesome-icon class="icon absolute" icon="fa-solid fa-user" />
            <input type="text" name="name" id="name" placeholder="Name:" class="block w-11/12 mx-auto outline-0 pl-4" />
          </div>
          <div class="p-2 border-b mb-3 relative ">
            <font-awesome-icon class="icon absolute" icon="fa-solid fa-envelope" />
            <input type="email" name="email" id="email" placeholder="Email:"  class="block w-11/12 mx-auto outline-0 pl-4"/>
          </div>
          <div class="p-2 border-b mb-3 relative ">
            <font-awesome-icon class="icon absolute" icon="fa-solid fa-phone" />
            <input type="text" name="phone" id="phone" placeholder="Phone:" class="block w-11/12 mx-auto outline-0 pl-4" />
          </div>

          <div class="p-2 border-b mb-3 relative">
            <font-awesome-icon icon="fa-solid fa-person-half-dress" size="xl" class="icon absolute top-0" />
            <select name="gender" id="gender" class="block w-11/12 mx-auto outline-0">
              <option value="null" class="p-2 outline-0">--Gender--</option>
              <option value="male" class="p-2 outline-0">Male</option>
              <option value="female" class="p-2 outline-0">Female</option>
            </select>
          </div>

          <div class="p-2 border-b mb-3 relative">
            <font-awesome-icon icon="fa-solid fa-calendar-days" class="icon absolute"/>
            <label for="dob" class="block pl-8">Date of Birth</label>
            <input type="date" name="dob" id="dob" placeholder="Date of Birth:" class="block w-11/12 mx-auto outline-0" />
          </div>
          <div class="p-2 border-b mb-3 relative ">
            <font-awesome-icon class="icon absolute" icon="fa-solid fa-location-dot" />
            <input type="text" name="address" id="address" placeholder="Address:" class="block w-11/12 mx-auto outline-0 pl-4" />
          </div>

          <div class="p-2 border-b mb-3 relative ">
            <font-awesome-icon class="icon absolute" icon="fa-solid fa-book" />
            <input type="text" name="course" id="course" placeholder="Course:"  class="block w-11/12 mx-auto outline-0 pl-4" v-model="courseSelect"/>
          </div>

          <div class="p-2 mt-5 relative">
            <input type="submit" value="Enroll" class="block w-11/12 mx-auto bg-purple-700 text-white p-2 rounded-lg hover:bg-slate-400 transition-all duration-1000">
          </div> 
        </form>
        <div class="form-img w-5/12 relative rounded-xl lg:mx-auto lg:w-8/12 sm:w-11/12">
          <h3 class="p-4 text-center text-2xl absolute bottom-32 sm:bottom-8">
            We are <span class="text-4xl text-purple-800 text-shadow">Transforming</span> the <span class="text-4xl text-purple-800 text-shadow">Future</span> with <span class="text-4xl text-purple-800 text-shadow">Technology</span>
          </h3>
          <img src="../../assets/images/Rectangle 124 (1).png" alt="Laptop wit mobile phone" class="w-full p-4 rounded-xl  transition-all duration-1000 hover:filter-none">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistrationForm",
  data() {
    return {
      courseSelect: this.$route.params.courseSelect,
    }
  },
};
</script>

<style scoped>

</style>
