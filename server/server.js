import dotenv from 'dotenv'
import express from 'express'
import connectToDB from './config/db.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5050

connectToDB().then(() => {
    
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
}).catch(e => {
    console.log(e)
})
