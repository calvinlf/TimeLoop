exports.rooms = [
    {
        name: 'left',
        img: '',
        text: 'You see more hallway in front of you. It appears that there is door blocking your way.',
        buttonsText: ['Check Door', 'Go Back'],
        buttonGoal: ['code', 'corridor'],
        comp: {
            created: function () {
                if (this.$root.$data.state.indexOf('DoorOpen') !== -1) {
                    this.$root.$data.current.text = 'You see more hallway in front of you. Now the door is open.'
                    this.$root.$data.current.buttonsText = ['Check Door', 'Go Back', 'Go Through Door']
                    this.$root.$data.current.buttonGoal = ['code', 'corridor', 'win']
                } else {
                    this.$root.$data.current.text = 'You see more hallway in front of you. It appears that there is door blocking your way.'
                    this.$root.$data.current.buttonsText = ['Check Door', 'Go Back']
                    this.$root.$data.current.buttonGoal = ['code', 'corridor']
                }
            }
        }
    },
    {
        name: 'code',
        img: '',
        text: 'It looks like will need to put in a code to continue.',
        buttonsText: ['Go Back'],
        buttonGoal: ['left'],
        comp: 'CodeBoard'
    },
    {
        name: 'win',
        img: '/images/monster.jpg',
        text: 'You win!! For now...',
        buttonsText: [],
        buttonGoal: []
    },
]