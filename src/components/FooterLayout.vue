<template>
  <div id="contact" class="footer-container">
      <!-- Immagine fullwidth + testo e bottone getstarted -->
      <div class="footer-jumbotron-container d-flex flex-column justify-content-center align-items-center">
        <h2 class="text-uppercase">let's talk about work</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, ut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, fugiat!</p>
        <button class="ap-btn-footer text-uppercase">get started</button>
      </div>
      <!-- logo social e menu nav -->
      <div class="logo-nav-social d-flex justify-content-between ">
        <img src="../assets/images/logotype-2-150x25.png" alt="logo-phlox">
        <ul class="d-flex text-uppercase">
          <li><a href="#home">home</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#projects">projects</a></li>
          <li><a href="#testimonial">service</a></li>
          <li><a href="#blog">blog</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>

        <ul class="d-flex">
          <li><a href="#">
            <font-awesome-icon icon="fa-brands fa-instagram" />
            </a></li>
          <li><a href="#"> 
            <font-awesome-icon icon="fa-brands fa-linkedin-in" />
          </a></li>
          <li><a href="#">
            <font-awesome-icon icon="fa-brands fa-facebook-f" />
          </a></li>
          <li><a href="#">
            <font-awesome-icon icon="fa-brands fa-twitter" />
          </a></li>
        </ul>
      </div>
      <div class="termofuse d-flex justify-content-between text-capitalize py-5">
        <p>term of use <br> privacy enviromental policy</p>
        <p>copyright 2020 phlox consulting. all right reserved.</p>

      </div>

  </div>
</template>

<script>
export default {
  name:'FooterLayout'
}
</script>

<style lang="scss" scoped>
@import '../assets/style/utilities';
@import '../assets/style/vars';
@import '../assets/style/general.scss';
@import '../assets/style/mixin.scss';
  .footer-container{
    color: white;
    background-color:#1f1e38;
    .footer-jumbotron-container{
      width: 100%;
      height: 482px;
      background-image: url(../assets/images/business-people-working-together-on-project-and-B3MZ4TX.jpg);
      h2{
        font-size:47px;
        font-weight:600;
      }
      p{
        width: 30%;
        text-align: center;
        margin: 15px auto;
      }
      button{
        padding:12px 50px;
        color: white;
        background-color: #1f1e38;
        &:hover{
          background-color: lighten($color: #36354c, $amount: 10);
        }
      }
    }
    .logo-nav-social{
      width: 80%;
      margin:0px auto;
      padding: 90px 0;
      border-bottom: 1px solid #888888;
      li{
        margin: 0 10px;
        color: #888888;
        &:hover{
          cursor: pointer;
          color: lighten($color: #888888, $amount: 30);
        }
        a{
          color: #888888;
          &:hover{
          color: lighten($color: #888888, $amount: 40);
          }
        }
      }
    }
    .termofuse{
      width: 80%;
      margin:0px auto;
      color: #888888;
    }
  }

</style>