<template>
  <!-- Start Testimonials -->
  <div class="testimonials">
    <div class="container">
      <h2>Testimonials</h2>
      <div class="ts-boxes">
        <div class="ts-box">
          <p>
            Iam very happy with the product its amazing and i recieve it very
            fast and the price was amazing.
          </p>
          <div class="person-info">
            <img src="https://placehold.it/80/DDD" alt="" />
            <div class="content">
              <h4>Ahmed Mosaad</h4>
              <p>CEO At Company</p>
            </div>
          </div>
        </div>
        <div class="ts-box">
          <p>
            Iam very happy with the product its amazing and i recieve it very
            fast and the price was amazing.
          </p>
          <div class="person-info">
            <img src="https://placehold.it/80/EEE" alt="" />
            <div class="content">
              <h4>Mohamed Ibrahim</h4>
              <p>CEO At Company</p>
            </div>
          </div>
        </div>
        <div class="ts-box">
          <p>
            Iam very happy with the product its amazing and i recieve it very
            fast and the price was amazing.
          </p>
          <div class="person-info">
            <img src="https://placehold.it/80/AAA" alt="" />
            <div class="content">
              <h4>Sherief Ashraf</h4>
              <p>CEO At Company</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Testimonials -->
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.testimonials {
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;
  & h2 {
    font-weight: bold;
    font-size: 30px;
    color: #fff;
    margin: 0 0 30px;
    text-align: left;
    position: relative;
    width: 100%;
    z-index: 2;
  }
  .ts-boxes {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 10px;
    z-index: 2;
    position: relative;
    .ts-box {
      background-color: #fff;
      padding: 20px;
      & p {
        margin: 0 0 20px;
        line-height: 1.5;
        font-size: 15px;
        color: #707070;
        font-style: italic;
      }
      .person-info {
        display: flex;
        text-align: center;
        & img {
          border-radius: 50%;
          margin-right: 20px;
          width: 80px;
          height: 80px;
        }
        @media (max-width: 767px) {
          & img {
            margin: 0 auto;
          }
        }
        & div {
          flex: 1;
          text-align: left;
          & h4 {
            margin: 14px 0 10px;
          }
          & p {
            color: #707070;
            margin: 0;
          }
        }
      }
      @media (max-width: 767px) {
        .person-info {
          flex-direction: column;
          width: fit-content;
          margin: 0 auto;
        }
      }
    }
  }
  @media (max-width: 767px) {
    .ts-boxes {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
}

.testimonials::before {
  content: "";
  width: 50%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: var(--main-color);
  height: 100%;
}
.testimonials::after {
  content: "";
  width: 50%;
  position: absolute;
  right: 0;
  top: 0;
  background-color: #333;
  height: 100%;
}
</style>
