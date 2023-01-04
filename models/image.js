const mongoose = require('mongoose')

const ImageSchema = new mongoose.Schema({
    imageURL: {
            type: String
    },
    contact: {
        type : Number,
        require: true
    },
    address:{
        type: String,
        require: true
    },
    price: {
        type : Number,
        require: true
    }
})

const Image = mongoose.model("Image", ImageSchema)
module.exports = Image