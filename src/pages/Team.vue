<template>
  <div id="team">
    <!-- <router-view></router-view> -->
    <div class="team__content">
      <h1 class="team__title">Experienced Team</h1>
      <p class="team__paragraph">
        To doesn't his appear replenish together called he of mad place won't 
        wherein blessed second every wherein were meat kind wherein and martcin
      </p>
    </div>
    <div class="team__master">
      <div v-for="master in team" :key="master.id">
        <Master
          :imgSrc="master.imgSrc"
          :title="master.title"
          :description="master.description"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Master from './Master.vue';

import depilationMaster from '../assets/depilationMaster.png';
import beautician from '../assets/beautician.png';
import masseur from '../assets/masseur.png'

export default {
  name: 'Team',
  components: {
    Master,
  },
  data() {
    return {
      team: [
        {
          id: 1,
          imgSrc: depilationMaster,
          title: 'Katya Austin',
          description: "Depilation master",
        },
        {
          id: 2,
          imgSrc: beautician,
          title: 'Anna Hannan',
          description: 'Beautician',
        },
        {
          id: 3,
          imgSrc: masseur,
          title: 'Sarah Harris',
          description: 'Masseur',
        },
      ],
    }
  }
}
</script>

<style lang="scss">
  @import '../styles/_vars.scss';
  @import '../styles/_mixins.scss';

  #team {
    @include WidthHeightMargin();
    padding-top: 150px;
  }

  .team {
    
    &__content {
      width: 700px;
      margin: 0 auto;
      text-align: center;
      padding-bottom: 50px;

       @media screen and (max-width: 970px) {
        width: 100%;
      }
    }

    &__title {
      @include Title($rufina_bold, 40px, 58px 0 33px 0);

      @media screen and (max-width: 750px) {
        font-size: 45px;
      }

      @media screen and (max-width: 560px) {
        font-size: 40px;
      }
    }

    &__paragraph {
      @include Paragraph(25px, #818181, $roboto_light);

      @media screen and (max-width: 1100px) {
        padding: 0 30px;
        font-size: 18px;
      }

      @media screen and (max-width: 560px) {
        font-size: 13px;
      }
    }

    &__master {
      @include Flex(flex, space-evenly, center);
      padding-top: 40px;

      @media screen and (max-width: 1115px) {
        flex-direction: column;
      }
    }
  }

  .person {
    position: relative;

    @media screen and (max-width: 1115px) {
      padding-bottom: 20px;
    }

    &__title {
      margin-top: 20px;
      font-size: 22px;
      font-family: $rufina_bold;
    }

    &__subtitle {
      color: #818181;
      margin: 10px 0;
      font-family: $roboto_light;
    }

    &__information {
      cursor: pointer;
      width: 240px;
      background-color: #fff;
      box-shadow: 0 5px 20px #f0f0f0;
      max-width: calc( 100% - 60px);
      margin: 0 auto;
      padding: 30px;
      padding-top: 10px;
      margin-top: -50px;
      height: 80px;
      position: relative;
      text-align: center;
      transition: all 300ms ease-in-out;
      z-index: 1;
    }

    &__info {
      transition: all 300ms ease-in-out;
    }

    &__information:hover &__info {
      margin-top: -15px;
    }

    &__information:hover &__icons {
      opacity: 1;
      visibility: visible;
    }

    &__icons {
      display: flex;
      justify-content: center;
      transition: all 300ms ease-in-out;
      opacity: 0;
      visibility: hidden;
    }

    &__facebook,
    &__twitter,
    &__instagram,
    &__google {
      border-radius: 50%;
      border: 1px solid #000;
      width: 25px;
      height: 25px;
      margin: 10px;
    }

    &__facebook:hover,
    &__twitter:hover,
    &__instagram:hover,
    &__google:hover {
      border: 1px solid #ff817e;
      background: #ff817e;
    }

    &__facebook:hover .fa,
    &__twitter:hover .fa,
    &__instagram:hover .fa,
    &__google:hover .fa {
      color: #fff;
    }

    .fa {
      margin-top: 16%;
    }
  }
</style>
