<template>
  <div class="blog">
    <div class="blog-container">
        <h3 class="blog-title">Latest from Our Blog</h3>
        <div class="blog-posts">
            <div class="post">
                <img src="../../assets/images/Rectangle 124.png" alt="blog-image" class="blog-img">
                <div class="blog-content">
                    <p class="blog-post-date">June 2023</p>
                    <h4 class="blog-post-title">
                        Visual Story Telling: Enhancing USer Engagement
                    </h4>
                    <p class="blog-post-text">
                        Visual elements play a pivotal role in captivating website visitors. This post can delve into the impact of visual storytelling techniques in tech website design.  Explore the use of high-quality images, videos, and infographics to convey complex concepts in an engaging and accessible manner, thereby enhancing user engagement.
                    </p>
                    <router-link to="/blog" class="action"><span>Read More</span><font-awesome-icon class="icon" icon = "fa-solid fa-arrow-right" /></router-link>
                </div>
            </div>

            <div class="post">
                <img src="../../assets/images/Rectangle 124 (1).png" alt="blog-image" class="blog-img">
                <div class="blog-content">
                    <p class="blog-post-date">June 2023</p>
                    <h4 class="blog-post-title">
                        The Power of Simplicity: Streamlining User Experience
                    </h4>
                    <p class="blog-post-text">
                        In this blog post, explore the importance of simplicity in tech website design. Discuss how cluttered interfaces can confuse and overwhelm users, leading to increased bounce rates. Highlight the benefits of clean, minimalist designs that prioritize intuitive navigation and clear calls-to-action.
                    </p>
                    <router-link to="/blog" class="action"><span>Read More</span><font-awesome-icon class="icon" icon = "fa-solid fa-arrow-right" /></router-link>
                </div>
            </div>

            <div class="post">
                <img src="../../assets/images/Rectangle 124 (2).png" alt="blog-image" class="blog-img">
                <div class="blog-content">
                    <p class="blog-post-date">June 2023</p>
                    <h4 class="blog-post-title">
                        Seamless Integration: The Art of UX/UI Harmony
                    </h4>
                    <p class="blog-post-text">
                        A successful tech website design requires the seamless integration of user experience (UX) and user interface (UI) principles. Explore the interplay between UX and UI, emphasizing the need for consistency, visual hierarchy, and intuitive interactions. Provide practical tips for achieving harmony between UX and UI elements to create a delightful user experience.
                    </p>
                    <router-link to="/blog" class="action"><span>Read More</span><font-awesome-icon class="icon" icon = "fa-solid fa-arrow-right" /></router-link>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "BlogComponent"
}
</script>

<style scoped>
    .blog{
        margin:auto 0;
        background: rgb(250, 246, 246);
        padding: 2rem 0;
    }
    .blog-container{
        width: 90%;
        margin: 10px auto;
    }
    .blog-title{
        font-size: 2.5rem;
        text-align: center;
        margin: 20px auto;
        font-weight: 700;
    }
    .blog-posts{
        display:flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
    }
    .post{
        padding: 10px;
    }
    .blog-img{
        width: 100%;
        box-shadow: 0 0 15px 2px rgb(205, 201, 201);
    }
    .blog-post-date{
        margin:5px auto;
        font-size:0.8rem;
    }
    .blog-post-title{
        margin: 5px auto;
        color: #2A328D;
        font-weight: 700;
        font-size: 1.2rem;
    }
    .blog-post-text{
        margin: 5px auto;
        font-size: 1rem;
    }
    .action{
        display: flex;
        /* justify-content: center; */
        align-items: center;
        color: #2A328D;
        font-size: 0.8rem;
    }

    @media screen and (max-width:1000px) {
        .blog-posts{
            flex-flow: column wrap;
        }
        .blog-title{
            font-size: 2rem;
        }
    }
    @media screen and (max-width:500px) {
        .blog-title{
            font-size:1.4rem;        }
    }
</style>