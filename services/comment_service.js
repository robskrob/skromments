class CommentService {
  constructor (dao) {
    this.commentDAO = dao
  }

  async createComment (commentDto) {
    const { content } = commentDto
    return await this.commentDAO.createComment(content)
  }
}

module.exports = CommentService
