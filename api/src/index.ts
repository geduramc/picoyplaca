import dotenv from 'dotenv'
import '@babel/polyfill'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
// import db from './models/index.js'
import { router } from './routes/router'
import app_config from './app.config.json'
import pkg from '../package.json'

dotenv.config()
const app = express()

// server
app.set('port', (process.env.PORT != null) ? process.env.PORT : app_config.app.port)
app.set('pkg', pkg)

// middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

// routes
router(app)

app.listen(app.get('port'), () => {
  console.log(`🚀 [port: ${app.get('port') as number}] server running...`)
})
