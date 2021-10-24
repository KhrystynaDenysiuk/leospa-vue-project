<template>
  <div class="gallery__massage right services">
    <img :src="imgSrc" alt="" class="gallery__img">
    <div class="services__hover">
      <img src="../assets/hover.png" alt="" class="services__img">
      <span class="services__span">{{description}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PhotoCard',
    props: ['imgSrc', 'description'],
  }
</script>

<style lang="scss">

</style>