<template>
  <div class="features">
    <h2 class="main-heading">Our Features</h2>
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
          name: "Development",
          images: "images/programming.svg",
          paragraphs:
            "We are professional marketeers, we will do anything you imagine in no time.",
        },
        {
          name: "Marketing",
          images: "images/advertising.svg",
          paragraphs:
            " We are professional marketeers, we will do anything you imagine in no time.",
        },
        {
          name: "Hosting",
          images: "images/hosting-icon.svg",
          paragraphs:
            "We are professional marketeers, we will do anything you imagine in no time.",
        },
        {
          name: "Mobile Develope",
          images: "images/mobile-app.svg",
          paragraphs:
            "We are professional marketeers, we will do anything you imagine in no time.",
        },
        {
          name: "Cloud and Servers",
          images: "images/graphic-design.svg",
          paragraphs:
            "We are professional marketeers, we will do anything you imagine in no time.",
        },
        {
          name: "Seo",
          images: "images/web-design.svg",
          paragraphs:
            "We are professional marketeers, we will do anything you imagine in no time.",
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
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
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
