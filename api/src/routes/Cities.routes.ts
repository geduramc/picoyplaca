import express from 'express'
import { generalResponse } from '../utils/GeneralResponse.util'
import { citiesService } from '../services/Cities.service'

export const citiesRouter = express.Router()

citiesRouter.get('/', (_req, res) => {
  citiesService.get()
    .then((data) => {
      res.send(generalResponse.ok(data))
    })
    .catch((err) => {
      res.status(400).send(generalResponse.error(err))
    })
})

citiesRouter.get('/all', (_req, res) => {
  citiesService.getAll()
    .then((data) => {
      res.send(generalResponse.ok(data))
    })
    .catch((err) => {
      res.status(400).send(generalResponse.error(err))
    })
})

citiesRouter.get('/:id', (req, res) => {
  citiesService.getById(Number(req.params.id))
    .then((data) => {
      res.send(generalResponse.ok(data))
    })
    .catch((err) => {
      res.status(400).send(generalResponse.error(err))
    })
})
