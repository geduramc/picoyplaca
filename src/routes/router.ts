import { ExpressType } from '../types'
import * as GeneralResponse from '../utils/GeneralResponse.util'
import CitiesRoutes from './Cities.routes'
import TypesRoutes from './Types.routes'
import RestrictionsRoutes from './Restrictions.routes'
import MessageRoutes from './Message.routes'

export function router (app: ExpressType): void {
  app.get('/', (_, res) => {
    res.json(GeneralResponse.ok({
      name: app.get('pkg').name,
      author: app.get('pkg').author,
      description: app.get('pkg').description,
      version: app.get('pkg').version
    }))
  })

  app.use('/api/cities', CitiesRoutes())
  app.use('/api/types', TypesRoutes())
  app.use('/api/restrictions', RestrictionsRoutes())
  app.use('/api/message', MessageRoutes())

  app.use((_req, res, _next) => {
    res.status(404).send(GeneralResponse.error('Error, 404 Not Found'))
  })
}
