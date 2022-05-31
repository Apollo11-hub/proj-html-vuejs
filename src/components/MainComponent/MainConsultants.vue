<template>
  <div class="main-consultants-container d-flex flex-column justify-content-center align-content-center ">
    <div class="d-flex align-items-center">
    <h2>OUR CONSULTANTS CAN HELP YOU</h2>
    <div class="special-line"></div>
    </div>
    <!--  Griglia tipi di consulting -->
    <div class="main-consultants-table-container d-flex flex-wrap">

      <div class="main-consultants-table w-50 d-flex">
        <!-- grid of consultants -->
        <div>
          <font-awesome-icon class="table-icon" icon="fa-solid fa-chart-line" />
        </div>

        <div>
          <h3>Statistical Consulting</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores at labore quis accusamus dolore laborum totam exercitationem, repellendus neque perferendis doloribus eius!</p>
        </div>
      </div>

      <div class="main-consultants-table w-50 d-flex">

        <div>
          <font-awesome-icon class="table-icon" icon="fa-solid fa-bullhorn" />
        </div>

        <div>
          <h3>Digital Consulting</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores at labore quis accusamus dolore laborum totam exercitationem, repellendus neque perferendis doloribus eius!</p>
        </div>
      </div>

      <div class="main-consultants-table w-50 d-flex">

        <div>
          <font-awesome-icon class="table-icon" icon="fa-solid fa-wallet" />
        </div>

        <div>
          <h3>Banking Consulting</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores at labore quis accusamus dolore laborum totam exercitationem, repellendus neque perferendis doloribus eius!</p>
        </div>
      </div>

      <div class="main-consultants-table w-50 d-flex">

        <div>
          <font-awesome-icon class="table-icon" icon="fa-solid fa-bullseye" />
        </div>
        <div>
          <h3>Enterprise Consulting</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores at labore quis accusamus dolore laborum totam exercitationem, repellendus neque perferendis doloribus eius!</p>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name:'MainConsultants'
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/utilities';
@import '../../assets/style/vars';
@import '../../assets/style/general.scss';
@import '../../assets/style/mixin.scss';
.main-consultants-container{
  width: 85%;
  height: 100vh;
  margin-left: auto;

  h2{
    font-weight: 600;
  }
  .special-line{
    width: calc(100% - 550px);
    height: 3px;
    margin-left:25px;
    background-color: aqua;
  }
  .main-consultants-table-container{
    margin-top: 40px;
    .main-consultants-table{
    margin:60px 0;
    .table-icon{
      font-size: 25px;
      padding: 20px;
      margin-right: 50px;
      border-radius: 50%;
      color: white;
      border: 1px solid #f81e3a;
      background-color:#f81e3a ;
    }
    h3{
      text-transform: uppercase;
    }
    p{
      width: 60%;
      margin-top: 30px;
      text-align: justify;
      color: #aaaaaa;
    }
  }
}
}


</style>