<template>
  <div class="play">
    <div class="bg-light">
      <br>
      <component v-if="comp" :is="comp"></component>
      <img v-if="img.length > 0" :src="img" class="w-50" alt="Image">
      <p>{{text}}</p>
      <button v-for="buttonText in buttonsText" :key="buttonText" type="button" class="btn btn-primary btn-lg" v-on:click="followButton(buttonText)">{{buttonText}}</button>
      <br v-for="i in 5" :key="i">
    </div>
  </div>
</template>

<script>
  import CodeBoard from '../components/CodeBoard'
  export default {
    name: 'Play',
    computed: {
      comp() {
        return this.$root.$data.current.comp
      },
      img() {
        return this.$root.$data.current.img
      },
      text() {
        return this.$root.$data.current.text
      },
      buttonsText() {
        return this.$root.$data.current.buttonsText
      },
      buttonGoal() {
        return this.$root.$data.current.buttonGoal
      }
    },
    methods: {
      followButton: function (text) {
        const isText = (element) => element === text
        const index = this.$root.$data.current.buttonsText.findIndex(isText)
        this.$root.$data.current = this.$root.$data.rooms.find((r) => {return r.name === this.$root.$data.current.buttonGoal[index]})
      }
    },
    components: {
      CodeBoard
    }
  }
</script>

<style scoped>
  .play {
    text-align: center !important;
  }
</style>
