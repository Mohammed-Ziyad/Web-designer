<template>
  <div class="gallery">
    <div class="container">
      <h2 class="main-heading">Our Gallery</h2>
      <div class="images-box">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image.src"
          :alt="image.alt"
          @click="openPopup(image)"
        />
      </div>
    </div>

    <div v-if="showPopup" class="popup-overlay" @click="closePopup">
      <div class="popup-box" @click.stop>
        <h3 v-if="currentImage.alt">{{ currentImage.alt }}</h3>
        <img :src="currentImage.src" />
        <p v-if="currentImage.des">{{ currentImage.des }}</p>
        <span class="close-button" @click="closePopup">X</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src: "images/Gallery/p1.png",
          alt: "My Profile",
          des: "My profile: I worked on it using the Vue JS framework. It contains an introduction about me and displays my skills and experiences in the web.",
        },
        {
          src: "images/Gallery/p2.png",
          alt: "Login Page",
          des: "An attractive login page that fits with different sites",
        },
        {
          src: "images/Gallery/p3.png",
          alt: "This Project",
          des: "The personal page you are currently browsing is built with the Vue JS framework. It has been created in an attractive manner, with color control and smooth navigation.",
        },
        {
          src: "images/Gallery/p4.png",
          alt: "E-Commerce",
          des: "E-Commerce: I created it using the  Angular framework, which is an online store that works smoothly to display different products",
        },
        { src: "images/Gallery/p5.png", alt: "Image Five" },
        {
          src: "images/Gallery/p6.png",
          alt: "The Bequest Project",
          des: "The Bequest Project: One of the projects that I did while working at Smart Mind Company, and my task was to design interfaces using the Angular framework and display data coming from the API.",
        },
        { src: "images/Gallery/p7.png", alt: "Image Seven" },
        { src: "images/Gallery/p8.png", alt: "Image Eight" },
        { src: "images/Gallery/p9.png", alt: "Image Nine" },
        { src: "images/Gallery/p8.png", alt: "Image Ten" },
      ],
      showPopup: false,
      currentImage: {},
    };
  },
  methods: {
    openPopup(image) {
      this.currentImage = image;
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    },
  },
};
</script>

<style scoped>
/* gallery */

.gallery {
  padding-top: 50px;
  padding-bottom: 50px;
}

.gallery .images-box {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
}

.gallery .images-box img {
  max-width: 100%;
  padding: 3px;
  background-color: #f6f6f6;
  border: 1px solid #ccc;
  cursor: pointer;
}

.popup-overlay {
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1001;
}
.popup-box {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 20px;
  z-index: 1002;
}
.popup-box img {
  max-width: 100%;
}
@media (min-width: 992px) {
  /* Large Screens */
  .popup-box img {
    max-width: 100vh;
  }
}
@media (min-width: 1200px) {
  /* Large Screens */
  .popup-box img {
    max-width: 125vh;
  }
}
.popup-box h3 {
  font-weight: bold;
  text-align: center;
  margin: 0 0 20px;
  color: var(--main-color);
}
.popup-box p {
  color: #666;
  margin: 0;
  line-height: 1.6;
}
.close-button {
  position: absolute;
  top: -15px;
  right: -15px;
  background-color: var(--main-color);
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 40px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  font-family: Arial, Tahoma;
  border-radius: 50%;
}
@media (max-width: 767px) {
  .close-button {
    width: 30px;
    height: 30px;
    font-size: 15px;
  }
}

@media (max-width: 767px) {
  .popup-box {
    width: 90%;
  }
}
</style>
