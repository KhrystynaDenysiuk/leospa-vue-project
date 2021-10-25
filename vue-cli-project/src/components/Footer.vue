<template>
  <footer id="footer">
    <div class="footer__content">
      <div class="f-logo">
        <router-link to="/">
         <img src="../assets/logo1.png" alt="">
        </router-link>
      </div>
      <div class="menu">
        <div class="menu__list f-list">
          <ul class="f-list__ul-menu">
            <li class="f-list__ul-menu item">
              <router-link :to="{ path: '/', hash: '#about' }" class="item__aboutUs">
                ABOUT US
              </router-link>
            </li>
            <li class="f-list__ul-menu item">
              <router-link to="/team" class="item__team">TEAM</router-link>
            </li>
            <li class="f-list__ul-menu item">
              <router-link :to="{ path: '/', hash: '#gallery' }" class="item__gallery">
                GALLERY
              </router-link>
            </li>
            <li class="f-list__ul-menu item">
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
  @import '../styles/_mixins.scss';

  #footer {
    @include WidthHeightMargin();
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

      @media screen and (max-width: 790px) {
        margin: 0 15px;
      }

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
    padding-top: 50px;
    font-family: $roboto_medium;

    .f-list__ul-menu {
      display: flex;
      justify-content: center;

      &.item {
        margin: 0 15px;
      }

      @media screen and (max-width: 1400px) {
        width: auto;
        margin: 0 auto;
      }

      @media screen and (max-width: 450px) {
        flex-direction: column;
        align-items: center;
        font-size: 13px;
      }
    }
  }
</style>