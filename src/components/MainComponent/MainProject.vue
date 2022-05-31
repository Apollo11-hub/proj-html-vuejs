<template>
  <div id="projects" class="back-proj-col">
  <div class="main-project-container">
    <div class="d-flex">
      <div class="special-line-project align-self-center"></div>
      <p class="text-uppercase">project</p>
    </div>
    <div class="d-flex justify-content-between">
      <h2 class="text-uppercase">our expert consultants help client</h2>
      <ul class="d-flex align-self-center">
        <li><font-awesome-icon icon="fa-solid fa-arrow-left" /></li>
        <li><font-awesome-icon icon="fa-solid fa-arrow-right" /></li>
      </ul>
    </div>
    <!-- project images -->
    <div class="d-flex">
              <!-- image1 -->
      <div
      @mouseenter="toggleHover = !toggleHover"
      @mouseleave="toggleHover = !toggleHover"
      class="image-container-project position-relative">
        <img src="../../assets/images/DRY-1-790x592.jpg" alt="dry">
        <div v-if="toggleHover"
        class="overlay-project d-flex justify-content-between align-items-end">
          <div class="p-3">
            <h4>purinky products</h4>
            <p>uncategorized</p>
          </div>
          <div class="ap-btn-hover">+</div>
        </div>
      </div>
              <!-- image2 -->
        <div 
          @mouseenter="toggleHoverTwo = !toggleHoverTwo"
          @mouseleave="toggleHoverTwo = !toggleHoverTwo"
        class="image-container-project position-relative">
          <img  src="../../assets/images/221bf0b7-8134-43bb-936a-5acbe42db64a-790x592.jpg" alt="notvine">
          <div v-if="toggleHoverTwo" class="overlay-project d-flex justify-content-between align-items-end">
          <div class="p-3">
            <h4>purinky products</h4>
            <p>uncategorized</p>
          </div>
          <div class="ap-btn-hover">+</div>
        </div>
        </div>
              <!-- image3 -->
        <div
          @mouseenter="toggleHoverThree = !toggleHoverThree"
          @mouseleave="toggleHoverThree = !toggleHoverThree"
          class="image-container-project position-relative">
          <img src="../../assets/images/z1el4c4p-790x592.jpg" alt="vizeon">
          <div  v-if="toggleHoverThree" class="overlay-project d-flex justify-content-between align-items-end">
          <div class="p-3">
            <h4>purinky products</h4>
            <p>uncategorized</p>
          </div>
          <div class="ap-btn-hover">+</div>
        </div>
        </div>
    </div>


  </div>
  </div>
</template>

<script>
export default {
  name:'MainProject',
  data() {
    return {
      toggleHover:false,
      toggleHoverTwo:false,
      toggleHoverThree:false
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/utilities';
@import '../../assets/style/vars';
@import '../../assets/style/general.scss';
@import '../../assets/style/mixin.scss';
  .back-proj-col{
    padding-bottom: 150px;
    color: white;
    background-color:#1f1e38;
    .main-project-container{
      width: 80%;
      margin: 0 auto;
      .special-line-project{
        width: 50px;
        height: 2px;
        margin-right: 10px;
        background-color:#39ffbf ;
      }
    h2{
      width: 50%;
      padding: 30px 0;
      font-size: 50px;
      line-height: 50px;
      font-weight: 600;
    }
    li{ 
      padding: 15px 22px;
      margin:0 10px ;
      background-color: #36354c;
      &:hover{
        cursor: pointer;
        background-color: lighten($color: #36354c, $amount: 10);
      } 
    }
    .image-container-project{
      width: fit-content;
      margin: 20px;
      // background-color: white;
      img{
        width: 100%
      }
      .overlay-project{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba($color: #f00e2e, $alpha: 0.6);
        .ap-btn-hover{
          padding: 10px 20px;
          margin: 10px;
          background-color: #36354c;
          &:hover{
            cursor: pointer;
            background-color: lighten($color: #36354c, $amount: 10);
          }
        }
        h4{
          text-transform: uppercase;
        }
      }
    }  
  }
}
</style>