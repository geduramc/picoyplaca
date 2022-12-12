import { Router } from 'express'
import * as TypesService from '../services/Types.service'

export default (): Router => {
  const router = Router()

  router.get('/', (_req, res) => {
    TypesService.getAll()
      .then((data) => {
        res.json(data)
      })
      .catch((err) => {
        res.json(err)
      })
  })

  return router
}
