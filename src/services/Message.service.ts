import https from 'https'
import { telegram_channel } from '../app.config.json'
import { TelegramRequests } from '../types'

export const sendMessage = async (object: TelegramRequests): Promise<object> => {
  const message = `${object.date} [${(object.sender.length > 0) ? object.sender : 'user'}] : ${object.message}`
  const urlString = `https://api.telegram.org/bot${telegram_channel.api_token}/sendMessage?chat_id=${telegram_channel.chat_id}&text=${message}`

  return await new Promise((resolve, reject) => {
    https.get(urlString, res => {
      res.setEncoding('utf8')
      res.on('data', data => {
        resolve(JSON.parse(data))
      })
    }).on('error', err => {
      reject(err)
    })
  })
}
