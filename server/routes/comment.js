const router = require('express').Router()
const Comment = require('../models/Comment')
const { User } = require('../models/user')

router.post('/', async(req, res) => {
    try {
        const user = await User.findById(req.body.user)
        const rest = await new Comment({...req.body, name: user.firstName + " " + user.lastName, image: user.image })
        rest.save()

        res.status(201).json({ msg: "comment posted", rest })

    } catch (error) {
        res.status(500).json({ msg: "internal server error", error })
    }
})

router.put('/:id', async(req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.id)
    } catch (error) {
        res.status(500).json({ msg: "internal server error" })
    }
})

module.exports = router