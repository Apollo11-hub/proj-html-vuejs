<template>
  <div id="testimonial" class="main-testimonial-container">
    <div class="d-flex justify-content-between main-testimonial-text-container">
      <p class="text-uppercase">testimonial</p>
      <div class=" specia-line-testimonal align-self-center"></div>
    </div>
    <h2 class="justify-self-end text-uppercase ">what's the costumers says about our work</h2>
      <!-- testimonials -->
    <div class="costumer-review-container d-flex">
      <div
      @mouseenter="toggleImageBg = ! toggleImageBg"
      @mouseleave="toggleImageBg = ! toggleImageBg"
      class="static-user-review" :class="{'special-bg-image' : toggleImageBg}">
        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, corporis reprehenderit veritatis officiis autem voluptatum cumque laboriosam aliquid reiciendis quibusdam.</span>
        <h4 class="mt-5 mb-1">Vera Duncan</h4>
        <span>Amazon inc.</span>
      </div>
      <div
      @mouseenter="toggleImageBgTwo = ! toggleImageBgTwo"
      @mouseleave="toggleImageBgTwo = ! toggleImageBgTwo"
      class="static-user-review" :class="{'special-bg-image' : toggleImageBgTwo}">
        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, corporis reprehenderit veritatis officiis autem voluptatum cumque laboriosam aliquid reiciendis quibusdam.</span>
        <h4 class="mt-5 mb-1">Vera Duncan</h4>
        <span>Amazon inc.</span>
      </div>
      <div
      @mouseenter="toggleImageBgThree = ! toggleImageBgThree"
      @mouseleave="toggleImageBgThree = ! toggleImageBgThree"
      class="static-user-review" :class="{'special-bg-image' : toggleImageBgThree}">
        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, corporis reprehenderit veritatis officiis autem voluptatum cumque laboriosam aliquid reiciendis quibusdam.</span>
        <h4 class="mt-5 mb-1">Vera Duncan</h4>
        <span>Amazon inc.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: ' MainTestimonial',
  data() {
    return {
      toggleImageBg : false,
      toggleImageBgTwo : false,
      toggleImageBgThree : false
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/utilities';
@import '../../assets/style/vars';
@import '../../assets/style/general.scss';
@import '../../assets/style/mixin.scss';
  .main-testimonial-container{
    color: white;
    background-color:#1f1e38;
    padding-bottom: 150px;
    .main-testimonial-text-container{ 
      width: 45%;
      margin: 0 10% 0 auto;
      .specia-line-testimonal{
        width: 50px;
        height: 2px;
        background-color:#39ffbf ;
      }
    }
    h2{
      width: 30%;
      margin: 0 10% 0 auto;
      font-weight: 600;
      padding: 20px 0;
      text-align: right;
    }
    .costumer-review-container{
      width: 90%;
      margin-left: auto;
      background-color: white;
      .static-user-review{
        color: black;

        padding: 60px;
        margin-right:calc(10% /3) ;
        width: calc(83% / 3);
        span,p{
          color: #afafb7;
        }
      }
    }
  }

</style>