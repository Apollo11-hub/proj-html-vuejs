<template>
  <div class="ap-app-wrap">
    <HeaderLayout />
    <JumbotronLayout/>
    <MainLayout/>
    <FooterLayout/>
  </div>

</template>

<script>
import HeaderLayout from './components/HeaderLayout.vue';
import JumbotronLayout from './components/JumbotronLayout.vue';
import MainLayout from './components/MainLayout.vue';
import FooterLayout from './components/FooterLayout.vue';


export default {
  name: 'App',
  components: {
    HeaderLayout,
    JumbotronLayout,
    MainLayout,
    FooterLayout,
}
}
</script>



<style lang="scss">
@import './assets/style/utilities';
@import './assets/style/vars';
@import './assets/style/general.scss';
@import './assets/style/mixin.scss';
  .ap-app-wrap{
    position: relative;
    
  }

</style>
