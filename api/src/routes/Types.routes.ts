import express from 'express'
import { generalResponse } from '../utils/GeneralResponse.util'
import { typesService } from '../services/Types.service'

export const typesRouter = express.Router()

typesRouter.get('/', (_req, res) => {
  typesService.get()
    .then((data) => {
      res.send(generalResponse.ok(data))
    })
    .catch((err) => {
      res.status(400).send(generalResponse.error(err))
    })
})

typesRouter.get('/all', (_req, res) => {
  typesService.getAll()
    .then((data) => {
      res.send(generalResponse.ok(data))
    })
    .catch((err) => {
      res.status(400).send(generalResponse.error(err))
    })
})

typesRouter.get('/:id', (req, res) => {
  typesService.getById(Number(req.params.id))
    .then((data) => {
      res.send(generalResponse.ok(data))
    })
    .catch((err) => {
      res.status(400).send(generalResponse.error(err))
    })
})
