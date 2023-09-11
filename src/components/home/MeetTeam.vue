<template>
  <div class="team">
    <div class="team-container">
        <h3 class="team-head">Meet the <span class="team-style">Team</span></h3>
        <div class="teams">
            <div class="member">
                <img class="member-pix" src="../../assets/images/CEO.png" alt="CEO image">
                <h3 class="member-id">Mfoniso Fabian</h3>
                <p class="member-role">Founder / CEO</p>
                <div class="underline"></div>
                <p class="member-description">
                    Software/Web Developer
                </p>
                <div class="member-social">
                    <font-awesome-icon class="icon" icon="fa-brands fa-facebook"/>
                    <font-awesome-icon class="icon" icon="fa-brands fa-linkedin"/>
                    <font-awesome-icon class="icon" icon="fa-brands fa-twitter"/>
                    <font-awesome-icon class="icon" icon="fa-brands fa-instagram"/>
                    <font-awesome-icon class="icon" icon="fa-brands fa-whatsapp"/>
                </div>
            </div>

            <div class="member">
                <img class="member-pix" src="../../assets/images/CTO.png" alt="CTO image">
                <h3 class="member-id">Mfon Usoro</h3>
                <p class="member-role">Co-Founder / CTO</p>
                <div class="underline"></div>
                <p class="member-description">
                   Brand/Product Designer
                </p>
                <div class="member-social">
                    <font-awesome-icon class="icon" icon="fa-brands fa-facebook"/>
                    <font-awesome-icon class="icon" icon="fa-brands fa-linkedin"/>
                    <font-awesome-icon class="icon" icon="fa-brands fa-twitter"/>
                    <font-awesome-icon class="icon" icon="fa-brands fa-instagram"/>
                    <font-awesome-icon class="icon" icon="fa-brands fa-whatsapp"/>
                </div>
            </div>

            <div class="member">
                <img class="member-pix" src="../../assets/images/COO.png" alt="COO image">
                <h3 class="member-id">Nsikak Edem</h3>
                <p class="member-role">COO</p>
                <div class="underline"></div>
                <p class="member-description">
                    Data Analyst 
                </p>
                <div class="member-social">
                    <font-awesome-icon class="icon" icon="fa-brands fa-facebook"/>
                    <font-awesome-icon class="icon" icon="fa-brands fa-linkedin"/>
                    <font-awesome-icon class="icon" icon="fa-brands fa-twitter"/>
                    <font-awesome-icon class="icon" icon="fa-brands fa-instagram"/>
                    <font-awesome-icon class="icon" icon="fa-brands fa-whatsapp"/>
                </div>
            </div>

            <div class="member">
                <img class="member-pix" src="../../assets/images/CFO.png" alt="CFO image">
                <h3 class="member-id">Lord Wilson</h3>
                <p class="member-role">CFO</p>
                <div class="underline"></div>
                <p class="member-description">
                    Financial Analyst
                </p>
                <div class="member-social">
                    <font-awesome-icon class="icon" icon="fa-brands fa-facebook"/>
                    <font-awesome-icon class="icon" icon="fa-brands fa-linkedin"/>
                    <font-awesome-icon class="icon" icon="fa-brands fa-twitter"/>
                    <font-awesome-icon class="icon" icon="fa-brands fa-instagram"/>
                    <font-awesome-icon class="icon" icon="fa-brands fa-whatsapp"/>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"MeetTeam"
}
</script>

<style scoped>
    .team{
        background: #353535;
        padding: 2rem 0;
    }
    .team-head{
        color: #fff;
        font-size: 3rem;
        padding: 10px;
        margin: 4rem auto;
    }
    .team-style{
        color: #5CEAF3;
    }
    .team-container{
        width: 90%;
        margin: 10px auto;
        text-align: center;
    }
    .teams{
        display: flex;
        gap: 50px;
        justify-content: center;
        align-items: center;
    }
    .member{
        background: #fff;
        padding: 10px;
        border-radius: 20px;
        width: 20%;
    }
    .member-pix{
        border-radius: 50%;
        border: 4px solid #5CEAF3;
        margin: 5px auto;
        width: 50%;
    }
    .member-id{
        font-size: 1.2rem;
        font-weight: 700;
        color:#2A328D;
        margin: 5px auto;
    }
    .member-description{
        font-size: 0.8rem;
    }
    .underline{
        height: 4px;
        width: 20%;
        background: #5CEAF3;
        margin: 5px auto;
        border-radius: 10px;
    }
    .member-social{
        margin: 10px auto;
    }

    @media screen and (max-width:1000px){
        .teams{
            flex-direction: column;
        }
        .team-head{
            font-size: 2.5rem;
            margin: 2rem auto;
        }
        .member{
            width: 100%;
            margin-bottom:30px;
        }
    }

    @media screen and (max-width:500px){
        .team-head{
            font-size: 2rem;
            margin:2rem auto;
        }
        .member-description{
            font-size: small;
        }
    }
</style>