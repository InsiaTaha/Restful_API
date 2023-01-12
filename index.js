const express= require('express')
const mongoose=require('mongoose')
const route=require('./routes/routes')

const app=express()

const dotenv = require('dotenv')
dotenv.config({path:__dirname+'/.env'});
app.use('/api',route)
mongoose.set('strictQuery', false);
console.log(process.env.DATABASE_URL)
const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString)
const database=mongoose.connection
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use(express.json())

app.listen(3000,()=> console.log('Listening to 3000!'))