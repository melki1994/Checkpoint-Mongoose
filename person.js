//creating personSchema :
const mongoose = require('mongoose')
const {Schema, model}=mongoose
const personSchema = new Schema({
    name: {
    type: String,
    required: true,
    unique: true,
    },
    age:Number,
    favoriteFoods:[{type:String}]
})
module.exports = model('Person', personSchema)