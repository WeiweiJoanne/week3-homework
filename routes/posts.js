const express = require('express')
const router = express.Router()

const postControllers = require('../controllers/posts')


router.get('/', postControllers.getPosts)
router.post('/', postControllers.postPosts)
router.delete('/', postControllers.deleteAllPosts)
router.patch('/:id', postControllers.updatePosts)
router.delete('/:id', postControllers.deleteOnePosts)


module.exports = router
