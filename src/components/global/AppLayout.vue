<template>
  <div class="layout">
    <NavBullets :propsBulletContainer="bulletContainer" />
    <app-navbar :propsBackgroundOption="backgroundOption" />
    <SettingsBox
      @turnOfRandomBackground="emitChangeBackgroundImage($event)"
      @showOrHideBullet="emitChangeBullets($event)"
    />

    <MySkills />
    <OurGallery />
    <TimeLineComponent />
    <OurFeatures />
    <ContactUs />
  </div>
</template>
<script>
import AppNavbar from "./AppNavbar.vue";
import SettingsBox from "./SettingsBox.vue";
import NavBullets from "./NavBullets.vue";
import MySkills from "../MySkills.vue";
import OurGallery from "../OurGallery.vue";
import TimeLineComponent from "../TimeLineComponent.vue";
import OurFeatures from "../OurFeatures.vue";
import ContactUs from "../ContactUs.vue";
export default {
  components: {
    AppNavbar,
    SettingsBox,
    NavBullets,
    MySkills,
    OurGallery,
    TimeLineComponent,
    OurFeatures,
    ContactUs,
  },
  data() {
    return {
      backgroundOption: "true",
      bulletContainer: "true",
    };
  },

  methods: {
    emitChangeBackgroundImage(option) {
      // this.$emit("turnOfRandomBackgroundD", option);
      // console.log("toggleChangeBackgroundImage ", option);
      this.backgroundOption = option;
    },
    emitChangeBullets(option) {
      this.bulletContainer = option;
      // console.log("bulletContainer", typeof option);
    },
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
