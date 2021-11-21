export default class CommentsController {
  createComment (dependencyContainer: any) {
    return async (req: any, res: any) => {
      try {
        const id = await dependencyContainer.commentService.createComment(req.body)
        return res.status(201).json(id)
      } catch (err) {
        console.error(err)
      }
    }
  }

  listComments (dependencyContainer: any) {
    return async (req: any, res: any) => {
      try {
        const list = await dependencyContainer.commentService.allComments()
        return res.status(201).json(list)
      } catch (err) {
        console.error(err)
      }
    }
  }

}
