exports.rooms = [
    {
        name: 'left',
        img: '',
        text: '',
        buttonsText: [],
        buttonGoal: [],
        comp: {
            created: function () {
                if (this.$root.$data.state.indexOf('DoorOpen-wyn') !== -1) {
                    this.$root.$data.current.text = 'You see more hallway in front of you. Now the door is open.'
                    this.$root.$data.current.buttonsText = ['Go Back', 'Go Down The Hall', 'Go Through Door']
                    this.$root.$data.current.buttonGoal = ['corridor', 'left2', 'wyn']
                } else {
                    this.$root.$data.current.text = 'You see more hallway in front of you.  It appears that there is door to your right labeled <Strong>Wyn</Strong> and a hallway in front of you.'
                    this.$root.$data.current.buttonsText = ['Check Door', 'Go Back', 'Go Down The Hall']
                    this.$root.$data.current.buttonGoal = ['code-wyn', 'corridor', 'left2']
                }
            }
        }
    },
    {
        name: 'code-wyn',
        img: '',
        text: 'It looks like will need to put in a code to open the door.',
        buttonsText: ['Go Back'],
        buttonGoal: ['left'],
        comp: 'CodeBoard',
        props: { room: 'wyn'}
    },
    {
        name: 'left2',
        img: '',
        text: '',
        buttonsText: [],
        buttonGoal: [],
        comp: {
            created: function () {
                if (this.$root.$data.state.indexOf('DoorOpen-kirk') !== -1) {
                    this.$root.$data.current.text = 'You see more hallway in front of you. Now the door is open.'
                    this.$root.$data.current.buttonsText = ['Go Back', 'Go Down The Hall', 'Go Through Door']
                    this.$root.$data.current.buttonGoal = ['corridor', 'left3', 'kirk']
                } else {
                    this.$root.$data.current.text = 'You see more hallway in front of you. It appears that there is a door to the inside of the curve labeled <Strong>KirK</Strong> and a hallway continues.'
                    this.$root.$data.current.buttonsText = ['Check Door', 'Go Back', 'Go Down The Hall']
                    this.$root.$data.current.buttonGoal = ['code-kirk', 'left', 'left3']
                }
            }
        }
    },
    {
        name: 'code-kirk',
        img: '',
        text: 'It looks like will need to put in a code to open the door.',
        buttonsText: ['Go Back'],
        buttonGoal: ['left2'],
        comp: 'CodeBoard',
        props: { room: 'kirk'}
    },
    {
        name: 'left3',
        img: '',
        text: '',
        buttonsText: [],
        buttonGoal: [],
        comp: {
            created: function () {
                if (this.$root.$data.state.indexOf('DoorOpen-kirk') !== -1) {
                    this.$root.$data.current.text = 'You see more hallway in front of you. Now the door is open.'
                    this.$root.$data.current.buttonsText = ['Go Back', 'Go Down The Hall', 'Go Through Door']
                    this.$root.$data.current.buttonGoal = ['corridor', 'left4', 'fung']
                } else {
                    this.$root.$data.current.text = 'You see more hallway in front of you. It appears that there is a door to the inside of the curve labeled <strong>FUNG</strong> and the hallway continues.'
                    this.$root.$data.current.buttonsText = ['Check Door', 'Go Back', 'Go Down The Hall']
                    this.$root.$data.current.buttonGoal = ['code-fung', 'left2', 'left4']
                }
            }
        }
    },
    {
        name: 'code-fung',
        img: '',
        text: 'It looks like will need to put in a code to open the door.',
        buttonsText: ['Go Back'],
        buttonGoal: ['left3'],
        comp: 'CodeBoard',
        props: { room: 'fung'}
    },
    {
        name: 'left4',
        img: '',
        text: '',
        buttonsText: [],
        buttonGoal: [],
        comp: {
            created: function () {
                if (this.$root.$data.state.indexOf('DoorOpen-lumaworm') !== -1) {
                    this.$root.$data.current.text = 'You see more hallway in front of you. Now the door is open. '
                    this.$root.$data.current.buttonsText = ['Go Back', 'Go Forward', 'Go Through Outside Door', 'Go Through Inside Door']
                    this.$root.$data.current.buttonGoal = ['left3', 'left5', 'suit-up', 'lumaworm-air-lock']
                } else {
                    this.$root.$data.current.text = 'You see more hallway in front of you. Outward there is a door. It appears that there is a locked door to the inside of the curve labeled <strong>LUMAWORM</strong>'
                    this.$root.$data.current.buttonsText = ['Check Inside Door', 'Go Back', 'Go Forward', 'Go Through Outside Door']
                    this.$root.$data.current.buttonGoal = ['code-lumaworm', 'left3', 'left5', 'suit-up']
                }
            }
        }
    },
    {
        name: 'code-lumaworm',
        img: '',
        text: 'It looks like will need to put in a code to open the door.',
        buttonsText: ['Go Back'],
        buttonGoal: ['left4'],
        comp: 'CodeBoard',
        props: { room: 'lumaworm'}
    },
    {
        name: 'left5',
        img: '',
        text: '',
        buttonsText: [],
        buttonGoal: [],
        comp: {
            created: function () {
                if (this.$root.$data.state.indexOf('DoorOpen-clougae') !== -1) {
                    this.$root.$data.current.text = 'You are at the end of the hall. Now the door is open. '
                    this.$root.$data.current.buttonsText = ['Go Back', 'Go Through Door']
                    this.$root.$data.current.buttonGoal = ['left4', 'clougae-air-lock']
                } else {
                    this.$root.$data.current.text = 'You see a porthole that ends the hallway. It appears that there is a door to the inside of the curve labeled <Strong>CLOUGAE.</Strong>'
                    this.$root.$data.current.buttonsText = ['Check Door', 'Go Back']
                    this.$root.$data.current.buttonGoal = ['code-clougae', 'left4']
                }
            }
        }
    },
    {
        name: 'code-clougae',
        img: '',
        text: 'It looks like will need to put in a code to open the door.',
        buttonsText: ['Go Back'],
        buttonGoal: ['left4'],
        comp: 'CodeBoard',
        props: { room: 'clougae'}
    },
    {
        name: 'wyn',
        img: '/images/monster.jpg',
        text: 'Yippie Skippie it\'s an enourmous tenticled face suckin\' monster!',
        buttonsText: ['Ouchy'],
        buttonGoal: ['start']
    },
    {
        name: 'kirk',
        img: '',
        text: `You see a gray humanoid sulking in the corner. It quickly confronts you and tells you "You're new here."`,
        buttonsText: ['Respond', 'Scram'],
        buttonGoal: ['kirk', 'left2'],
        comp: {
            created: function () {
                if (this.$root.$data.past === 'Ask him to to be your escape pilot') {
                    if (this.$root.$data.secrets.indexOf('ReactorInfo') !== -1) {
                        this.$root.$data.current.text = 'Kirk ask you how you are going to escape if the pod won\'t fly for you. You describe the reactor and how if it the alarm is triggered, then anyone can fly it. Kirk agrees to come with you'
                        this.$root.$data.current.buttonsText = ['Go Back']
                        this.$root.$data.current.buttonGoal = ['left2']
                        this.$root.$data.items.push({
                            image: './images/kirk.jpg',
                            name: 'KirK'
                        })
                    } else {
                        this.$root.$data.current.text = 'KirK says, "Have you figured out how to get the pod to work for you?'
                        this.$root.$data.current.buttonsText = ['No...']
                        this.$root.$data.current.buttonGoal = ['left2']
                    }
                } else if (this.$root.$data.secrets.indexOf('EscapePod') !== -1 && this.$root.$data.secrets.indexOf('KirkPilot') !== -1) {
                    this.$root.$data.current.text = 'You see KirK'
                    this.$root.$data.current.buttonsText = ['Go Back', 'Ask him to to be your escape pilot']
                    this.$root.$data.current.buttonGoal = ['left2', 'kirk']
                } else {
                    this.$root.$data.current.text = `You see a gray humanoid sulking in the corner. It quickly confronts you and tells you "You're new here."`
                    this.$root.$data.current.buttonsText = ['Respond', 'Scram']
                    this.$root.$data.current.buttonGoal = ['kirk', 'left2']
                }
            }
        }
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
        text: 'You enter a stark room full of space suits and ventilators. You hear people talking behind you in the hallway.',
        buttonsText: ['Hide', 'Scram', 'Confront those Dudes'],
        buttonGoal: ['1suit-up', 'left3', 'left3-confront'],
    },
    {
        name: '1fung',
        img: '',
        text: 'It is actually quite peaceful, the blue moss covering the red bark is beautiful. You find walk around, and observe a medium' +
        'sized window at the far end. You see movement behind it and decide it is time to leave.',
        buttonsText: ['leave'],
        buttonGoal: ['left3'],
    },
    {
        name: '1suit-up',
        img: '',
        text: 'Frantic, you crawl behind a large desk, and see two men walk by the enteramce of the room, pausing momentarily to look into the room, then turn around. Their chatting continues into the distance.',
        buttonsText: ['Admit it you\'re a Coward'],
        buttonGoal: ['start'],
    },
    {
        name: 'left3-confront',
        img: '',
        text: 'Two gaurds see you, pause for only a second, and all goes black.',
        buttonsText: ['Ouchy'],
        buttonGoal: ['start'],
    },
]
