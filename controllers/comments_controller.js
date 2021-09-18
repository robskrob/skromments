class CommentsController {
  createComment (dependencyContainer = {}) {
    return async (req, res) => {
      try {
        const id = await dependencyContainer.commentService.createComment(req.body)
        return res.status(201).json(id)
      } catch (err) {
        console.error(err)
      }
    }
  }


}

module.exports = CommentsController
