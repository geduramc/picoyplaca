import { Router } from 'express'
import * as TypesService from '../services/Types.service'
import * as GeneralResponse from '../utils/GeneralResponse.util'

export default (): Router => {
  const router = Router()

  router.get('/', (_req, res) => {
    TypesService.get()
      .then((data) => {
        res.send(GeneralResponse.ok(data))
      })
      .catch((err) => {
        res.status(400).send(GeneralResponse.error(err))
      })
  })

  router.get('/all', (_req, res) => {
    TypesService.getAll()
      .then((data) => {
        res.send(GeneralResponse.ok(data))
      })
      .catch((err) => {
        res.status(400).send(GeneralResponse.error(err))
      })
  })

  router.get('/:id', (req, res) => {
    TypesService.getById(Number(req.params.id))
      .then((data) => {
        res.send(GeneralResponse.ok(data))
      })
      .catch((err) => {
        res.status(400).send(GeneralResponse.error(err))
      })
  })

  return router
}
