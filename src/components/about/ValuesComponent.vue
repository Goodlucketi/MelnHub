<template>
    <div>
        <div class="values w-11/12 mx-auto py-10">
            <h2 class="text-center font-bold text-3xl p-8 sm:text-2xl">Our Values</h2>
            <div class="values-container" >
                <div class="accordion" v-for="(accord, index) in accordions" :key="index" @click="toggleAccordion(index)">
                    <div class="value bg-blue-900 px-4 py-2 rounded-lg flex justify-between text-white align-center my-3">
                        <p>{{ accord.title }}</p>
                        <font-awesome-icon icon="fa-solid fa-circle-chevron-down" />
                    </div>
                    <transition name="slide-fade">
                        <div class="accordion-content shadow p-5 h-32" v-show="index === openIndex">
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
                content: 'We are passionate about what we do, and its this enthusiasm that fuels our dedication to continuously improve and innovate. Our passion shines through in every service we provide.',
                open: false
            },
            {
                title: 'Excellence',
                content: 'We take pride in our work and aim to exceed expectations in every interaction.',
                open: false
            },
            {
                title: 'Quality Service',
                content: 'We are dedicated to delivering services that meet or exceed industry standards. We focus on consistency, attention to detail, and customer satisfaction to ensure that every service we provide is of the highest quality.',
                open: false
            },
            {
                title: 'Team Work',
                content: 'We believe that collaboration, open communication, and mutual support lead to success. Together, we harness the collective strengths and expertise of our team to provide the best possible service to our clients.',
                open: false
            },
            {
                title: 'Transparency',
                content: 'We believe in open and honest communication at all stages of our service delivery. We provide clear information, maintain integrity, and keep our clients informed, ensuring transparency in all our interactions.',
                open: false
            },
            {
                title: 'Influence',
                content: 'We recognize that our actions and decisions can shape the experiences of our clients and communities. We aim to inspire and lead by example, encouraging positive change and fostering trust in the services we provide.',
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
  