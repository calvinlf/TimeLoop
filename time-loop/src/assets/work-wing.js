exports.rooms = [
    {
        name: 'right',
        img: '/images/space.jpg',
        text: 'You look out a porthole and see space. As you look at the planet you realize it is Earth, but you have no idea what that means.',
        buttonsText: ['Go Forward', 'Go Back'],
        buttonGoal: ['deadEnd', 'corridor']
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
                    this.$root.$data.deaths += .5
                    this.$root.$data.items = []
                } else if (this.$root.$data.secrets.indexOf('Guard2') === -1) {
                    this.$root.$data.secrets.push('Guard2')
                    this.$root.$data.deaths += .5
                    this.$root.$data.items = []
                    this.$root.$data.current.text.concat('As you die you realize you might be able to dodge the guards bullets next time...')
                } else if (this.$root.$data.state.indexOf('GuardDead') === -1) {
                    this.$root.$data.state.push('GuardDead')
                    this.$root.$data.current.text = 'This time you are ready for the guard. You dodge the bullets and punch his face as he tries to overcome his shock. He goes down hard. You grab his gun.'
                    this.$root.$data.current.buttonsText = ['Go Back', 'Go Forward']
                    this.$root.$data.current.buttonGoal = ['right', 'right2']
                    this.$root.$data.items.push({
                        name: 'gun',
                        image: '/images/gun.jpg'
                    })
                } else {
                    this.$root.$data.current.text = 'You see a dead guard'
                    this.$root.$data.current.img = ''
                    this.$root.$data.current.buttonsText = ['Go Back', 'Go Forward']
                    this.$root.$data.current.buttonGoal = ['right', 'right2']
                }

            }
        }
    },
    {
        name: 'right2',
        text: 'right2',
        img: '',
        buttonsText: ['Go Into Station', 'Go Back', 'Go Into Cafeteria'],
        buttonGoal: ['right3', 'deadEnd', 'cafe']
    },
    {
        name: 'right3',
        text: 'right3',
        img: '',
        buttonsText: ['Go Back', 'Go Further Into Station', 'Go Into Lab'],
        buttonGoal: ['right2', 'right4', 'lab1']
    },
    {
        name: 'right4',
        text: 'right4',
        img: '',
        buttonsText: ['Go Back', 'Go Into Server Room', 'Go Into Office', 'Go Down'],
        buttonGoal: ['right3', 'server', 'office', 'reactor']
    },
    {
        name: 'server',
        text: 'server',
        img: '',
        buttonsText: ['Go Back'],
        buttonGoal: ['right4']
    },
    {
        name: 'office',
        text: 'office',
        img: '',
        buttonsText: ['Go Back'],
        buttonGoal: ['right4']
    },
    {
        name: 'reactor',
        text: 'reactor',
        img: '',
        buttonsText: ['Go Up'],
        buttonGoal: ['right4']
    }
]