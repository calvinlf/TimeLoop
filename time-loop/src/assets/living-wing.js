exports.rooms = [
    {
        name: 'cafe',
        text: 'Cafeteria',
        img: '',
        buttonsText: ['Go Into Station', 'Check Closet', 'Go Into Scientist Dorms', 'Go Into Crew Dorms', 'Go into Kitchen'],
        buttonGoal: ['right2', 'cleaning', 'sci-dorms', 'crew-dorm', 'kitchen']
    },
    {
        name: 'cleaning',
        text: 'cleaning closet',
        img: '',
        buttonsText: ['Return to Kitchen'],
        buttonGoal: ['cafe']
    },
    {
        name: 'sci-dorms',
        text: 'sci-dorms',
        img: '',
        buttonsText: ['Return to Cafeteria', 'Check Escape Pods'],
        buttonGoal: ['right2', 'escape']
    },
    {
        name: 'crew-dorms',
        text: 'crew-dorms',
        img: '',
        buttonsText: ['Return to Cafeteria', 'Check Escape Pods', 'Go to Kitchen'],
        buttonGoal: ['right2', 'escape', 'kitchen']
    },
    {
        name: 'kitchen',
        text: 'kitchen',
        img: '',
        buttonsText: ['Return to Cafeteria', 'Go Into Crew Dorms'],
        buttonGoal: ['cafe', 'crew-dorms']
    },
    {
        name: 'escape',
        text: 'escape',
        img: '',
        buttonsText: ['Go Into Scientists Dorms', 'Go Into Crew Dorms'],
        buttonGoal: ['sci-dorms', 'crew-dorms']
    },
]