import Vue from 'vue'
import App from './App.vue'
import router from './router'
import setup from './assets/rooms'

Vue.config.productionTip = false

const rooms = setup.getRooms()

let data = {
  rooms: rooms,
  current: rooms.find((r) => {return r.name === 'start'}),
  deaths: 0,
  secrets: [],
  items: [{
    name: 'cufflink',
    image: './images/cufflink.jpg'
  }],
  state: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')

