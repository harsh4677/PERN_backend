require('dotenv').config({path: `${process.cwd()}/.env`})
const express = require('express')

const authRouter = require('./route/authRoute')

const app = express();

app.use(express.json())

//ALL routes
app.get('/', (req, res)=>{
    res.json({
        status: 'success',
        message: ' The port is running successfully'
    })
})

app.use('/api/v1/auth', authRouter)

app.use("*", (req, res, next)=>{
    res.status(404).json({
        status: 'failed',
        message: 'Route not found'
    })
})

const PORT = process.env.APP_PORT || 4000;

app.listen(process.env.APP_ROUTE, ()=>{
    console.log("The app is running successfully on port 3000")
})