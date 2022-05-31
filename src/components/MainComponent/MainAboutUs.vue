<template>
  <div class="main-about-us-container" id="about">
    <div class="special-background-abus">
      <img src="../../assets/images/Group_7543.svg" alt="special-background">
    </div>
    <!-- About us section -->
    <div class="main-about-us-jumbotron-text d-flex justify-content-center">
    <img src="../../assets/images/business-people-working-together-on-project-and-5FHSKBL.jpg" alt="business-people-working-together-on-project">

    <div class="main-about-us-text d-flex flex-wrap align-self-center">
      <div class="special-line-abus align-self-center"></div>
      <p class="text-uppercase">About Us</p>
      <h2 class="text-uppercase">We make your strategy work</h2>
      <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae laborum ex animi soluta? Delectus dolor maiores earum dignissimos corrupti minima voluptatem eligendi vero sit quidem! Libero sunt tempora quibusdam cum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quo accusamus neque necessitatibus molestias? Incidunt debitis eum unde dicta qui?</span>
    </div>

    </div>
    <!-- Get started section -->
    <div class="main-about-us-footer d-flex align-items-center">
      <h3 class="text-uppercase ">we help to deliver the bussines case</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, cupiditate? Velit quibusdam ad porro distinctio dicta, corporis laboriosam rem minus recusandae saepe, voluptatum.</p>
      <button class="align-self-end">Get Started</button>
    </div>
  </div>
</template>

<script>
export default {
  name:'MainAboutUs'
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/utilities';
@import '../../assets/style/vars';
@import '../../assets/style/general.scss';
@import '../../assets/style/mixin.scss';
  .main-about-us-container{
    padding-bottom: 250px;
    position: relative;
    overflow:hidden;
    background-color:#1f1e38;
    .special-background-abus{
      position: absolute;
      bottom: -15px;
      left: 895px;
      z-index: 10;
      transform: rotate(359deg);
      img{
        width: 1450px;
      }
    }
    .main-about-us-jumbotron-text{
      position: relative;
      z-index: 99;
      img{
        width: 50%;
      }
      .main-about-us-text{
        width: 30%;
        height: fit-content;
        margin: 0 auto 0 60px;

        color: white;
        .special-line-abus{
          width: 50px;
          height: 2px;
          margin-right: 10px;
          background-color:#39ffbf ;
        }
        h2{
          font-size: 70px;
          line-height: 70px;
          font-weight: 600;
          margin: 30px 0;
        }
        span{
          color:  #aaaaaa;;
        }
      }
    }
    .main-about-us-footer{
      width: 90%;
      padding: 100px 0;
      position: relative;
      z-index: 99;
      text-align: justify;
      background-color: #39ffbf;
      h3{
        width: 20.5%;
        margin: 0 auto;
        font-size: 35px;
        font-weight: 600;
      }
      p{
        width: 30%;
        margin: 0 auto;

      }
      button{
        width: 10%;
        text-transform: uppercase;
        padding: 10px 0;
          border: none;
          color: white;
          background-color: #f81d39;
          &:hover{
              box-shadow: inset 0 0 0 3px rgba(0, 0, 0, 1);
          }
      }
    }
  }

</style>