<template>
  <header id="header">
    <modal name="modal" :adaptive="adaptive">
      <youtube video-id="PuQQYfFvgrs" ref="youtube" :resize="true"></youtube>
    </modal>
    <div class="header__background-left">
      <img src="../assets/leaf.png" alt="" class="photo1">
    </div>
    <div class="header__content">
      <h4 class="header__subtitle">SPA & BEAUTY CENTER</h4>
      <h1 class="header__title">Beauty and success starts here</h1>
      <p class="header__paragraph">
        Together creeping heaven upon third dominion be upon won't darkness
        rule behold it created good saw after she'd Our set living.
      </p>
      <div class="header__button">
        <router-link to="/leospa-vue-project/contact" class="header__contact">
          <Button title="RESERVE NOW" />
        </router-link>
        <div class="header__watch" @click="showVideo">
          <i class="fa fa-play" aria-hidden="true" ></i>
          <p class="header__text">Watch our story</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import Vue from 'vue'

  import Button from './Button.vue'
  import VModal from 'vue-js-modal'
  Vue.use(VModal, { componentName: 'modal' })

  export default {
    name: 'Header',
    data () {
      return {
        adaptive: true
      }
    },
    components: {
      Button,
    },
    methods: {
      showVideo() {
        this.$modal.show('modal')
      }
    }
  }
</script>

<style lang="scss">
  @import '../styles/_vars.scss';
  @import '../styles/_mixins.scss';

  #header {
    position: relative;
    @include Center();
  }

  .header {

    &__background-left {
      position: absolute;
      top: -13%;
      left: -19%;

      .photo1 {
        width: 200px;
      }

      @media screen and (max-width: 1400px) {
        display: none;
      }
    }

    &__content {
      text-align: left;
      width: 585px;
      margin: 100px 0 0 80px;

      @media screen and (max-width: 750px) {
        width: 94%;
        margin: 100px 40px 0 15px;
      }
    }

    &__subtitle {
      font-family: $rufina_regular;
      color: #fb9d9d;
      font-size: 20px;
      padding-bottom: 10px;

      @media screen and (max-width: 750px) {
        font-size: 15px;
      }

      @media screen and (max-width: 560px) {
        font-size: 13px;
      }
    }

    &__title {
      @include Title($rufina_bold, 65px, 25px 0);

      @media screen and (max-width: 750px) {
        font-size: 45px;
      }

      @media screen and (max-width: 560px) {
        font-size: 40px;
      }
    }

    &__paragraph {
      @include Paragraph(25px, #818181, $roboto_regular);
      font-size: 16px;

      @media screen and (max-width: 560px) {
        font-size: 13px;
      }
    }

    &__button {
      @include Flex(flex, space-between, center);
      width: 400px;
      margin-top: 40px;

      @media screen and (max-width: 560px) {
        width: 100%;
        justify-content: center;
      }
    }

    &__button:hover {
      cursor: pointer;
    }

    &__watch {
      @include Flex(flex, space-evenly, center);
      font-family: $roboto_regular;
      width: 200px;

      @media screen and (max-width: 580px) {
        display: none;
      }
    }

    &__watch:hover {
      cursor: pointer;
      color: #FF817E;
    }

    &__text {
      font-size: 15px;
    }
  }

  .fa {

    &.fa-play {
      color: #FF817E;
      border-radius: 50%;
      border: 14px solid #FEF0EA;
      background-color: #FEF0EA;
      font-size: 12px;
      padding-left: 4px;
    }
  }
</style>
