<template>
  <div>
    <MainConsultants />
    <MainAboutUs/>
    <MainProject/>
    <MainTestimonial/>
    <MainBlog/>
  </div>
</template>

<script>
import MainConsultants from './MainComponent/MainConsultants.vue';
import MainAboutUs from './MainComponent/MainAboutUs.vue';
import MainProject from './MainComponent/MainProject.vue';
import MainTestimonial from './MainComponent/MainTestimonial.vue';
import MainBlog from './MainComponent/MainBlog.vue';
export default {
    name: "MainLayout",
    components: {
    MainConsultants,
    MainAboutUs,
    MainProject,
    MainTestimonial,
    MainBlog
}
}
</script>

<style lang="scss" scoped>
@import '../assets/style/utilities';
@import '../assets/style/vars';
@import '../assets/style/general.scss';
@import '../assets/style/mixin.scss';

</style>