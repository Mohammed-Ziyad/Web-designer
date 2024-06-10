<template>
  <!-- Start Nav Bullets -->
  <div class="nav-bullets" v-if="bulletContainer">
    <div class="bullet" data-section=".about-us">
      <div class="tooltip">About Us</div>
    </div>
    <div class="bullet" data-section=".skills">
      <div class="tooltip">Our Skills</div>
    </div>
    <div class="bullet" data-section=".gallery">
      <div class="tooltip">Our Gallery</div>
    </div>
    <div class="bullet" data-section=".timeline">
      <div class="tooltip">Timeline</div>
    </div>
    <div class="bullet" data-section=".features">
      <div class="tooltip">Features</div>
    </div>
    <div class="bullet" data-section=".testimonials">
      <div class="tooltip">Testimonials</div>
    </div>
  </div>

  <!-- End Nav Bullets -->
</template>
<script>
export default {
  props: ["propsBulletContainer"],
  data() {
    return {
      bulletContainer: true,
      bulletLocalItem: localStorage.getItem("bullets_option"),
    };
  },
  watch: {
    propsBulletContainer(newVal) {
      // this.bulletLocalItem = localStorage.getItem("bullets_option");

      this.showOrHideBullets(newVal);
    },
  },
  methods: {
    showOrHideBullets(data) {
      if (data == true) {
        this.bulletContainer = true;
        // console.log(this.bulletLocalItem);
      } else {
        this.bulletContainer = false;
        // console.log(this.bulletLocalItem);
      }
    },
    checkBulletsLocal() {
      if (this.bulletLocalItem !== null) {
        if (this.bulletLocalItem == "true") {
          this.bulletContainer = true;
        } else {
          this.bulletContainer = false;
        }
      }
    },
    scrollToLink(elements) {
      elements.forEach((element) => {
        element.addEventListener("click", (e) => {
          e.preventDefault();
          document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: "smooth",
          });
        });
      });
    },
  },
  mounted() {
    this.checkBulletsLocal();
    const allLinks = document.querySelectorAll(".links a");
    const allBullets = document.querySelectorAll(".nav-bullets .bullet");
    this.scrollToLink(allBullets);
    this.scrollToLink(allLinks);
  },
};
</script>
<style lang="scss">
.nav-bullets {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  z-index: 1000;
  .bullet {
    width: 20px;
    height: 20px;
    border: 3px solid var(--main-color);
    margin: 20px auto;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    .tooltip {
      background-color: var(--main-color);
      width: 120px;
      color: #fff;
      padding: 8px 10px;
      position: absolute;
      right: 32px;
      top: -10px;
      text-align: center;
      cursor: default;
      pointer-events: none;
      display: none;
    }
    .tooltip::before {
      content: "";
      border-style: solid;
      border-width: 10px;
      border-color: transparent transparent transparent var(--main-color);
      height: 0;
      width: 0;
      position: absolute;
      right: -19px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .bullet:hover .tooltip {
    display: block;
  }
}
</style>
