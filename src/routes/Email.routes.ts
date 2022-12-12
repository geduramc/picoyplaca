import { Router } from 'express'
import * as EmailService from '../services/Email.service'
import * as GeneralResponse from '../utils/GeneralResponse.util'

export default (): Router => {
  const router = Router()

  router.post('/', (req, res) => {
    try {
      const { sender, date, message } = req.body
      EmailService.sendEmail({ sender, date, message })
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
