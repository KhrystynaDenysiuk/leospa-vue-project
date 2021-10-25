<template>
  <div id="app">
    <Menu />
    <router-view :key="$route.fullPath"></router-view>
    <Footer />
  </div>
</template>

<script>
import Menu from './components/MenuBlock.vue';
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Menu,
    Footer
  }
}
</script>

<style lang="scss">
@import './styles/reset.scss';
@import './styles/fonts.scss';
@import './styles/keyframes.scss';

body {
  margin: 0;
  padding: 0;
}

#app {
  position: relative;
}

</style>
