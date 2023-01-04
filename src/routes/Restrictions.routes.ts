import { Router } from 'express'
import * as RestrictionsService from '../services/Restrictions.service'
import * as GeneralResponse from '../utils/GeneralResponse.util'

export default (): Router => {
  const router = Router()

  router.get('/', (_req, res) => {
    RestrictionsService.get()
      .then((data) => {
        res.send(GeneralResponse.ok(data))
      })
      .catch((err) => {
        res.status(400).send(GeneralResponse.error(err))
      })
  })

  router.get('/all', (_req, res) => {
    RestrictionsService.getAll()
      .then((data) => {
        res.send(GeneralResponse.ok(data))
      })
      .catch((err) => {
        res.status(400).send(GeneralResponse.error(err))
      })
  })

  router.get('/getByCityType', (req, res) => {
    RestrictionsService.getByCityType(req.body.CityId, req.body.TypeId)
      .then((data) => {
        res.send(GeneralResponse.ok(data))
      })
      .catch((err) => {
        res.status(400).send(GeneralResponse.error(err))
      })
  })

  return router
}
