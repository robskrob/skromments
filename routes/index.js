const express = require('express')

const db = require('../db/init')
const CommentsController = require('../controllers/comments_controller')
const CommentService = require('../services/comment_service')
const CommentDAO = require('../dao/comment')

const commentsController = new CommentsController()

const router = express.Router()

router.get('/health-check', (req, res) => {
  res.send('ok')
})

router.post('/api/v1/comments', commentsController.createComment({
  commentService: new CommentService(
    new CommentDAO(
      db
    )
  )
}))

module.exports = router
