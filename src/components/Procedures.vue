<template>
<section id="procedures">
  <div class="procedures__content">
    <h1 class="procedures__title">Popular Procedures</h1>
    <p class="procedures__paragraph">
      To doesn't his appear replenish together called he of mad place won't wherein 
      blessed second every wherein were meat kind wherein and martcin
    </p>
  </div>
  <VueSlickCarousel v-bind="settings">
    <div v-for="procedure in procedures" :key="procedure.id">
      <Procedure
        :title="procedure.title"
        :description="procedure.description"
        :imgSrc="procedure.imgSrc"
      />
    </div>
    <div v-for="procedure in procedures" :key="procedure.id">
      <Procedure
        :title="procedure.title"
        :description="procedure.description"
        :imgSrc="procedure.imgSrc"
      />
    </div>
  </VueSlickCarousel>
</section>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  import Button from './Button.vue'
  import Procedure from './Procedure.vue';

  import massageTherapy from '../assets/massage-therapy.png';
  import beautyCare from '../assets/beauty-care.png';
  import executiveReflexology from '../assets/executive-reflexology.png';

  export default {
    name: 'Procedures',
     data() {
      return {
        procedures: [
          {
            id: 1,
            imgSrc: massageTherapy,
            title: 'Massage Therapy',
            description: "Living winged said you darkness you're divide gathered and bring one seasons face great dr Waters firmament place which.",
          },
          {
            id: 2,
            imgSrc: beautyCare,
            title: 'Beauty Care',
            description: "Living winged said you darkness you're divide gathered and bring one seasons face great dr Waters firmament place which.",
          },
          {
            id: 3,
            imgSrc: executiveReflexology,
            title: 'Executive Reflexology',
            description: "Living winged said you darkness you're divide gathered and bring one seasons face great dr Waters firmament place which.",
          },
        ],
        settings: {
          "dots": true,
          "infinite": true,
          "initialSlide": 2,
          "speed": 500,
          "slidesToShow": 3,
          "slidesToScroll": 1,
          "swipeToSlide": true,
          "autoplay": true,
          "autoplaySpeed": 2000,
          responsive: [
            {
              breakpoint: 1330,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 970,
              settings: {
                slidesToShow: 1,
              }
            },
          ]
        },
      }
    },
    components: {
      Button,
      VueSlickCarousel,
      Procedure
    }
  }
</script>

<style lang="scss">
  @import '../styles/_vars.scss';
  @import '../styles/_mixins.scss';

  #procedures {
    @include Center();
    text-align: center;
  }

  .procedures {

    &__content {
      width: 700px;
      margin: 0 auto;
      padding: 100px 0 80px 0;

      @media screen and (max-width: 750px) {
        width: 100%;
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
  }

  @media screen and (max-width: 1300px) {
    .slick-next, .slick-prev {
      display: none !important;
    }
  }

  .slider {

    &__item {
      width: 97% !important;
      border: 1px solid #E3E6EA;
    }

    &__img {
      margin: 22px;
    }

    &__text {
      width: 300px;
      margin: 0 auto;
    }

    &__title {
      @include Title($rufina_bold, 23px, 15px 0);
    }

    &__subtitle {
      color: #818181;
      padding: 10px 0;
      line-height: 25px;
      padding-bottom: 40px;
    }

    &__button {
      padding: 20px 0 45px 0;
    }
  }

  .slick-prev:before, 
  .slick-next:before {
    font-size: 25px;
    color: #fb9d9d;
  }

  .slick-prev {
    left: -37px;
  }
</style>