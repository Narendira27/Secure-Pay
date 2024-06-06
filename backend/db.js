const mongoose = require('mongoose')
const { Schema, model } = mongoose

require("dotenv").config();
const db_url = process.env.db_url

mongoose.connect(db_url)

const userSchema = new Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
})

const bankSchema = new Schema({
    userId: { type: String, ref: 'User', required: true },
    balance: { type: Number, required: true }

})

const User = model('User', userSchema)
const Bank = model('Bank', bankSchema)

module.exports = {
    User,
    Bank
}