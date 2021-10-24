<template>
  <footer id="footer">
    <div class="footer__content">
      <div class="logo">
        <router-link to="/">
         <img src="../assets/logo1.png" alt="">
        </router-link>
      </div>
      <div class="menu">
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
      <div class="footer__icons">
        <div class="footer__facebook">
          <a href="https://uk-ua.facebook.com/" target="_blank">
              <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
        </div>
        <div class="footer__twitter">
          <a href="https://twitter.com/?lang=uk" target="_blank">
              <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </div>
        <div class="footer__instagram">
          <a href="https://www.instagram.com/" target="_blank">
              <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div class="footer__text">
        <span class="footer__span">
          &copy; COPYRIGHT 2019
          <a href="https://beetroot.academy/ru/" class="footer__link" target="_blank">LEOSPA</a>
          ALL RIGHTS RESERVED
        </span>
      </div>
    </div>
  </footer>
</template>

<script>

</script>

<style lang="scss">
  @import '../styles/_vars.scss';

  #footer {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    text-align: center;
    padding-top: 50px;
  }

  .footer {

    &__content {
      background-color: #FFF9F8;
      padding: 50px 0 30px 0;
      
    }

    &__icons {
      display: flex;
      justify-content: center;
      margin: 25px 0;
    }

    &__facebook,
    &__twitter,
    &__instagram {
      display: inline-block;
      margin: 0 25px;
      width: 48px;
      height: 48px;

      .fa {
        width: 20px;
        height: 20px;

        &.fa-facebook,
        &.fa-twitter,
        &.fa-instagram {
          font-size: 17px;
          padding: 10px;
        }
      }

      .fa:hover {
        cursor: pointer;
        color: #fff;
        border-radius: 50%;
        border: 1px solid #FF817E;
        background: #FF817E;
      }
    }

    &__text {
      color: #818181;
    }

    &__link {
      color: #fb9d9d;
    }

    &__span {
      font-size: 14px;
    }
  }

  .menu {
    display: flex;
    justify-content: space-evenly;
    padding-top: 50px;
    font-family: $roboto_medium;
  }

  // .fa {
  //   width: 20px;
  //   height: 20px;

  //   &.fa-facebook,
  //   &.fa-twitter,
  //   &.fa-instagram {
  //     font-size: 17px;
  //     padding: 10px;
  //   }
  // }

  // .fa:hover {
  //   cursor: pointer;
  //   color: #fff;
  //   border-radius: 50%;
  //   border: 1px solid #FF817E;
  //   width: 20px;
  //   height: 20px;
  //   background: #FF817E;
  // }
</style>