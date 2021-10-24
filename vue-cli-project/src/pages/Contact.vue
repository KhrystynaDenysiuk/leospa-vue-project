<template>
  <section id="contact">
    <div class="contact__content">
      <h1 class="contact__title">Get In Touch</h1>
      <p class="contact__paragraph">
        To doesn't his appear replenish together called he of mad place won't 
        wherein blessed second every wherein were meat kind wherein and martcin
      </p>
    </div>
    <img src="../assets/flower-pink.png" alt="" class="contact__photo">
    <div class="contact__wrapper">
      <div class="contact__items">
        <div v-for="contactItem in contact" :key="contactItem.id">
          <ContactItem
            :imgSrc="contactItem.imgSrc"
            :title="contactItem.title"
            :description="contactItem.description"
          />
        </div>
      </div>
      <form class="signUp" @submit.prevent="checkForm">
        <div class="signUp__form-proup">
          <input 
            id="name" 
            class="signUp__form-control" 
            :class="{
              invalid: ($v.form.name.$dirty && $v.form.name.required)
                    || ($v.form.name.$dirty && $v.form.name.minLength)
            }"
            v-model.trim="form.name" 
            placeholder="Name"
          >
          <p v-if="$v.form.name.$dirty && !$v.form.name.required" class="signUp__invalid-feedback">
            Required field
          </p>
          <p v-if="$v.form.name.$dirty && !$v.form.name.minLength" class="signUp__invalid-feedback">
            There must be more than 2 letters
          </p>
        </div>
        <div class="signUp__form-proup">
          <input 
            id="email" 
            type="email" 
            class="signUp__form-control" 
            :class="{
              invalid: ($v.form.email.$dirty && $v.form.email.required) 
                    || ($v.form.email.$dirty && $v.form.email.email)
            }"
            v-model.trim="form.email" 
            placeholder="Email Address"
          >
          <p v-if="$v.form.email.$dirty && !$v.form.email.required" class="signUp__invalid-feedback">
            Required field
          </p>
          <p v-if="$v.form.email.$dirty && !$v.form.email.email" class="signUp__invalid-feedback">
            The email is incorrect
          </p>
        </div>
        <div class="signUp__form-proup">
          <textarea 
            id="comment" 
            class="signUp__form-control" 
            v-model="form.comment" 
            placeholder="Write comment"
            :class="{
              invalid: $v.form.comment.$dirty && !$v.form.comment.required
            }"
        >
          </textarea>
          <p v-if="$v.form.comment.$dirty && !$v.form.comment.required" class="signUp__invalid-feedback">
            Required field
          </p>
        </div>
        <div class="contact__button">
          <Button type="submit" title="SUBMIT NOW" :isRound="true" />
        </div>
      </form>
    </div>
    <google-map />
  </section>
</template>

<script>

import Button from '../components/Button.vue';
import ContactItem from './ContactItem.vue';

import { required, minLength, email } from 'vuelidate/lib/validators';

import GoogleMap from ".//GoogleMap";

import map from '../assets/map.png';
import emails from '../assets/email.png';
import phoneNumber from '../assets/phoneNumber.png';

  export default {
    name: 'Contact',
    data() {
      return {
        form: {
          name: '',
          email: '',
          comment: ''
        },
        contact: [
          {
            id: 1,
            imgSrc: map,
            title: '848 E 28th ST BROOKLYN',
            description: "NEW YORK, USA",
          },
          {
            id: 2,
            imgSrc: emails,
            title: 'example@leospa.com',
            description: "example@leospa.com",
          },
          {
            id: 3,
            imgSrc: phoneNumber,
            title: '+02 365 2365 3265 (02)',
            description: "+01 365 2365 3265 (04)",
          },
        ],
        maps: {
          google: null,
          map: null
        }
      }
    },
    validations: {
      form: {
        name: { required, minLength: minLength(2) },
        email: { required, email },
        comment: { required }
      }
    },
    methods: {
      checkForm() {
        if (this.$v.$invalid) {
          this.$v.$touch()
          return
        }
        console.log(this.form)
        console.log({ ...this.form })
        console.log(Object.assign({}, this.form))

      }
    },
    components: {
      Button,
      ContactItem,
      GoogleMap
    },
  }
</script>

<style lang="scss">
  @import '../styles/_vars.scss';

  #contact {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding-top: 150px;
  }

  .contact {
    
    &__content {
      width: 700px;
      margin: 0 auto;
      text-align: center;
      padding-bottom: 50px;
      position: relative;
    }

    &__title {
      font-size: 40px;
      padding: 33px 0;
      font-family: $rufina_bold;
    }

    &__paragraph {
      line-height: 25px;
      color: #818181;
      font-family: $roboto_light;
    }

    &__photo {
      position: absolute;
      top: 9%;
      right: 16%;
    }

    &__wrapper {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 40px 0;
    }

    &__items {
      width: 400px;
    }

    &__button {
      padding-top: 20px;
    }
  }

  .location {
    display: flex;
    align-items: center;
    color: #818181;
    padding-bottom: 30px;
    
    &__photo {
      border: 1px solid #ff817e;
      border-radius: 50%;
      background: #ff817e;
      width: 45px;
      height: 45px;
      position: relative;
    }

    &__img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 15px;
      height: 15px;
    }

    &__address {
      padding-left: 20px;
      line-height: 24px;
      font-family: $roboto_regular;
    }
  }

  .signUp {
    display: flex;
    flex-direction: column;
    font-family: $roboto_regular;

    &__form-proup {
      padding-bottom: 20px;
    }

    &__invalid-feedback {
      color: #ff0000;
      margin-top: 4px;
      font-size: 13px;
    }

    &__form-control {
      width: 550px;
      height: 50px;
      padding-left: 10px;
      font-size: 13px;
      border: 1px solid #ccc;

      &.invalid {
        border-color: #ff0000;
      }
    }
  }

  input {
    font-family: $roboto_regular;
  }

  textarea {
    font-family: $roboto_regular;
    resize: none;
  }

  #comment {
    padding-top: 10px;
  }

</style>