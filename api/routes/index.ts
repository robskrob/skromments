import db from '../db/init'
import CommentsController from '../controllers/comments_controller'
import CommentService from '../services/comment_service'
import CommentDAO from '../dao/comment'

const setUpRouter = (express: any) => {
  const commentsController = new CommentsController()

  const router = express.Router()

  router.get('/health-check', (req: any, res: any) => {
    res.send('ok')
  })

  router.post(
    '/api/v1/comments',
    commentsController.createComment({
      commentService: new CommentService(
        new CommentDAO(
          db
        )
      )
    })
  )

  router.get(
    '/api/v1/comments',
    commentsController.listComments({
      commentService: new CommentService(
        new CommentDAO(
          db
        )
      )
    })
  )

  return router
}

export default setUpRouter
