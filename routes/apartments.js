const express = require('express')

const router = express.Router()
const Apartment = require('../models/Apartment')

router.get('/apartment', async (req, res) => {
    try {
        const apartments = await Apartment.find({}, {_id: 0, __v: 0})
        res.json(apartments)
    } catch(e) {
        res.json({ message: e })
    }
})

router.post('/apartment', async (req, res) => {
    const apartment = new Apartment({
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        facilities: req.body.facilities,
        buildingType: req.body.type,
        images: {
            primary: req.body.images.primary,
            others: req.body.images.others
        },
        address: {
            street: req.body.address.street,
            city: req.body.address.city,
            country: req.body.address.country,
            latitude: req.body.address.latitude,
            longitude: req.body.address.longitude
        }
    })

    try {
        const savedApartment = await apartment.save()
        res.json(savedApartment)
    } catch(e) {
        res.json({ message: e })
    }
   
})

router.get('/apartment/:id', async (req, res) => {
    try {
        const apartment = await Apartment.findOne(
            { id: req.params.id }, 
            {_id: 0, __v: 0} )
        res.json(apartment)
    } catch(e) {
        res.json({ message: e })
    }
   
})

module.exports = router