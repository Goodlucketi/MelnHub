<template>
    <div>
        <div class="values w-11/12 mx-auto">
            <h2 class="text-center font-bold text-3xl p-8 sm:text-2xl">Our Values</h2>
            <div class="values-container" >
                <div class="accordion" v-for="(accord, index) in accordions" :key="index" @click="toggleAccordion(index)">
                    <div class="value bg-blue-900 px-4 py-2 rounded-lg flex justify-between text-white align-center my-3">
                        <p>{{ accord.title }}</p>
                        <font-awesome-icon icon="fa-solid fa-circle-chevron-down" />
                    </div>
                    <transition name="slide-fade">
                        <div class="accordion-content shadow p-5 h-20" v-show="index === openIndex">
                            <p>
                                {{ accord.content }}
                            </p>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "valuesComponent",
    data() {
        return {
            openIndex: -1,
           accordions:[
            {
                title: 'Passion',
                content: 'We are passionate about what we do.',
                open: false
            },
            {
                title: 'Excellence',
                content: 'We are passionate about what we do.',
                open: false
            },
            {
                title: 'Quality Service',
                content: 'We are passionate about what we do.',
                open: false
            },
            {
                title: 'Team Work',
                content: 'We are passionate about what we do.',
                open: false
            },
            {
                title: 'Transparency',
                content: 'We are passionate about what we do.',
                open: false
            },
            {
                title: 'Influence',
                content: 'We are passionate about what we do.',
                open: false
            }
           ] 
        }
    },
    methods: {
        toggleAccordion(index) {
           if(this.openIndex === index){
            this.openIndex = -1
           }else{
            this.openIndex = index
           }
        }
    },
  };
  </script>
  
  <style scoped>
    .accordion-content{
        overflow: hidden;
    }
    .slide-fade-enter-active {
        transition: all 0.5s ease;
    }
    .slide-fade-leave-active {
        transition: all 0.5s ease;
    }
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateY(0);
        opacity:0;
    }
    .slide-fade-leave-active, .slide-fade-enter-to {
        transform: translateY(-100%);
        opacity: 0;
    }
  </style>
  