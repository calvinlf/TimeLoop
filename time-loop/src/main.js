import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const start = {
  text1: '',
  img: '/images/corridor.jpg',
  text: 'You find yourself in a a steel utilitarian corridor.',
  buttonsText: ['Go Forward'],
  buttonGoal: [],
  comp: {
    created: function () {
      if (this.$root.$data.deaths === .5) {
        this.$root.$data.current.text = 'You suddenly come to. You are back in the corridor where you started. But how?? *kSHkkK* Suddenly a sharp static noise interrupts your thoughts. "What was that!?", you say. A flat, electronic voice says, *this is a test- you have been wiped to avoid information loss if you are captured- complete your mission and retrieve the device* You have no idea where the voice came from, but are determined to find out.'
        this.$root.$data.deaths += .5
      } else {
        this.$root.$data.current.text = 'You find yourself in a a steel utilitarian corridor.'
      }
    }
  }
}

const corridor = {
  img: '/images/split.jpg',
  text: 'The path splits in front of you.',
  buttonsText: ['Go Left', 'Go Back', 'Go Right'],
  buttonGoal: []
}

const right = {
  img: '/images/space.jpg',
  text: 'The path splits in front of you.',
  buttonsText: ['Go Forward', 'Go Back'],
  buttonGoal: []
}

const left = {
  img: '',
  text: 'You see more hallway in front of you. I appears that there is door blocking your way.',
  buttonsText: ['Check Door', 'Go Back'],
  buttonGoal: []
}

const deadEnd = {
  img: '/images/attack.jpg',
  text: 'As you turn a corner you see a guard in dark clothes. Before you can act he pulls out a small pistol. You hear no bang--only a click--as he shoots you. It hits you painfully in the chest. You slowly feel you life fading away as you are dragged down a corridor. You hear the guard mutter, "5-4-3-7". As he pulls you through the door you feel your life slipping away...',
  buttonsText: ['Continue...'],
  buttonGoal: [],
  comp: {
    created: function () {
      if (this.$root.$data.secrets.indexOf('Guard1') === -1) {
        this.$root.$data.secrets.push('Guard1')
      } else if (this.$root.$data.secrets.indexOf('Guard2') === -1) {
        this.$root.$data.secrets.push('Guard2')
        this.$root.$data.current.text.concat('As you die you realize you might be able to dodge the guards bullets next time...')
      } else {
        this.$root.$data.current.text = 'This time you are ready for the guard. You dodge the bullets and punch his face as he tries to overcome his shock. He goes down hard. You grab his gun.'
        this.$root.$data.current.buttonsText = ['Go Back']
        this.$root.$data.current.buttonGoal = [right]
        this.$root.$data.items = ['gun']
        return
      }
      this.$root.$data.deaths += .5
      this.$root.$data.items = []
    }
  }
}

const code = {
  img: '',
  text: 'It looks like will need to put in a code to continue.',
  buttonsText: ['Go Back'],
  buttonGoal: [],
  comp: 'CodeBoard'
}

const win = {
  img: '/images/monster.jpg',
  text: 'You win!! For now...',
  buttonsText: [],
  buttonGoal: []
}



start.buttonGoal.push(corridor)

corridor.buttonGoal.push(left)
corridor.buttonGoal.push(start)
corridor.buttonGoal.push(right)

left.buttonGoal.push(code)
left.buttonGoal.push(corridor)

right.buttonGoal.push(deadEnd)
right.buttonGoal.push(corridor)

deadEnd.buttonGoal.push(start)
deadEnd.buttonGoal.push(right)

code.buttonGoal.push(left)
left.buttonGoal.push(win)

let data = {
  current: start,
  deaths: 0,
  secrets: [],
  items: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')

