import 'dotenv/config'
import express from 'express'
import { connectToMongoDb } from './config/dbConfig.js'
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 3000

// Connect To Database
connectToMongoDb()

app.use(express.json())

app.use(cors())
app.listen(PORT, (error)=> {
    error
    ? console.log(error.message)
    : console.log(`Server running successfully`)
})