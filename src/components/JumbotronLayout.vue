<template>
  
  <div class="jumbotron-container d-flex">
    <!-- Special background effect -->
    <div class="special-backgorund d-flex">
    <img src="../assets/images/Group_7543.svg" alt="special-svg">
    </div>
    <!-- /Special background effect -->
    <div class="text-jumbotron-container d-flex flex-wrap">
      <div class="aqua-line d-flex align-self-center"></div>
      <p>always the best way you need it</p>
      <h2>the best bussiness consulting</h2>
      <button>read more</button>
      <font-awesome-icon class="play-icon d-flex align-self-center" icon="fa-solid fa-play" />
    </div>
    <img src="../assets/images/portrait-of-young-architect-woman-on-meeting-KFZCE3A.jpg" alt="portrait-of-young-architect-woman-on-meeting">
  </div>

</template>

<script>
export default {
  name:'JumbotronLayout'
}
</script>

<style lang="scss" scoped>
@import '../assets/style/utilities';
@import '../assets/style/vars';
@import '../assets/style/general.scss';
@import '../assets/style/mixin.scss';
    .jumbotron-container{
      width: 100%;
      height: 100vh;
      background-color: #1f1e38;
      .text-jumbotron-container{
        position: absolute;
        top: 235px;
        left: 166px;
        width: 450px;
        text-transform: uppercase;
        color: white;
        .aqua-line{
          width: 50px;
          height: 2px;
          margin-right: 10px;
          background-color:#39ffbf ;
        }
        h2{
          margin: 20px 0 30px 0;
          line-height: 90px;
          font-size: 110px;
          font-weight: 600; 
          }
        button{
          text-transform: uppercase;
          padding: 10px 35px;
          margin-right: 30px;
          background-color: #39ffbf;
          &:hover{
            background-color: red;
          }
        }
        .play-icon{
          border:1px solid white;
          border-radius: 50%;
          padding: 12px 14px;
          color: #39ffbf;
          &:hover{ 
            
            color: red;
          }
        }
      }
      .special-backgorund{
        width: 35%;
        overflow: hidden;
        img{
        position: relative;
        bottom: 985px;
        left: 10px;
        width: 2000px;
        height: 2000px;
        transform: rotate(344deg);
      }
      }
      img{
      width: 65%;
      height: 100%;
      }
  }

</style>