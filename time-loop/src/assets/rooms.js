const rooms = [
    {
        name: 'start',
        text1: '',
        img: '/images/corridor.jpg',
        text: 'You find yourself in a a steel utilitarian corridor.',
        buttonsText: ['Go Forward'],
        buttonGoal: ['corridor'],
        comp: {
            created: function () {
                if (this.$root.$data.deaths === .5) {
                    this.$root.$data.current.text = 'You suddenly come to. You are back in the corridor where you started. But how?? *kSHkkK* Suddenly a sharp static noise interrupts your thoughts. "What was that!?", you say. A flat, electronic voice says, *this is a test- you have been wiped to avoid information loss if you are captured- complete your mission and retrieve the device* You have no idea where the voice came from, but are determined to find out.'
                } else {
                    this.$root.$data.current.text = 'You find yourself in a a steel utilitarian corridor.'
                }
                if (this.$root.$data.deaths%1 === .5) {
                    this.$root.$data.state = []
                    this.$root.$data.items = [{
                        name: 'cufflink',
                        image: './images/cufflink.jpg'
                    }]
                    this.$root.$data.deaths += .5
                }
            }
        }
    },
    {
        name: 'corridor',
        img: '/images/split.jpg',
        text: 'The path splits in front of you.',
        buttonsText: ['Go Left', 'Go Back', 'Go Right'],
        buttonGoal: ['left', 'start', 'right']
    },
    {
        name: 'right',
        img: '/images/space.jpg',
        text: 'You look out a porthole and see space. As you look at the planet you realize it is Earth, but you have no idea what that means.',
        buttonsText: ['Go Forward', 'Go Back'],
        buttonGoal: ['deadEnd', 'corridor']
    },
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
        name: 'deadEnd',
        img: '/images/attack.jpg',
        text: 'As you turn a corner you see a guard in dark clothes. Before you can act he pulls out a small pistol. You hear no bang--only a click--as he shoots you. It hits you painfully in the chest. You slowly feel you life fading away as you are dragged down a corridor. You hear the guard mutter, "5-4-3-7". As he pulls you through the door you feel your life slipping away...',
        buttonsText: ['Continue...'],
        buttonGoal: ['start'],
        comp: {
            created: function () {
                if (this.$root.$data.secrets.indexOf('Guard1') === -1) {
                    this.$root.$data.secrets.push('Guard1')
                } else if (this.$root.$data.secrets.indexOf('Guard2') === -1) {
                    this.$root.$data.secrets.push('Guard2')
                    this.$root.$data.current.text.concat('As you die you realize you might be able to dodge the guards bullets next time...')
                } else if (this.$root.$data.state.indexOf('GuardDead') === -1) {
                    this.$root.$data.state.push('GuardDead')
                    this.$root.$data.current.text = 'This time you are ready for the guard. You dodge the bullets and punch his face as he tries to overcome his shock. He goes down hard. You grab his gun.'
                    this.$root.$data.current.buttonsText = ['Go Back']
                    this.$root.$data.current.buttonGoal = ['right']
                    this.$root.$data.items.push({
                        name: 'gun',
                        image: '/images/gun.jpg'
                    })
                    return
                } else {
                    this.$root.$data.current.text = 'You see a dead guard'
                    this.$root.$data.current.img = ''
                    this.$root.$data.current.buttonsText = ['Go Back']
                    this.$root.$data.current.buttonGoal = ['right']
                    return
                }
                this.$root.$data.deaths += .5
                this.$root.$data.items = []

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
    }
]

exports.getRooms = () => {
    return rooms;
}