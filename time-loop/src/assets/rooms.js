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
    }
]

const alienWing = require('./alien-wing')
const workWing = require('./work-wing')
exports.getRooms = () => {
    return [...rooms, ...alienWing.rooms, ...workWing.rooms]
}