<template>
  <!-- Start Landing Page -->
  <div class="landing-page" :style="{ backgroundImage: backgroundImageUrl }">
    <div class="overlay"></div>
    <div class="container">
      <div class="header-area">
        <div class="logo">Special Design</div>
        <div class="links-container">
          <ul
            class="links"
            :class="{ open: openMenu }"
            @click.stop="stopPropagation"
          >
            <li><a href="#" data-section=".about-us">About</a></li>
            <li><a href="#" data-section=".skills">Skills</a></li>
            <li><a href="#" data-section=".gallery">Gallery</a></li>
            <li><a href="#" data-section=".timeline">Timeline</a></li>
            <li><a href="#" data-section=".features">Features</a></li>
            <li><a href="#" data-section=".testimonials">Testimonials</a></li>
          </ul>
          <button class="toggle-menu" @click.stop="toggleMenu">
            <span :class="{ menuActive: openMenu }"></span>
            <span :class="{ menuActive: openMenu }"></span>
            <span :class="{ menuActive: openMenu }"></span>
          </button>
        </div>
      </div>
    </div>
    <div class="introduction-text">
      <h1>We Are <span>Graphic Designer</span></h1>
      <p>Let's Get Started! Make your ideas a reality!</p>
      <p>Join Us On This Creative Journey And Discover What You Can Achieve.</p>
    </div>
  </div>
  <!-- End Landing Page -->
</template>

<style lang="scss">
.landing-page {
  min-height: 100vh;
  background-size: cover;
  position: relative;
  transition: 0.5s;
  .overlay {
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .container {
    position: relative;
    z-index: 999;
    .header-area {
      min-height: 70px;
      display: flex;
      color: white;
      padding: 10px;
      align-items: center;
      justify-content: space-between;
      position: relative;

      .logo {
        width: 300px;
        padding: 15px;
        font-weight: bold;
      }
      .links-container {
        display: flex;
        align-items: center;
        .links {
          display: flex;
          gap: 15px;
          & a {
            display: block;
            color: #eee;
            text-decoration: none;
            font-size: 16px;
            transition: 0.3s;
          }
          & a:hover {
            color: var(--main-color);
          }
        }
        @media (max-width: 991px) {
          .links {
            display: none;
          }
        }
        .links.open {
          background-color: #fff;
          padding: 10px;
          display: block;
          position: absolute;
          left: 0;
          top: 50px;
          width: 100%;
          border-radius: 4px;
          text-align: left;
          & li {
            display: block;
            margin: 10px;
            line-height: 30px;
            transition: 0.3s;
          }
          & li:hover {
            padding-left: 10px;
          }
          & li a {
            color: var(--main-color);
            font-weight: bold;
          }
        }
        .toggle-menu {
          background: none;
          border: none;
          width: 40px;
          flex-wrap: wrap;
          justify-content: flex-end;
          cursor: pointer;
          position: relative;
          display: none;
          & span {
            width: 100%;
            background-color: #fff;
            margin-bottom: 5px;
            height: 2px;
          }
          & span:nth-child(2) {
            width: 60%;
            transition: 0.3s;
          }
          & span:nth-child(2).active {
            width: 100%;
          }
        }
        .toggle-menu.menu-active:before {
          content: "";
          border-width: 10px;
          border-style: solid;
          border-color: transparent transparent #fff transparent;
          position: absolute;
          bottom: -21px;
          left: 10px;
        }

        .toggle-menu:hover span:nth-child(2) {
          width: 100%;
        }
        @media (max-width: 991px) {
          .toggle-menu {
            display: flex;
          }
        }
      }
    }
  }

  .introduction-text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    color: #fff;
    text-align: center;
    width: 95%;
    & h1 {
      font-size: 34px;
      margin: 0 0 12px;
      & span {
        color: var(--main-color);
      }
    }
    & p {
      line-height: 1.6;
      font-size: 20px;
      margin: 0;
    }
  }
}
</style>
<script>
export default {
  props: ["propsBackgroundOption"],
  components: {},
  data() {
    return {
      imgsArray: [
        "01.jpg",
        "02.jpg",
        "03.jpg",
        "04.jpg",
        "07.jpg",
        "09.jpg",
        "10.jpg",
      ],
      backgroundImageUrl: "",
      backgroundOption: true,
      backgroundInterval: "",
      //check if there's local storage random background item
      backgroundLocalItem: localStorage.getItem("background_option"),
      openMenu: false,
    };
  },
  watch: {
    propsBackgroundOption(newVal) {
      this.toggleChangeBackgroundImage(newVal);
      console.log("newVal", newVal);
    },
  },
  methods: {
    // check  if random background  local storage  is not empty
    checkRandomBackgroundLocal() {
      if (this.backgroundLocalItem !== null) {
        if (this.backgroundLocalItem == "true") {
          this.backgroundOption = true;
        } else {
          this.backgroundOption = false;
        }
      }
      localStorage.getItem("background_option");
    },
    changeBackgroundImage() {
      const randomIndex = Math.floor(Math.random() * this.imgsArray.length);
      const selectedImage = this.imgsArray[randomIndex];
      // random imgsArray
      if (this.backgroundOption == true) {
        this.backgroundInterval = setInterval(() => {
          const randomIndex = Math.floor(Math.random() * this.imgsArray.length);
          const selectedImage = this.imgsArray[randomIndex];
          this.backgroundImageUrl = `url('./images/${selectedImage}')`;
        }, 1000);
      } else {
        this.backgroundImageUrl = `url('./images/${selectedImage}')`;
      }
    },

    toggleChangeBackgroundImage(data) {
      // console.log("data", typeof data);
      this.backgroundOption = data;
      if (this.backgroundOption == false) {
        clearInterval(this.backgroundInterval);
      } else {
        this.changeBackgroundImage();
      }
    },
    scrollToLink(elements) {
      elements.forEach((element) => {
        element.addEventListener("click", (e) => {
          e.preventDefault();
          document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: "smooth",
          });
          console.log("Section", e.target.dataset.section);
        });
      });
    },
  },
  mounted() {
    this.checkRandomBackgroundLocal();
    this.changeBackgroundImage();
    const allBullets = document.querySelectorAll(".nav-bullets .bullet");
    this.scrollToLink(allBullets);
  },
};
</script>
