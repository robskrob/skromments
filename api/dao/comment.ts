export default class CommentDAO {
  db: any

  constructor(db: any) {
    this.db = db
  }

  async allComments () {
    return await this.db('comments')
  }

  async createComment (content: any) {
    const [id] = await this.db('comments')
      .insert({
        content
      })
      .returning('id')

    return id
  }
}
