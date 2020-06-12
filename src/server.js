import express from 'express'
import router from './routes'
import config from './config'
import bodyParser from 'body-parser'
import responseFormat from './middleware/responseFormat'

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// custom response in express
app.use(responseFormat)

// Restful APIs
app.use(router)

app.listen(config.port, () => {
  console.log(`Running on port: ${config.port}`)
})
