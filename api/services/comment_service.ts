export default class CommentService {
  commentDAO: any

  constructor (dao: any) {
    this.commentDAO = dao
  }

  async createComment (commentDto: any) {
    const { content } = commentDto
    return await this.commentDAO.createComment(content)
  }

  async allComments () {
    return await this.commentDAO.allComments()
  }
}
