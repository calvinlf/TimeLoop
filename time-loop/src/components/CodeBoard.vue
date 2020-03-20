<template>
    <div class="codeBoard">
        <div class="centered">
            <div class="text-center text-primary">
                <p></p>
                <div class="grid">
                    <div><button @click="str += '1'">1</button></div>
                    <div><button @click="str += '2'">2</button></div>
                    <div><button @click="str += '3'">3</button></div>
                    <div><button @click="str += '4'">4</button></div>
                    <div><button @click="str += '5'">5</button></div>
                    <div><button @click="str += '6'">6</button></div>
                    <div><button @click="str += '7'">7</button></div>
                    <div><button @click="str += '8'">8</button></div>
                    <div><button @click="str += '9'">9</button></div>
                </div>
                <div><button @click="success()">Enter</button></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() { return {
          str: '',
          isOpen: false
        }},
        methods: {
            success: function() {
                if (this.str === '5437' && !this.isOpen) {
                    this.$root.$data.current.text = 'The door opens!'
                    this.$root.$data.current.buttonGoal[0].buttonsText.push('Go Forward')
                    this.$root.$data.current.buttonGoal[0].text = 'You see more hallway in front of you. Now the door is open.'
                }
                this.str = ''
            }
        }
    }
</script>