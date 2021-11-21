import * as express from 'express'
import routerSetup from './routes'

const app = express()
app.use(express.json())
app.use(routerSetup(express))

app.listen(8080, () => console.log('server listening on port 8080'))
