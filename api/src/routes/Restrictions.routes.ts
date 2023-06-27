import express from 'express'
import { generalResponse } from '../utils/GeneralResponse.util'
import { restrictionsService } from '../services/Restrictions.service'

export const restrictionsRouter = express.Router()

restrictionsRouter.get('/', (_req, res) => {
  restrictionsService.get()
    .then((data) => {
      res.send(generalResponse.ok(data))
    })
    .catch((err) => {
      res.status(400).send(generalResponse.error(err))
    })
})

restrictionsRouter.get('/all', (_req, res) => {
  restrictionsService.getAll()
    .then((data) => {
      res.send(generalResponse.ok(data))
    })
    .catch((err) => {
      res.status(400).send(generalResponse.error(err))
    })
})

restrictionsRouter.get('/getByCityType', (req, res) => {
  restrictionsService.getByCityType(req.body.CityId, req.body.TypeId)
    .then((data) => {
      res.send(generalResponse.ok(data))
    })
    .catch((err) => {
      res.status(400).send(generalResponse.error(err))
    })
})
