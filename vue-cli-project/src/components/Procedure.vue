<template>
  <div class="slider__item">
    <img :src="imgSrc" alt="" class="slider__img">
    <div class="slider__text">
      <h3 class="slider__title">{{title}}</h3>
      <p class="slider__subtitle">{{description}}</p>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Procedure',
    props: ['imgSrc', 'title', 'description']
  }
</script>

<style lang="scss">

</style>