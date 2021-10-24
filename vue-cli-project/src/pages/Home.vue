<template>
  <div id="home">
    <Header />
    <About />
    <Gallery />
    <Procedures />
    <div class="background-right">
      <img src="../assets/background_header.png" alt="" class="photo2">
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header.vue';
  import About from '../components/About.vue';
  import Gallery from '../components/Gallery.vue';
  import Procedures from '../components/Procedures.vue';

  export default {
    name: 'Home',
    components: {
      Header,
      About,
      Gallery,
      Procedures,
    }
  }
</script>

<style lang="scss">
  #home {
    position: relative;
    padding-top: 140px;
  }

  .background-right {
    position: absolute;
    top: -0.5%;
    right: 0;

    .photo2 {
      width: 600px;
    }
  }
</style>