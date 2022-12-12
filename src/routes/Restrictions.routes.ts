import { Router } from 'express'
import * as RestrictionsService from '../services/Restrictions.service'

export default (): Router => {
  const router = Router()

  router.get('/', (_req, res) => {
    RestrictionsService.getAll()
      .then((data) => {
        res.json(data)
      })
      .catch((err) => {
        res.json(err)
      })
  })

  router.post('/getByCityType', (req, res) => {
    RestrictionsService.getByCityType(req.body.CityId, req.body.TypeId)
      .then((data) => {
        res.json(data)
      })
      .catch((err) => {
        res.json(err)
      })
  })

  return router
}
