const mongoose = require('mongoose')
const postsModel = require('../models/posts')
const handleSuccess = require('../services/handleSuccess')
const handleError = require('../services/handleError')

const postControllers = {
  async getPosts(req, res) {
    const findPosts = await postsModel.find({})
    handleSuccess(res, findPosts)
  },
  async postPosts(req, res) {
    const { body } = req
    const { name, tags, type, image, content, likes, comments } = body
    if (content && content.trim() !== '') {
      try {
        const postPosts = await postsModel.create({
          name, tags, type, image, content, likes, comments
        });
        handleSuccess(res, postPosts)

      } catch (err) {
        handleError(res, err)
      }
    } else {
      handleError(res)
    }

  },
  async updatePosts(req, res) {
    const { body } = req
    const { id } = req.params
    const { content } = body

    if (content && content.trim() !== '') {
      try {
        const updatePosts = await postsModel.findByIdAndUpdate(id, {
          content
        }, { returnDocument: 'after', runValidators: true })
        updatePosts !== null ? handleSuccess(res, updatePosts) : handleError(res)
      } catch (err) {
        handleError(res, err)
      }
    } else {
      handleError(res)
    }
  },
  async deleteAllPosts(req, res) {
    try {
      const deleteAllPosts = await postsModel.deleteMany({})
      handleSuccess(res, deleteAllPosts)
    } catch (err) {
      handleError(res, err)
    }
  },
  async deleteOnePosts(req, res) {
    const { id } = req.params
    try {
      const deleteOnePosts = await postsModel.findByIdAndDelete(id)
      deleteOnePosts !== null ? handleSuccess(res, deleteOnePosts) : handleError(res)
    } catch (err) {
      handleError(res, err)
    }
  }
}


module.exports = postControllers
