<template>
  <div class="location">
    <div class="location__photo">
      <img :src="imgSrc" alt="" class="location__img">
    </div>
    <div class="location__address">
      <p class="title">{{title}}</p>
      <p class="subtitle">{{description}}</p>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'ContactItem',
    props: ['imgSrc', 'title', 'description'],
  }
</script>