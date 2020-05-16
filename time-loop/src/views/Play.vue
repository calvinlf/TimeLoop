<template>
  <div class="play">
    <div class="bg-light">
      <br>
      <component v-if="comp" :is="comp" v-bind="props"></component>
      <img v-if="img.length > 0" :src="img" class="w-50" alt="Image">
      <p v-html="text">{{text}}</p>
      <button v-for="buttonText in buttonsText" :key="buttonText" type="button" class="btn btn-primary btn-lg" v-on:click="followButton(buttonText)">{{buttonText}}</button>
      <br v-for="i in 5" :key="i">
    </div>
  </div>
</template>

<script>
  import CodeBoard from '../components/CodeBoard'
  export default {
    name: 'Play',
    data() {
      return {
        componentKey: 0,
      };
    },
    computed: {
      comp() {
        return this.$root.$data.current.comp
      },
      img() {
        return this.$root.$data.current.img ? this.$root.$data.current.img : ''
      },
      text() {
        return this.$root.$data.current.text
      },
      buttonsText() {
        return this.$root.$data.current.buttonsText
      },
      buttonGoal() {
        return this.$root.$data.current.buttonGoal
      },
      props() {
        return this.$root.$data.current.props ? this.$root.$data.current.props : {}
      }
    },
    methods: {
      followButton: function (text) {
        this.$root.$data.past = text
        this.$root.$data.time += 1
        const isText = (element) => element === text // create function to find the index of button pushed
        const index = this.$root.$data.current.buttonsText.findIndex(isText) // find the index of button pushed
        if (this.$root.$data.current.name === this.$root.$data.current.buttonGoal[index]) {
          const nextComp = this.$root.$data.current.comp
          this.$root.$data.current.comp = {}
          this.$nextTick(() => {
            this.$root.$data.current.comp = nextComp
          });
          return
        }
        this.$root.$data.current = this.$root.$data.rooms.find((r) => {return r.name === this.$root.$data.current.buttonGoal[index]}) // change room
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
