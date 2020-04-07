<template>
    <div class="save">
        <label>
            <input class="input" type="text" name="username" v-model="username" placeholder="Username"/>
            <input class="input" type="password" name="password" v-model="password" placeholder="Password"/>
        </label>
        <button class="btn btn-primary btn-lg save-button" type="button" v-on:click="signUp()">Sign Up</button>
        <br>
        <button class="btn btn-primary btn-lg save-button" type="button" v-on:click="login()">Resume Game</button>
        <br>
        <button class="btn btn-primary btn-lg save-button" type="button" v-on:click="save()">Save Game</button>
        <p>{{note}}</p>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                username: '',
                password: '',
                note: '',
            }
        },
        methods: {
            async signUp() {
                try {
                    if (this.username === '') throw 'empty username'
                    let deaths = this.$root.$data.deaths
                    if(this.$root.$data.deaths%1 === .5) {
                        deaths -= .5
                    }
                    await axios.post('/game', {
                        username: this.username,
                        password: this.password,
                        secrets: this.$root.$data.secrets,
                        items: this.$root.$data.items,
                        state: this.$root.$data.state,
                        room: this.$root.$data.current.name,
                        deaths: deaths
                    })
                    this.note = this.username + ' has been signed up'
                } catch (error) {
                    this.note = 'Invalid Username or Password'
                    console.log(error)
                }
            },
            async login() {
                try {
                    if (this.username === '') throw 'empty username'
                    const response = await axios.get('/game', {
                        headers: {
                            'username': this.username,
                            'password': this.password
                        }
                    })
                    this.note = 'Logged in as ' + this.username
                    this.$root.$data.current = this.$root.$data.rooms.find((r) => {
                        return r.name === response.data.room
                    })
                    this.$root.$data.secrets = response.data.secrets
                    this.$root.$data.items = response.data.items
                    this.$root.$data.state = response.data.state
                    this.$root.$data.deaths = response.data.deaths
                } catch (error) {
                    this.note = 'Username or Password is incorrect'
                    console.log(error)
                }
            },
            async save() {
                try {
                    if (this.username === '') throw 'empty username'
                    let deaths = this.$root.$data.deaths
                    if(this.$root.$data.deaths%1 === .5) {
                        deaths -= .5
                    }
                    await axios.put('/game', {
                        username: this.username,
                        password: this.password,
                        secrets: this.$root.$data.secrets,
                        items: this.$root.$data.items,
                        state: this.$root.$data.state,
                        room: this.$root.$data.current.name,
                        deaths: deaths
                    })
                    this.note = 'Game save for ' + this.username
                } catch (error) {
                    this.note = 'Invalid Username or Password'
                    console.log(error)
                }
            }
        }
    }
</script>

<style>
    .input {
        margin: 5px;
    }

    .save-button {
        width: 70%;
    }
</style>