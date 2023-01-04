import { Router } from 'express'
import * as CitiesService from '../services/Cities.service'
import * as GeneralResponse from '../utils/GeneralResponse.util'

export default (): Router => {
  const router = Router()

  router.get('/', (_req, res) => {
    CitiesService.get()
      .then((data) => {
        res.send(GeneralResponse.ok(data))
      })
      .catch((err) => {
        res.status(400).send(GeneralResponse.error(err))
      })
  })

  router.get('/all', (_req, res) => {
    CitiesService.getAll()
      .then((data) => {
        res.send(GeneralResponse.ok(data))
      })
      .catch((err) => {
        res.status(400).send(GeneralResponse.error(err))
      })
  })

  router.get('/:id', (req, res) => {
    CitiesService.getById(Number(req.params.id))
      .then((data) => {
        res.send(GeneralResponse.ok(data))
      })
      .catch((err) => {
        res.status(400).send(GeneralResponse.error(err))
      })
  })

  return router
}
