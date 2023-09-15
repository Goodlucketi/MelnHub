<template>
  <div class="training">
    <div class="training-container w-11/12 mx-auto py-10">
      <h2 class="text-3xl text-center p-2">Our Training</h2>
      <div class="courses grid grid-cols-3 justify-center gap-10 align-center sm:grid-cols-1">
        <div class="course rounded-lg flex flex-col shadow-lg px-10 py-5 text-center">
          <img src="../../assets/icons/Code.png" alt="Software Development" class="w-2/6 p-5 mx-auto">
          <h3 class="text-2xl p-2 mb-2" :courses="courses.SoftwareDevelopment">{{courses.SoftwareDevelopment }}</h3>
          <p class="text-sm mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, reprehenderit odit modi blanditiis corrupti repellat, dolore aut tempore laboriosam magnam, doloremque deleniti vel accusantium maxime iure sunt possimus voluptas autem.
          </p>
          <router-link :to="{name: 'registration', params: {courseSelect: courses.SoftwareDevelopment}}" class="border rounded-lg bg-purple-800 text-white hover:bg-white hover:text-purple-500 transition-all duration-1000 p-2">Register</router-link>
        </div>

        <div class="course rounded-lg flex flex-col shadow-lg px-10 py-5 text-center">
          <img src="../../assets/icons/icons8-branding-48 1.png" alt="Software Development" class="w-2/6 p-5 mx-auto">
          <h3 class="text-2xl p-2 mb-2" :courses="courses.GraphicsDesign">{{ courses.GraphicsDesign }}</h3>
          <p class="text-sm mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, reprehenderit odit modi blanditiis corrupti repellat, dolore aut tempore laboriosam magnam, doloremque deleniti vel accusantium maxime iure sunt possimus voluptas autem.
          </p>
          <router-link :to="{name: 'registration', params: {courseSelect: courses.GraphicsDesign}}" class="border rounded-lg bg-purple-800 text-white hover:bg-white hover:text-purple-500 transition-all duration-1000 p-2">Register</router-link>
        </div>

        <div class="course rounded-lg flex flex-col shadow-lg px-10 py-5 text-center">
          <img src="../../assets/icons/icons8-product-management-68 1.png" alt="Software Development" class="w-2/6 p-5 mx-auto">
          <h3 class="text-2xl p-2 mb-2" :courses="courses.ProjectManagement">{{ courses.ProjectManagement }}</h3>
          <p class="text-sm mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, reprehenderit odit modi blanditiis corrupti repellat, dolore aut tempore laboriosam magnam, doloremque deleniti vel accusantium maxime iure sunt possimus voluptas autem.
          </p>
          <router-link :to="{name: 'registration', params: {courseSelect: courses.ProjectManagement}}" class="border rounded-lg bg-purple-800 text-white hover:bg-white hover:text-purple-500 transition-all duration-1000 p-2">Register</router-link>
        </div>

        <div class="course rounded-lg flex flex-col shadow-lg px-10 py-5 text-center">
          <img src="../../assets/icons/icons8-meeting-50 1.png" alt="Software Development" class="w-2/6 p-5 mx-auto">
          <h3 class="text-2xl p-2 mb-2" :courses="courses.data">{{ courses.data}}</h3>
          <p class="text-sm mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, reprehenderit odit modi blanditiis corrupti repellat, dolore aut tempore laboriosam magnam, doloremque deleniti vel accusantium maxime iure sunt possimus voluptas autem.
          </p>
          <router-link :to="{name: 'registration', params: {courseSelect: courses.data}}" class="border rounded-lg bg-purple-800 text-white hover:bg-white hover:text-purple-500 transition-all duration-1000 p-2">Register</router-link>
        </div>

        <div class="course rounded-lg flex flex-col shadow-lg px-10 py-5 text-center">
          <img src="../../assets/icons/icons8-layout-50 1.png" alt="Software Development" class="w-2/6 p-5 mx-auto">
          <h3 class="text-2xl p-2 mb-2" :courses="courses.UiUx">{{ courses.UiUx }}</h3>
          <p class="text-sm mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, reprehenderit odit modi blanditiis corrupti repellat, dolore aut tempore laboriosam magnam, doloremque deleniti vel accusantium maxime iure sunt possimus voluptas autem.
          </p>
          <router-link :to="{name: 'registration', params: {courseSelect: courses.UiUx}}" class="border rounded-lg bg-purple-800 text-white hover:bg-white hover:text-purple-500 transition-all duration-1000 p-2">Register</router-link>
        </div>

        <div class="course rounded-lg flex flex-col shadow-lg px-10 py-5 text-center">
          <img src="../../assets/icons/icons8-layout-50 1.png" alt="Software Development" class="w-2/6 p-5 mx-auto">
          <h3 class="text-2xl p-2 mb-2" :courses="courses.videoEditing">{{ courses.videoEditing }}</h3>
          <p class="text-sm mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, reprehenderit odit modi blanditiis corrupti repellat, dolore aut tempore laboriosam magnam, doloremque deleniti vel accusantium maxime iure sunt possimus voluptas autem.
          </p>
          <router-link :to="{name: 'registration', params: {courseSelect: courses.videoEditing}}" class="border rounded-lg bg-purple-800 text-white hover:bg-white hover:text-purple-500 transition-all duration-1000 p-2">Register</router-link>
        </div>

        <div class="course rounded-lg flex flex-col shadow-lg px-10 py-5 text-center">
          <img src="../../assets/icons/icons8-layout-50 1.png" alt="Software Development" class="w-2/6 p-5 mx-auto">
          <h3 class="text-2xl p-2 mb-2" :courses="courses.WebDevelopment">{{courses.WebDevelopment}}</h3>
          <p class="text-sm mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, reprehenderit odit modi blanditiis corrupti repellat, dolore aut tempore laboriosam magnam, doloremque deleniti vel accusantium maxime iure sunt possimus voluptas autem.
          </p>
          <router-link :to="{name: 'registration', params: {courseSelect: courses.WebDevelopment}}" class="border rounded-lg bg-purple-800 text-white hover:bg-white hover:text-purple-500 transition-all duration-1000 p-2">Register</router-link>
        </div>

        <div class="course rounded-lg flex flex-col shadow-lg px-10 py-5 text-center">
          <img src="../../assets/icons/icons8-branding-48 1.png" alt="Software Development" class="w-2/6 p-5 mx-auto">
          <h3 class="text-2xl p-2 mb-2" :courses="courses.microsoft" >{{courses.microsoft}}</h3>
          <p class="text-sm mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, reprehenderit odit modi blanditiis corrupti repellat, dolore aut tempore laboriosam magnam, doloremque deleniti vel accusantium maxime iure sunt possimus voluptas autem.
          </p>
          <router-link :to="{name: 'registration', params: {courseSelect: courses.microsoft}}" class="border rounded-lg bg-purple-800 text-white hover:bg-white hover:text-purple-500 transition-all duration-1000 p-2">Register</router-link>
        </div>

        <div class="course rounded-lg flex flex-col shadow-lg px-10 py-5 text-center">
          <img src="../../assets/icons/icons8-one-way-transition-50 1.png" alt="Software Development" class="w-2/6 p-5 mx-auto">
          <h3 class="text-2xl p-2 mb-2" :courses="courses.ForexTrading">{{ courses.ForexTrading }}</h3>
          <p class="text-sm mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, reprehenderit odit modi blanditiis corrupti repellat, dolore aut tempore laboriosam magnam, doloremque deleniti vel accusantium maxime iure sunt possimus voluptas autem.
          </p>
          <router-link :to="{name: 'registration', params: {courseSelect: courses.ForexTrading}}" class="border rounded-lg bg-purple-800 text-white hover:bg-white hover:text-purple-500 transition-all duration-800 p-2">Register</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrainingComponent",
  data() {
    return {
      courses: {
        DataProcessing: "Data Processing",
        WebDevelopment: "Web Development",
        data: "Data Analysis",
        ForexTrading: "Forex Trading",
        SoftwareDevelopment: "Software Development",
        ProjectManagement: "Project Management",
        GraphicsDesign: "Graphics Design",
        UiUx: "UI / UX Design",
        microsoft: "Microsoft Office Suite",
        videoEditing: "Video Editing"
      }
    }
  },
  methods: {
    courseSelect(){
       console.log(this.courses);
    }
  },
}
</script>

<style>

</style>