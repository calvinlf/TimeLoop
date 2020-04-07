const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const mongoose = require('mongoose');

// connect to the database
const gamesConn = mongoose.createConnection('mongodb://localhost:27017/games', {
    useNewUrlParser: true
});

const usersConn = mongoose.createConnection('mongodb://localhost:27017/users', {
    useNewUrlParser: true
});

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

const gameSchema = new mongoose.Schema({
    username: String,
    secrets: [String],
    items:  [{
        name: String,
        image: String
    }],
    state:  [String],
    room: String,
    deaths: Number
});

const Game = gamesConn.model('game', gameSchema);
const User = usersConn.model('user', userSchema);

app.use('/', (req, res, next) => {
    console.log(`Request Type: ${req.method} called on path ${req.path}`)
    next()
})

app.put('/game', async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.body.username,
            password: req.body.password
        })
        if (user === null) {
            console.log(' --invalid user with username:', req.body.username)
            res.sendStatus(404)
            return
        }
        const game = await Game.findOne({
            username: req.body.username
        })
        game.secrets = req.body.secrets
        game.items = req.body.items
        game.state = req.body.state
        game.room = req.body.room
        game.deaths = req.body.deaths
        game.save()
        res.send(game)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
});

app.get('/game', async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.headers.username,
            password: req.headers.password
        })
        if (user === null) {
            console.log(' --invalid user with username:', req.body.username)
            res.sendStatus(404)
            return
        }
        const game = await Game.findOne({
            username: req.headers.username
        })
        res.send(game)
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
});

app.post('/game', async (req, res) => {
    try {
        const searchedUser = await User.findOne({
            username: req.body.username
        });
        if (searchedUser !== null) {
            res.sendStatus(403)
            return
        }
        const newUser = new User({
            username: req.body.username,
            password: req.body.password,
        })
        const game = new Game({
            username: req.body.username,
            secrets: req.body.secrets,
            items: req.body.items,
            state: req.body.state,
            room: req.body.room,
            deaths: req.body.deaths
        })
        await newUser.save()
        await game.save()
        res.send(game)
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
});


app.listen(3002, () => console.log('Server listening on port 3002'))
