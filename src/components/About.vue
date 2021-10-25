<template>
  <section id="about">
    <img src="../assets/flower-red.png" alt="" class="about__photo1">
    <img src="../assets/flower-pink.png" alt="" class="about__photo2">
    <img src="../assets/butterfly.png" alt="">
    <div class="about__content">
      <h4 class="about__subtitle">ABOUT OUR SPA CENTER</h4>
      <h1 class="about__title">Come and you will be Inspired!</h1>
      <p class="about__paragraph1">
        It’s the end of summer the sweltering heat makes human sweat in the 
        night and makes the plants and trees wilt even in the moonlit nights. 
        The eastern wind breeze brings an eerie feeling, that the monsoon clouds 
        are soon coming, there is a strange silence in the ears, the sky gets 
        darker and darker
      </p>
      <p v-if="isReadMore" class="about__paragraph2">
        It’s the end of summer the sweltering heat makes human sweat in the night 
        and makes the plants and trees wilt even in the moonlit nights. The eastern 
        wind breeze brings an eerie feeling, that the monsoon clouds are soon coming, 
        there is a strange silence in the ears, the sky gets darker and darker
        </p>
    </div>
    <div class="about__button">
      <Button :title="btnTitle" :isRound="true" :onClickProp="readMore" />
    </div>
  </section>
</template>

<script>
import Button from './Button.vue'
  export default {
    name: 'About',
    components: {
      Button
    },
    data: () => {
      return {
        isReadMore: false,
        btnTitle: 'READ MORE'
      }
    },
    methods: {
      readMore() {
        this.$data.isReadMore = !this.$data.isReadMore;
        if (this.$data.isReadMore) {
          this.$data.btnTitle = 'CLOSE'
        } else {
          this.$data.btnTitle = 'READ MORE'
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '../styles/_vars.scss';
  @import '../styles/_mixins.scss';

  #about {
    @include Center();
    padding-top: 250px;
    text-align: center;
    position: relative;

    @media screen and (max-width: 600px) {
      padding-top: 120px;
    }
  }

  .about {

    &__photo1 {
      position: absolute;
      top: 15%;
      left: 0;

      @media screen and (max-width: 1100px) {
        width: 120px;
      }

      @media screen and (max-width: 600px) {
        display: none;
      }
    }

    &__photo1:hover {
      cursor: pointer;
      animation: 2s linear 0s normal none infinite running rot;
    }

    &__photo2 {
      position: absolute;
      bottom: 27%;
      right: -5%;

      @media screen and (max-width: 1200px) {
        display: none;
      }
    }

    &__photo2:hover {
      cursor: pointer;
      animation: 2s linear 0s normal none infinite running rot;
    }

    &__subtitle {
      font-size: 20px;
      padding-top: 37px;
      color: #818181;
      font-family: $roboto_regular;

      @media screen and (max-width: 750px) {
        font-size: 17px;
      }

      @media screen and (max-width: 560px) {
        font-size: 15px;
      }
    }

    &__title {
      @include Title($rufina_bold, 40px, 33px 0);

      @media screen and (max-width: 750px) {
        font-size: 45px;
      }

      @media screen and (max-width: 560px) {
        font-size: 40px;
      }
    }

    &__paragraph2 {
      padding-top: 20px;
    }

    &__paragraph1,
    &__paragraph2 {
      @include Paragraph(25px, #818181, $roboto_light);

      @media screen and (max-width: 1100px) {
        padding: 0 30px;
        font-size: 18px;
      }

      @media screen and (max-width: 560px) {
        font-size: 13px;
      }
    }

    &__button {
      margin-top: 60px;
    }
  }
</style>