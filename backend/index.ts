import * as express from 'express'
import routerSetup from './api/routes'

const path = __dirname;
const pathArr = path.split('/')
pathArr.pop()
const indexHtmlPath = (pathArr || []).join('/') + '/frontend/dist/'

const app = express()

app.use(express.static(indexHtmlPath));



app.get('/', function (req: any, res: any) {
  res.sendFile(indexHtmlPath + 'index.html');
});

app.use(express.json())
app.use(routerSetup(express))

app.listen(8080, () => console.log('server listening on port 8080'))
