import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import UserModel from './models/Users.js'

import UserRoutes from './routes/user.route.js'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/users', UserRoutes)

mongoose.connect("mongodb://127.0.0.1:27017/islamic-series") //this is the database



app.listen(3001, () => {
    console.log("server is running")
})