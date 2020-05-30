const mongoose = require('mongoose')

const ApartmentSchema = mongoose.Schema({
    id: String,
    name: String,
    description: String,
    facilities: [String],
    buildingType: String,
    images: {
        primary: String,
        others: [String]
    },
    address: {
        street: String,
        city: String,
        country: String,
        longitude: Number,
        latitude: Number
    }
})

module.exports = mongoose.model('Apartment', ApartmentSchema)