<template>
  <!-- Start About Us -->
  <div class="about-us">
    <div class="container">
      <div class="info-box">
        <h2 class="main-heading wow bounceInDown">About Us</h2>
        <!--About section  -->
        <div class="about-sc wow fadeInLeftBig">
          <div class="section-title mb-4">
            <div class="title-effect">
              <div class="bar bar-top"></div>
              <div class="bar bar-right"></div>
              <div class="bar bar-bottom"></div>
              <div class="bar bar-left"></div>
            </div>
            <!-- <h2>We're Building Modern And High Software</h2> -->
          </div>
          <ul class="list-unstyled list-icon mb-4">
            <li class="mb-1"><h2>Vision</h2></li>
            <li class="mb-3">
              To be a leading provider for high quality, affordable and
              innovative solutions in the middle east.
            </li>
            <li class="mb-1"><h2>Mission</h2></li>
            <li class="mb-3">
              Establish a strategic collaboration between our talented team and
              our clients to boost their growth by equipping them with high-end
              software solutions .
            </li>
            <li class="mb-1">
              <h2>Goals</h2>
            </li>
            <li class=".text-Goals">
              <font-awesome-icon
                class="la la-check"
                icon=" fa-check"
                :class="{ 'fa-spin': isSpinning }"
              />To reach a customer satisfaction rate of +95% by end of 2022.
            </li>
            <li class="mb-3">
              <font-awesome-icon
                class="la la-check"
                icon=" fa-check"
                :class="{ 'fa-spin': isSpinning }"
              />
              Expand our scope to serve two additional countries by end of 2022.
            </li>
            <li class="mb-3">
              <font-awesome-icon
                class="la la-check"
                icon=" fa-check"
                :class="{ 'fa-spin': isSpinning }"
              />To develop top adhered solutions to recognized quality standards
              in software development.
            </li>
          </ul>
        </div>
      </div>
      <div class="image-box wow fadeInRightBig">
        <img src="/images/animation.gif" alt="" />
      </div>
    </div>
  </div>
  <!-- End About Us -->
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about-us {
  padding-top: 50px;
  padding-bottom: 50px;
  .container {
    display: flex;
    & h2 {
      text-align: start;
      margin: 0 0 10px;
    }
    @media (max-width: 767px) {
      & h2 {
        text-align: center;
      }
    }
    .info-box {
      flex: 1;
      padding: 30px;
      & p {
        line-height: 1.8;
        color: #767676;
        margin: 0;
      }
    }
    @media (max-width: 767px) {
      .info-box {
        padding: 0;
      }
    }
    .image-box {
      flex: 1;
      text-align: center;
      margin: auto;
      & img {
        width: 350px;
        border-radius: 19px;
        box-shadow: 2px 7px 7px -4px;
      }
    }
  }
  @media (max-width: 767px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
  }
}
.about-sc {
  margin-left: auto !important;
  margin-bottom: 50px;
  position: relative;
}
.about-sc {
  margin-left: auto !important;
  margin-bottom: 50px;
  position: relative;
}
.about-sc .list-unstyled {
  margin-bottom: 1.5rem;
  padding-left: 0;
  list-style: none;
}
.about-sc .list-unstyled li {
  position: relative;
  padding-left: 30px;
  margin-bottom: 0.25rem !important;
}
.about-sc .list-unstyled {
  .text-Goals {
    position: relative;
    padding-left: 30px;
    margin-bottom: 1rem !important;
  }

  .la-check {
    position: absolute;
    left: 0;
    top: 0;
    color: var(--main-color);
    font-size: 22px;
    line-height: 20px;
    font-family: "Line Awesome Free";
    font-weight: 900;
  }
  .la,
  .lab,
  .lad,
  .lal,
  .lar,
  .las {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
  }
  .la-check:before {
    content: "\f00c";
  }
  .list-icon li i {
    position: absolute;
    left: 0;
    top: 0;
    color: var(--main-color);
    font-size: 22px;
    line-height: 20px;
  }
}

.btn::before {
  content: attr(data-text);
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: all 0.3s cubic-bezier(0.75, 0, 0.125, 1) 0s;
  width: 100%;
  padding: 12px 0;
}
.btn span {
  display: inline-block;
  opacity: 0;
  transform: translate3d(10, 10px, 0);
  transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
  transition: all 0.5s ease-in-out 0s;
}
@media (min-width: 992px) {
  .about-sc {
    margin-top: 0 !important;
  }
}
@media (min-width: 992px) {
  .about-sc {
    flex: 0 0 auto;
    width: 41.6666666667%;
  }
}
@media (min-width: 768px) {
  .about-sc {
    flex: 0 0 auto;
    width: 100%;
  }
}
</style>
