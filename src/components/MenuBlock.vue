<template>
  <div id="menu-wrapper" class="container" v-bind:class="{ staticMenu: this.$data.menuStatic }">
    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo1.png" alt="">
      </router-link>
    </div>
    <div class="menu">
      <label class="menu__img"> </label>
      <input type="checkbox" id="burg" class="menu__burger">
      <div class="menu__list list">
        <ul class="list__ul-menu">
          <li class="list__ul-menu item">
            <router-link :to="{ path: '/', hash: '#about' }" class="item__aboutUs">
              ABOUT US
            </router-link>
          </li>
          <li class="list__ul-menu item">
            <router-link to="/team" class="item__team">TEAM</router-link>
          </li>
          <li class="list__ul-menu item">
            <router-link :to="{ path: '/', hash: '#gallery' }" class="item__gallery">
              GALLERY
            </router-link>
          </li>
          <li class="list__ul-menu item">
            <router-link to="/contact" class="item__contact">CONTACT</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Menu',
    data() {
      return {
        menuStatic: false
      }
    },
    watch: {
      '$route': {
        handler(route) {
          const currentRoute = route.path;

          if (currentRoute === '/contact' || currentRoute === '/team') {
            this.$data.menuStatic = true;
          } else {
            this.$data.menuStatic = false;
          }
        },
        immediate: true,
      }
    },
    mounted() {
      window.addEventListener('scroll', this.updateScroll);
    },
    methods: {
      updateScroll() {
        const menuBlock = document.getElementById('menu-wrapper');
        this.scrollPosition = window.scrollY;
        if (!this.$data.menuStatic && this.scrollPosition > 50) {
          menuBlock.classList.add('isMoving');
        } else {
          menuBlock.classList.remove('isMoving');
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '../styles/_vars.scss';
  @import '../styles/_mixins.scss';

  #menu-wrapper {
    width: 100%;
    font-family: $roboto_medium;
  }

  .container {
    @include Flex(flex, flex-start, flex-end);
    width: 100%;
    max-width: 1170px;
    position: fixed;
    z-index: 3;
  }

  .logo {
    padding-right: 70px;
    padding-left: 8%;
  }

  .isMoving {
    width: 100%;
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    justify-content: flex-start !important;
    max-width: 100% !important;
    background: #fff;
    box-shadow: 0 5px 15px #c7c6c6;

    .list {
      padding-left: 100px;
    }
  }

  .staticMenu {
    position: absolute !important;
  }

  .menu {

    &__img {
      display: none;

      @media screen and (max-width: 900px) {
        display: block;
        display: inline-block;
        width: 35px;
        height: 1px;
        vertical-align: middle;
        border-radius: 5px;
        position: absolute;
        right: 12%;
        top: 66%;
        background-color: #000;

        &::before,
        &::after {
          content: "";
          position: absolute;
          top: -9px;
          width: 35px;
          height: 1px;
          background-color: #000;
          border-radius: 5px;
        }

        &::after {
          top: 9px;
        }
      }
    }

    &__burger {
      width: 32px;
      height: 23px;
      opacity: 0;
      cursor: pointer;
      z-index: 2;
      position: absolute;
      right: 12%;
      top: 51%;

      &:checked ~ .menu__list{
        display: block;
        position: absolute;
        right: 21%;
        top: 90%;
        z-index: 2;
        width: 200px;
      }
    @media screen and (min-width: 900px) {
    display: none;
    }
    }
  }

  .list {
    width: 385px;
    padding-bottom: 8px;
    font-size: 13px;

    @media screen and (max-width: 900px) {
      display: none;
      width: 100px;
      text-align: end;
    }

    &__ul-menu {
      display: flex;
      justify-content: space-between;
      list-style: none;

      @media screen and (max-width: 900px) {
        flex-direction: column;
        cursor: pointer;
      }
    }
  }

  .item {

    @media screen and (max-width: 900px) {
      padding: 10px 0;
    }

    &__aboutUs:hover,
    &__team:hover,
    &__gallery:hover,
    &__contact:hover {
      cursor: pointer;
      color: #FF817E;
    }
  }

  a {
    text-decoration: none;
    color: #000;
  }
</style>