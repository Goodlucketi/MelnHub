<template>
  <div class="contact">
    <div class="contact-container">
        <div class="image">
            <img src="../../assets/images/Pexels Photo by Yan Krukau.png" alt="Contact Image" class="contact-img">
        </div>
        <div class="contact-form-container">
            <h3 class="form-title">Get in Touch</h3>
            <p class="form-desc">Have an enquiry? Fill out the form to contact our team</p>

            <form class="contact-form">
                <div class="name">
                    <p>Full Name</p>
                    <input type="text" name="fullname" id="fulname">
                </div>
                <div class="email">
                    <p>Email</p>
                    <input type="email" name="email" id="email">
                </div>
                <div class="message">
                    <p>Message</p>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Type Message Here"></textarea>
                </div>
                <div class="submit">
                    <input type="submit" value="Send Message">
                </div>
            </form>
        </div>
    </div>
    <div class="contact-team">
        <div class="contact-team-container">
            <p>Do you have a project or idea? Our team will help you as soon as possible.</p>
            <router-link to="/register" class="btn">Contact Our Team</router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "ContactUs"
}
</script>

<style scoped>
    .contact-container{
        width: 90%;
        margin: 20px auto 0;
        display: flex;
        gap: 20px;
        justify-content: space-between;
        align-items: center;
    }

    .image{
        width:50%;
    }
    .contact-form-container{
        width: 50%;
        padding:20px;
    }
    .form-title{
        font-size: 2rem;
        font-weight: 700;
    }
    .form-desc{
        font-size: 0.8rem;
    }
    .contact-form>div{
        margin: 50px auto;
    }

    .contact-form input, .contact-form textarea{
        padding: 15px;
        width: 100%;
        border-radius: 10px;
        border: 1px solid gray;
        
    }
    .contact-form input[type='submit']{
        width: 50%;
        background: #2A328D;
        color: #fff;
        border: none;
    }
    .contact-img{
        width:100%;
        object-fit: cover;
        object-position: top;
    }
    .contact-team{
        background: #F6F5FF;
        padding: 5px;
        position: relative;
    }
    .contact-team-container{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 90%;
        background: #fff;
        padding: 20px;
        margin: 10px auto;
        border-radius: 10px;
        position: relative;
        top: 50px;
        font-size: 0.8rem;
    }
    .btn{
        padding: 10px;
        border-radius: 10px;
        background: #2A328D;
        color: #fff;
    }

    @media screen and (max-width:1000px) {
        .contact-container{
            flex-flow: column wrap;
        }
        .contact-container>div{
            width: 100%;
        }
        .contact-img{
            object-fit: contain;
        }
        .contact-form>div{
            margin: 40px auto;
        }
        .contact-team-container{
            flex-flow: column wrap;
            gap: 20px;
            text-align: center;
        }
    }
    @media screen and (max-width:500px) {
        .contact-form>div{
            margin: 30px auto;
        }

    }

</style>