<template>
  <div>
    <div id="home" class="ap-h-wrap">

      <div class="logo-nav-container d-flex  justify-content-between align-items-center">
        <div class="ap-logo">
          <img src="../assets/images/logotype.png" alt="Phlox">
        </div>
        <nav class="ap-nav-menu">
        <ul class="d-flex text-uppercase">
          <li><a href="#home">home</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#projects">projects</a></li>
          <li><a href="#testimonial">service</a></li>
          <li><a href="#blog">blog</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
        </nav>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name:"HeaderLayout"
}
</script>

<style lang="scss" scoped>
@import '../assets/style/utilities';
@import '../assets/style/vars';
@import '../assets/style/general.scss';
@import '../assets/style/mixin.scss';
  .ap-h-wrap{
    width: 100%;
    position: absolute;
    top:0;
    left: 0;
    z-index: 99;

    .logo-nav-container{
      width: 85%;
      margin: 0 auto;

      height: 100%;
      .ap-logo{
        height: 100%;

        img{
          width: 120px;
          padding: 20px 0;
        }
      }
      .ap-nav-menu{ 
        height: 100%;
        a{
          margin: 0 15px;
          color: white;
          &:hover{
            color:darken($color: #ffffff, $amount: 10)
          }
        }
      }
    }
  }

</style>