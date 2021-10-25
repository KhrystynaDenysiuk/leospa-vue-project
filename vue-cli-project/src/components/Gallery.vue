<template>
  <section id="gallery">
    <div v-for="photoCard in gallery" :key="photoCard.id" id="gallery">
      <PhotoCard
        :imgSrc="photoCard.imgSrc"
        :description="photoCard.description"
      />
    </div>
  </section>
</template>

<script>
import PhotoCard from './PhotoCard.vue'

import massage from '../assets/massage.png';
import stoneMassage from '../assets/stone-massage.png';
import depilation from '../assets/depilation.png';
import facialMassage from '../assets/facial-massage.png';

export default {
  name: 'Gallery',
    data() {
    return {
      gallery: [
        {
          id: 1,
          imgSrc: massage,
          description: "Massage",
        },
        {
          id: 2,
          imgSrc: stoneMassage,
          description: "Stone massage",
        },
        {
          id: 3,
          imgSrc: depilation,
          description: "Depilation",
        },
        {
          id: 4,
          imgSrc: facialMassage,
          description: "Facial massage",
        },
      ],
    }
  },
  components: {
    PhotoCard
  }
}
</script>

<style lang="scss">
  @import '../styles/_vars.scss';
  @import '../styles/_mixins.scss';

  #gallery {
    @include WidthHeightMargin();
    position: relative;
    padding-top: 60px;
    display: flex;
    justify-content: space-between;
    font-family: $rufina_bold;

    @media screen and (max-width: 770px) {
      flex-direction: column;
      width: auto;
      padding-top: 0;
    }
  }

  .gallery {

    &__img {
      width: 100%;
      height: 100%;
    }
  }

  .right {
    padding-right: 5px;

    @media screen and (max-width: 770px) {
      padding: 20px;
    }
  }

  .services {
    position: relative;

    &__hover {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      opacity: 0;
      text-align: center;
      cursor: pointer;
      transition: all 300ms ease-in-out;
      background-color: #ff817ee6;
      height: 100%;
      margin-right: 5px;

      &.margin {
        margin-right: 0;
      }
    }

    &__hover:hover {
      opacity: 1;
    }

    &__img {
      margin: 0 auto 20px;
      width: 47px;
    }

    &__span {
      color: #fff;
      display: block;
      font-family: "Rufina", serif;
      font-weight: 700;
      font-size: 18px;
    }
  }
</style>