require('dotenv').config()

const express = require('express')
const app = express();

const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const multer = require('multer')
const upload = multer( {storage: multer.memoryStorage()})
const cors = require('cors')

app.use(express.json())
app.use(cors())

const port = 3000
app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})

app.get('/', (req, res) => {
    res.send(JSON.stringify('hello world'))
})

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@techquiz.l1mmyw1.mongodb.net/?retryWrites=true&w=majority&appName=techquiz`)
.then(() => {console.log('DB Connected Successfully')}).catch((err) => {console.log(err)})

// ! REGISTER NEW USER

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

        const existingUser = await User.findOne( {username: req.body.username} )

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
        res.send(error.message)
    }
})

// ! LOGIN NEW USER

app.post('/user/login', async (req, res) => {
    try{
        const user = await User.findOne( {username: req.body.username} )

        console.log(`TRYING TO LOGIN WITH: ${req.body.username} : ${req.body.password}`)

        if(user){
            const isCorrect = await bcrypt.compare(req.body.password, user.password)

            if(isCorrect){
                res.send(user._id)
            }else{
                res.send(JSON.stringify('unauthorized'))
            }

        }else{
            res.send(JSON.stringify('nouser'))
        }
    }catch (error){
        res.send(error.message)
    }
})


// ! FETCH DATA FOR ONE USER

app.get( '/user/:id', async (req, res) => {

    try{
        const userData = await User.findOne( { _id: req.params.id } )

        if(!userData){
            return res.status(404).send('User not found')
        }

        const userWithBase64Pic = {
            ...userData.toObject(),
            profilePicture: userData.profilePicture != null ? userData.profilePicture.toString('base64') : ''
        };

        res.send(JSON.stringify(userWithBase64Pic))
    }catch(error){
        res.send(error.message)
    }
    

})

// ! UPDATE USER POINTS

app.put('/user/:id', async (req, res) => {

    try{
        const userData = await User.findOne( {_id: req.params.id} )
        userData.points = await userData.points + req.body.points
        await User.updateOne( {_id: req.params.id }, userData )
    
        res.send(JSON.stringify(`New pts: ${userData.points} (${req.body.points} added)`))
    }catch(error){
        res.send(error.message)
    }


})

// ! UPDATE USERNAME

app.put('/user/username/:id', async (req, res) => {

    try{
        console.log("Username change request came")
        const userData = await User.findOne( {_id: req.params.id} )
        userData.username = await req.body.newUsername
        await User.updateOne( {_id: req.params.id }, userData )
    
        res.send(JSON.stringify(`Username changed to: ${req.body.newUsername} (${req.params.id})`))
    }catch(error){
        res.send(error.message)
    }


})

// !  UPDATE PROFILE PICTURE

app.put('/user/picture/:id', upload.single("profilePicture") , async (req, res) => {
    try{
        const userData = await User.findOne( {_id: req.params.id} )

        userData.profilePicture = req.file ? req.file.buffer : null
        await User.updateOne( {_id: req.params.id }, userData )

        res.send(JSON.stringify(`Profile Picture Changed`))
    }catch(error){
        res.send(error.message)
    }
})