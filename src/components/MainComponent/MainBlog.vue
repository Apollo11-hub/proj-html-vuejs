<template>
  <div id="blog" class="main-blog-container">
    <div class="main-blog-wrapper">

    <div class="d-flex">
      <p class="text-uppercase">blog</p>
      <div class="specia-line-blog align-self-center"></div>
    </div>
    <div class="d-flex justify-content-between my-4">
      <h2 class="text-uppercase">the recent news you must read it</h2>
      <button class="ap-btn text-uppercase px-5 py-3">view all</button>
    </div>

    <div class="d-flex">

      <div class="image-text-container">
        <img src="../../assets/images/startup-business-people-and-strategy-board-PAJ3P9K-1390x1042.jpg" alt="startup-business-people-and-strategy-board">

        <div class="p-abs-text">
          <span>22/2/2022</span>
          <span>by paul</span>
          <p class="text-capitalize my-3">Canadian consulting firm acquired by UK giant</p>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sunt! Cupiditate quaerat dolor recusandae aut. Asperiores debitis doloremque voluptatem doloribus?</span>
        </div>
      </div>

      <div class="image-text-container">
        <img src="../../assets/images/business-people-working-together-on-project-and-5FHSKBL-1390.jpg" alt="startup-business-people-and-strategy-board">

        <div class="p-abs-text">
          <span>22/2/2022</span>
          <span>by paul</span>
          <p class="text-capitalize my-3">Canadian consulting firm acquired by UK giant</p>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sunt! Cupiditate quaerat dolor recusandae aut. Asperiores debitis doloremque voluptatem doloribus?</span>
        </div>
      </div>

    </div>

    </div>
  </div>
</template>

<script>
export default {
  name:'MainBlog'
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/utilities';
@import '../../assets/style/vars';
@import '../../assets/style/general.scss';
@import '../../assets/style/mixin.scss';
  .main-blog-container{
    padding-bottom: 200px;
    color: white;
    background-color:#1f1e38;
    .main-blog-wrapper{
      width: 80%;
      margin: 0 auto;
    .specia-line-blog{
      width: 50px;
      height: 2px;
      margin-left: 20px;
      background-color:#39ffbf ;
      }
      h2{
        font-weight: 600;
      }
      button{
        background-color: #39ffbf;
        &:hover{
          background-color: red;
        }
      }
      .image-text-container{
        position: relative;
        img{ 
          width:97%;
        }
        .p-abs-text{
          position: absolute;
          bottom:-110px;
          left: 130px;
          width: 80%;
          padding: 50px;
          color: black;
          background-color: white;
          span:not(:last-child){
            color: red;
            margin-right: 15px;
          }
          p{ 
            font-size: 25px;
            font-weight: 500;
          }
          span:last-child{ 
            color: lightgray;
          }
        }
      }
  }
}
</style>