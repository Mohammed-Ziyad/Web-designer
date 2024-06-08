<template>
  <div class="contact">
    <div class="overlay"></div>
    <div class="container">
      <h2 class="main-heading">Contact Us</h2>
      <form action="">
        <div class="left">
          <input type="text" placeholder="Your Name" name="username" />
          <input type="text" placeholder="Your Phone" name="phone" />
          <input type="email" placeholder="Your Email" name="email" />
          <input type="text" placeholder="Subject" name="subject" />
        </div>
        <div class="right">
          <textarea name="message" placeholder="Your Message"></textarea>
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.contact {
  min-height: 600px;
  background-image: url(../../public/images/contact.png);
  background-size: cover;
  padding-top: 80px;
  padding-bottom: 80px;
  position: relative;
  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.6);
  }
  .container {
    position: relative;
    z-index: 2;
    & form {
      max-width: 800px;
      margin: auto;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(390px, 1fr));
      gap: 10px;
      .left {
        display: flex;
        flex-direction: column;
        & input {
          display: block;
          width: 100%;
          padding: 10px;
          margin-bottom: 15px;
          border: 1px solid #ccc;
          background-color: rgba(218, 218, 218, 0.19);
        }
        & input:focus {
          outline: 1px solid var(--main-color);
        }
        & input::placeholder {
          transition: 0.3s;
        }
        & input:focus::placeholder {
          opacity: 0;
        }
      }
      .right {
        display: flex;
        flex-direction: column;
        & textarea {
          height: 150px;
          resize: none;
          display: block;
          width: 100%;
          padding: 10px;
          margin-bottom: 15px;
          border: 1px solid #ccc;
          background-color: rgba(218, 218, 218, 0.19);
        }
        & textarea:focus {
          outline: 1px solid var(--main-color);
        }
        & textarea::placeholder {
          transition: 0.3s;
        }
        & textarea:focus::placeholder {
          opacity: 0;
        }
        & input[type="submit"] {
          padding: 10px;
          width: 100%;
          border-color: transparent;
          background-color: var(--main-color);
          color: #fff;
          cursor: pointer;
          transition: 0.3s;
        }
        & input[type="submit"]:hover {
          background-color: grey;
        }
      }
    }
    @media (max-width: 767px) {
      & form {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      }
    }
  }
}
</style>
