<template>
  <div class="features">
    <h2 class="main-heading">Services</h2>
    <div class="container">
      <div class="feat-box" v-for="feature in features" :key="feature.name">
        <img :src="feature.images" alt="" />
        <h4>{{ feature.name }}</h4>
        <p>
          {{ feature.paragraphs }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      features: [
        {
          name: "Website Design & Development",
          images: "images/programming.svg",
          paragraphs:
            "Our team can develop the website within the schedule and with the best quality, which made the customer trust us.",
        },
        {
          name: "Mobile App Development",
          images: "images/smartphone.svg",
          paragraphs:
            "Our mobile app development team makes sure to stay at top technology, making sure to build applications with customer centric to focus the vision in short period of time.",
        },
        {
          name: "E-Commerce Development",
          images: "images/shopping.png",
          paragraphs:
            "Our team Makes you to play with the console, you can stay at the top of your products, purchases, and prices at one go, even control your inventory in single click.",
        },
        {
          name: "Domain & Hosting",
          images: "images/domain-hosting-img.png",
          paragraphs:
            "We Provide world class control on your web hosting where you be able manage local hosted servers in Abu dhabi.",
        },
        {
          name: "Digital Marketing",
          images: "images/digital_marketing.png",
          paragraphs:
            "Allowing you to make faster and better business decisions. Access your most regular data wherever required, and with-in real-time.",
        },
        {
          name: "SEO / SMO",
          images: "images/seo.png",
          paragraphs:
            "Reach your ideal customers Ranks on the world's largest professional network. Lets people find you on top.",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.features {
  padding-top: 50px;
  padding-bottom: 50px;
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
    .feat-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-bottom: 40px;
      & img {
        width: 96px;
      }
      & h4 {
        font-size: 22px;
        margin: 15px 0 40px;
        position: relative;
      }
      & h4::before {
        content: "";
        width: 40px;
        height: 4px;
        background-color: var(--main-color);
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -22px;
      }
      & p {
        width: 80%;
        margin: 0 auto;
        line-height: 1.7;
        color: #706f6f;
      }
    }
  }
  @media (max-width: 767px) {
    .container {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
}
</style>
