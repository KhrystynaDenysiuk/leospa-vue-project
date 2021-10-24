<template>
  <header id="header">
    <modal name="modal" width="640" height="360">
      <youtube video-id="PuQQYfFvgrs" ref="youtube"></youtube>
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
        <router-link to="/contact" class="header__contact">
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

  #header {
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 1170px;
    margin: 0 auto;
  }

  .header {

    &__background-left {
      position: absolute;
      top: -13%;
      left: -12%;

      .photo1 {
        width: 200px;
      }
    }

    &__content {
      text-align: left;
      width: 585px;
      margin: 100px 0 0 80px;
    }

    &__subtitle {
      font-family: $rufina_regular;
      color: #fb9d9d;
      font-size: 20px;
      padding-bottom: 10px;
    }

    &__title {
      font-family: $rufina_bold;
      font-size: 65px;
      padding: 25px 0;
    }

    &__paragraph {
      font-family: $roboto_regular;
      line-height: 25px;
      font-size: 16px;
      color: #818181;
    }

    &__button {
      display: flex;
      justify-content: space-between;
      width: 400px;
      align-items: center;
      margin-top: 40px;
    }

    &__button:hover {
      cursor: pointer;
    }

    &__watch {
      font-family: $roboto_regular;
      width: 200px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
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
