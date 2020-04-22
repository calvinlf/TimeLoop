exports.rooms = [
    {
        name: 'lab1',
        text: 'Lab1',
        img: '',
        buttonsText: ['Leave Lab', 'Go To Section 2'],
        buttonGoal: ['right2', 'lab2']
    },
    {
        name: 'lab2',
        text: 'Lab2',
        img: '',
        buttonsText: ['Go To Section 1', 'Go To Section 3'],
        buttonGoal: ['lab1','lab3']
    },
    {
        name: 'lab3',
        text: 'Lab3',
        img: '',
        buttonsText: ['Go To Section 2', 'Go To Section 4'],
        buttonGoal: ['lab2','lab4']
    },
    {
        name: 'lab4',
        text: 'Lab4',
        img: '',
        buttonsText: ['Go To Section 3', 'Go To Section 5'],
        buttonGoal: ['lab3','lab5']
    },
    {
        name: 'lab5',
        text: 'Lab5',
        img: '',
        buttonsText: ['Go To Section 4'],
        buttonGoal: ['lab4']
    },
]