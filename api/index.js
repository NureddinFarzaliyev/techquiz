require('dotenv').config()

const express = require('express')
const app = express();

const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const multer = require('multer')
const { GridFsStorage } = require("multer-gridfs-storage")
const upload = multer( {storage: multer.memoryStorage()})

app.use(express.json())

const port = 3000
app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})

app.get('/', (req, res) => {
    res.send('hello world')
})

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@techquiz.l1mmyw1.mongodb.net/?retryWrites=true&w=majority&appName=techquiz`)
.then(() => {console.log('DB Connected Successfully')}).catch((err) => {console.log(err)})

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true
    },
    profilePicture: {
        type: Buffer,
        required: false
    }
})
const User = mongoose.model('User', userSchema)

app.post('/user/new', upload.single('profilePicture') , async (req, res) => {
    try {

        const existingUser = User.findOne( {username: req.body.username} )
        if(existingUser){
            res.send(JSON.stringify('Username already exists'))
        }

        const hash  = await bcrypt.hash(req.body.password, 10)

        const user = new User({
            username: req.body.username,
            password: hash,
            points: 0,
            profilePicture: req.file ? req.file.buffer : null
        })

        await user.save()
        
        res.status(201)
        res.send(user)

        console.log(`User ${req.body.username} sent to database`)
        
    } catch (error) {
        res.status(500)
        res.send(error)
    }
})

app.get('/user/login', async (req, res) => {
    try{
        const user = await User.findOne( {username: req.body.username} )

        if(user){
            const isCorrect = await bcrypt.compare(req.body.password, user.password)

            if(isCorrect){
                res.send(JSON.stringify(user))
            }else{
                res.send(JSON.stringify('unauthorized'))
            }

        }else{

            res.send(JSON.stringify('user does not exist'))

        }
    }catch (error){
        res.send(error)
    }

})

