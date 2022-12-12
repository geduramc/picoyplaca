import { Router } from 'express'
import * as CitiesService from '../services/Cities.service'

export default (): Router => {
  const router = Router()

  router.get('/', (_req, res) => {
    CitiesService.getAll()
      .then((data) => {
        res.json(data)
      })
      .catch((err) => {
        res.json(err)
      })
  })

  return router
}
