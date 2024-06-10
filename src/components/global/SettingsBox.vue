<template>
  <div class="settings-box" :class="{ open: isOpen }">
    <div class="toggle-settings" @click="toggleSettings">
      <i class="" :class="{ 'text-danger': isOpen }">
        <font-awesome-icon
          icon="fa-solid fa-gear"
          :class="{ 'fa-spin': isSpinning }"
        />
      </i>
    </div>
    <div class="settings-container">
      <div class="option-box">
        <h4>Colors</h4>
        <ul class="colors-list">
          <li
            v-for="color in colors"
            :key="color"
            :class="{ active: currentColor === color }"
            :data-color="color"
            @click="changeColor(color)"
          ></li>
        </ul>
      </div>
      <div class="option-box">
        <h4>Random Backgrounds</h4>
        <div class="random-backgrounds">
          <span
            class="yes"
            :class="{ active: randomBackground === true }"
            data-background="yes"
            @click="toggleBackground(true)"
            >Yes</span
          >
          <span
            class="no"
            :class="{ active: randomBackground === false }"
            data-background="no"
            @click="toggleBackground(false)"
            >No</span
          >
        </div>
      </div>
      <div class="option-box">
        <h4>Show Bullets</h4>
        <div class="bullets-option">
          <span
            class="yes"
            :class="{ active: showBullets === 'block' }"
            data-display="show"
            @click="toggleBullets('block')"
            >Yes</span
          >
          <span
            class="no"
            :class="{ active: showBullets === 'none' }"
            data-display="hide"
            @click="toggleBullets('none')"
            >No</span
          >
        </div>
      </div>
      <button class="reset-options" @click="resetOptions">Reset Options</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentColor: "#FF9800",
      colors: ["#FF9800", "#E91E63", "#009688", "#03A9F4", "#4CAF50"],
      randomBackground: true,
      showBullets: "block",
      isOpen: false,
      isSpinning: false,
      mainColor: localStorage.getItem("color_option"),
    };
  },
  methods: {
    // open the settings and work round for it
    toggleSettings() {
      this.isOpen = !this.isOpen;
      this.isSpinning = !this.isSpinning;
    },
    // Remove Active Class From All Spans and button
    removeActiveClass() {
      if (localStorage.getItem("color_option") !== null) {
        this.currentColor = localStorage.getItem("color_option");
      }

      // remove active class for backgroundColor
      if (localStorage.getItem("background_option") !== null) {
        if (localStorage.getItem("background_option") == "true") {
          this.randomBackground = true;
          console.log("random", this.randomBackground);
        } else {
          this.randomBackground = false;
          console.log("random", this.randomBackground);
        }
        console.log(localStorage.getItem("background_option"));
      }
      // remove active class for bullets

      // console.log("random", localStorage.getItem("background_option"));
      if (localStorage.getItem("bullets_option") !== null) {
        if (localStorage.getItem("bullets_option") === "true") {
          this.showBullets = "block";
        } else {
          this.showBullets = "none";
        }
      }
    },
    changeColorLocalStorage() {
      // console.log("main color", this.mainColor);
      if (this.mainColor !== null) {
        document.documentElement.style.setProperty(
          "--main-color",
          localStorage.getItem("color_option")
        );
        // Remove  Active Class Form All Color List items
      }
    },

    // change Color the main color
    changeColor(color) {
      this.currentColor = color;
      document.documentElement.style.setProperty("--main-color", color);
      // add the color for localStorage
      localStorage.setItem("color_option", color);
      console.log(localStorage.getItem("color_option"));
    },
    // change Background
    toggleBackground(option) {
      this.randomBackground = option;
      if (this.randomBackground === true) {
        localStorage.setItem("background_option", true);
        this.$emit("turnOfRandomBackground", true);
      } else {
        this.$emit("turnOfRandomBackground", false);
        localStorage.setItem("background_option", false);
      }
      // console.log('random background storage setting', localStorage.getItem("background_option"));
    },
    toggleBullets(option) {
      this.showBullets = option;
      if (this.showBullets === "block") {
        localStorage.setItem("bullets_option", "true");
        this.$emit("showOrHideBullet", true);
        // console.log(localStorage.getItem("bullets_option"));
      } else {
        localStorage.setItem("bullets_option", "false");
        this.$emit("showOrHideBullet", false);
        // console.log(localStorage.getItem("bullets_option"));
      }
    },
    resetOptions() {
      this.currentColor = "#FF9800";
      this.randomBackground = true;
      this.showBullets = "block";
      document.documentElement.style.setProperty("--main-color", "#FF9800");
      localStorage.setItem("color_option", "#FF9800");
    },
  },

  mounted() {
    this.changeColorLocalStorage();
    this.removeActiveClass();
  },
};
</script>
<style lang="scss" scoped>
.settings-box {
  min-height: 100vh;
  position: fixed;
  background-color: #fff;
  top: 0;
  left: -200px;
  width: 200px;
  z-index: 1050;
  transition: 0.3s;
  border: 1px solid #eee;
  .toggle-settings {
    position: absolute;
    right: -30px;
    top: 100px;
    background-color: #fff;
    text-align: center;
    cursor: pointer;
    .fa-gear {
      width: 30px;
      padding: 8px 0;
    }
  }
  .option-box {
    padding: 10px;
    text-align: center;
    background-color: #eee;
    margin: 10px;
    & h4 {
      margin: 0;
      color: #666;
      font-size: 14px;
    }
    .random-backgrounds,
    .bullets-option {
      .yes,
      .no {
        width: 50px;
        background-color: var(--main-color);
        color: #fff;
        margin-top: 10px;
        display: inline-flex;
        justify-content: center;
        font-size: 12px;
        padding: 4px 10px;
        font-weight: bold;
        border-radius: 4px;
        opacity: 0.5;
        cursor: pointer;
      }
      & span.active {
        opacity: 1;
      }
    }
    .colors-list {
      list-style: none;
      text-align: center;
      padding: 0;
      margin: 10px 0 0;
      & li {
        width: 24px;
        height: 24px;
        background-color: #333;
        border-radius: 50%;
        cursor: pointer;
        display: inline-block;
        border: 3px solid #eee;
        opacity: 0.5;
      }
      & li:first-child {
        background-color: #ff9800;
      }
      & li.active {
        border-color: #fff;
        opacity: 1;
      }
      & li:nth-child(2) {
        background-color: #e91e63;
      }
      & li:nth-child(3) {
        background-color: #009688;
      }
      & li:nth-child(4) {
        background-color: #03a9f4;
      }
      & li:nth-child(5) {
        background-color: #4caf50;
      }
    }
  }
  .reset-options {
    background-color: #f44336;
    border: none;
    width: 178px;
    margin: 10px auto;
    display: block;
    color: #fff;
    font-weight: bold;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
  }
}

.settings-box.open {
  left: 0;
}
</style>
