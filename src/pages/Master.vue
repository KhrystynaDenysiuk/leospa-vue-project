<template>
  <div class="person">
    <div class="person__photo">
      <img :src="imgSrc" alt="" class="person__img">
    </div>
    <div class="person__information">
      <div class="person__info">
        <h3 class="person__title">{{title}}</h3>
        <p class="person__subtitle">{{description}}</p>
      </div>
      <div class="person__icons">
        <div class="person__facebook">
            <a href="https://uk-ua.facebook.com/" target="_blank">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
        </div>
        <div class="person__twitter">
          <a href="https://twitter.com/?lang=uk" target="_blank">
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </div>
        <div class="person__instagram">
          <a href="https://www.instagram.com/" target="_blank">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
        <div class="person__google">
          <a href="https://myaccount.google.com/" target="_blank">
            <i class="fa fa-google-plus" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Master',
    props: ['imgSrc', 'title', 'description'],
  }
</script>