<template>
    <button 
      id="button" 
      v-bind:type="type" 
      v-bind:class="{ round: isRound }"
      @click="onClick">{{title}}
    </button>
</template>

<script>
  export default {
    name: 'Button',
    props: ['type', 'title', 'isRound', 'clicked', 'onClickProp'],
    methods: {
      onClick: function() {
        this.$emit('clicked');
        if (this.$props.onClickProp) {
          this.$props.onClickProp();
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '../styles/_vars.scss';

  #button {
    font-family: $roboto_medium;
    background: #FF817E;
    border: none;
    color: #fff;
    padding: 15px 30px;
    font-size: 15px;
  }

  #button:hover {
    cursor: pointer;
    color: #000;
  }

  .round {
    border-radius: 30px;
  }
</style>