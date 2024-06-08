<template>
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        odit nihil ullam nesciunt quidem iste
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
