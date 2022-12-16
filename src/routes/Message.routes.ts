import { Router } from 'express'
import * as MessageService from '../services/Message.service'
import * as GeneralResponse from '../utils/GeneralResponse.util'

export default (): Router => {
  const router = Router()

  router.post('/', (req, res) => {
    try {
      const { sender, date, message } = req.body
      MessageService.sendMessage({ sender, date, message })
        .then((data: any) => {
          res.send(GeneralResponse.ok(data))
        }).catch(err => {
          throw new Error(err)
        })
    } catch (err) {
      res.status(400).send(GeneralResponse.error('Error sending message'))
    }
  })

  return router
}
