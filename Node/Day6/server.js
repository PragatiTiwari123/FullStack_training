const express = require("express")

const {connectDB} = require("./db.js")
const {User} = require("./models.js")

const app = express()

app.use(express.json())

connectDB()

