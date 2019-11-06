const express = require('express')
const router = express.Router()
const User = require('../models/User')

// Get all Users
router.get('/', (req, res) => {
    // res.send('We are on users')

    /* try {
        const users = await User.find()
        res.json(users).status(200)
    }
    catch(err) {
        res.json({message: err, status: 'not found'})
    } */

    User.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => res.json({ message: err }))
})

// Post a user
router.post('/', (req, res) => {
    const user = new User({
        name: req.body.name,
        telefone: req.body.telefone
    })

    user.save()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json({ message: err })
        })
})

// Update a user's telefone
router.patch('/:id', async (req, res) => {
    try {
        const updatedUser = await User.updateOne(
            { _id: req.params.id },
            { $set: { telefone: req.body.telefone } }
        )
        res.json(updatedUser)
    }
    catch (error) {
        res.json({ message: error })
    }
})

// Delete a user
router.delete('/:id', async (req, res) => {
    try {
        const removedUser = await User.deleteOne(
            { _id: req.params.id }
        )
        res.json(removedUser)
    }
    catch (error) {
        res.json({ message: error })
    }
})

// Get one user
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    }
    catch (err) {
        res.json({ message: error })
    }
})


module.exports = router