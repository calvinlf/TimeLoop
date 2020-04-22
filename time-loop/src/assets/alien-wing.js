exports.rooms = [
    {
        name: 'left',
        img: '',
        text: '',
        buttonsText: [],
        buttonGoal: [],
        comp: {
            created: function () {
                if (this.$root.$data.state.indexOf('DoorOpen') !== -1) {
                    this.$root.$data.current.text = 'You see more hallway in front of you. Now the door is open.'
                    this.$root.$data.current.buttonsText = ['Check Door', 'Go Back', 'Go Down The Hall', 'Go Through Door']
                    this.$root.$data.current.buttonGoal = ['code', 'corridor', 'left2', 'wyn']
                } else {
                    this.$root.$data.current.text = 'You see more hallway in front of you.  It appears that there is door to your right labeled Wyn and a hallway in front of you.'
                    this.$root.$data.current.buttonsText = ['Check Door', 'Go Back', 'Go Down The Hall']
                    this.$root.$data.current.buttonGoal = ['code', 'corridor', 'left2']
                }
            }
        }
    },
    {
        name: 'code',
        img: '',
        text: 'It looks like will need to put in a code to open the door.',
        buttonsText: ['Go Back'],
        buttonGoal: ['left'],
        comp: 'CodeBoard'
    },
    {
        name: 'wyn',
        img: '/images/monster.jpg',
        text: 'Yippie Skippie it\'s an enourmous tenticled face suckin\' monster!',
        buttonsText: ['Ouchy'],
        buttonGoal: ['start']
    },
    {
        name: 'left2',
        img: '',
        text: 'You see more hallway in front of you. It appears that there is a door to the inside of the curve labled KirK and a hallway continues.',
        buttonsText: ['Check Door', 'Go Back', 'Go Forward', 'Go Through Door'],
        buttonGoal: ['code', 'left', 'left3', 'kirk'],
    },
    {
        name: 'left3',
        img: '',
        text: 'You see more hallway in front of you. It appears that there is a door to the inside of the curve labeled <strong>FUNG</strong> and the hallway continues.',
        buttonsText: ['Check Door', 'Go Back', 'Go Forward', 'Go Through Door'],
        buttonGoal: ['code', 'left2', 'left4', 'fung'],
    },
    {
        name: 'left4',
        img: '',
        text: 'You see a door labled SAFETY SUIT REQUIRED on the outside of the curve and another door on the inside of the curve labled LumaWorm and the hallway streches forth.',
        buttonsText: ['Check Outside Door', 'Check Inside Door', 'Go Back', 'Go Forward', 'Go Through Outside Door', 'Go Through Inside Door'],
        buttonGoal: ['code', 'code', 'left3', 'left5', 'suit-up', 'lumaworm-air-lock'],
    },
    {
        name: 'left5',
        img: '',
        text: 'You see a porthole that ends the hallway. It appears that there is a door to the inside of the curve labeled CLOUGAE.',
        buttonsText: ['Check Door', 'Go Back', 'Go Through Door'],
        buttonGoal: ['code', 'left4', 'clougae-air-lock'],
    },
    {
        name: 'kirk',
        img: '',
        text: `You see a gray humanoid sulking in the corner. It quickly confronts you and tells you "You're new here"`,
        buttonsText: ['Respond', 'Scram'],
        buttonGoal: ['1kirk', 'left2'],
    },
    {
        name: 'fung',
        img: '',
        text: 'You see various trees with a blue growth lining each of trees\' branches',
        buttonsText: ['Investigate', 'Scram'],
        buttonGoal: ['1fung', 'left3'],
    },
    {
        name: 'lumaworm-air-lock',
        img: '',
        text: 'You see through a transparent door in front of you and hear the door slam behind. Water begins to '+
        'fill the compartment and as the water reaches your knees you see beautiful colored lights '+
        'swim around your legs. You don\'t think that you\'re losing your mind, but whose to say? The water '+
        'continues to fill the compartment and you feel tingeling senasations throughout your body as the water '+
        'envelopes you. You hold your breath and struggle to find a way out. The lights are blinding, and seem '+
        'to resemble little tic tacs swirling around in the water. What\'s a tic tac? Your body begins to relax and you let go of your breath as your sight fades',
        buttonsText: ['Relax and Give In'],
        buttonGoal: ['start'],
    },
    {
        name: 'clougae-air-lock',
        img: '',
        text: 'you enter through the door and you hear a defening sound behind you the door closes you turn around and find that you are stuck in a small closet '+
        'suddenly you hear a whoosh and air rushes in blowing you to your knees you hit your head on the door in front of you. You start to feel dizzy you look up '+
        'and see a cloud forming above you. You then see a man coming through toward you in a space suit and you fade away',
        buttonsText: ['You went and done it again admit defeat.'],
        buttonGoal: ['start'],
    },
    {
        name: 'suit-up',
        img: '',
        text: 'You enter a room full of space suits and ventilators. You hear people talking behind you in the hallway.',
        buttonsText: ['Hide', 'Scram', 'Confront those Dudes'],
        buttonGoal: ['1suit-up', 'left3', 'left3-confront'],
    },
    {
        name: '1fung',
        img: '',
        text: 'later',
        buttonsText: ['leave'],
        buttonGoal: ['left3'],
    },
    {
        name: '1kirk',
        img: '',
        text: 'later',
        buttonsText: ['leave'],
        buttonGoal: ['left2'],
    },
    {
        name: '1suit-up',
        img: '',
        text: 'later',
        buttonsText: ['Admit it you\'re a Coward'],
        buttonGoal: ['start'],
    },
    {
        name: 'left3-confront',
        img: '',
        text: 'You are shot by two guards',
        buttonsText: ['Ouchy'],
        buttonGoal: ['start'],
    },
]
