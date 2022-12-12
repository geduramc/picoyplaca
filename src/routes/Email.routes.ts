import { Router } from 'express'
import * as EmailService from '../services/Email.service'
import GeneralResponse from '../utils/general_response'

export default (): Router => {
  const router = Router()

  router.post('/', (req, res) => {
    try {
      const { sender, date, message } = req.body
      EmailService.sendEmail({ sender, date, message })
        .then((data: any) => {
          res.json(GeneralResponse(true, 'Success', data))
        }).catch(err => {
          throw new Error(err)
        })
    } catch (err) {
      res.status(400).json(GeneralResponse(false, 'Error sending message', err))
    }
  })

  return router
}
