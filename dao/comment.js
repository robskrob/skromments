class CommentDAO {
  constructor(db) {
    this.db = db
  }

  async createComment (content) {
    const [id] = await this.db('comments')
      .insert({
        content
      })
      .returning('id')

    return id
  }
}

module.exports = CommentDAO
