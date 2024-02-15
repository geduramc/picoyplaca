import { ExpressType } from '../types'
import { generalResponse } from '../utils/GeneralResponse.util'
import { citiesRouter } from './Cities.routes'
import { typesRouter } from './Types.routes'
import { restrictionsRouter } from './Restrictions.routes'
import { endpoints } from '../constants/endpoints'

export function router (app: ExpressType) {
  app.get('/', (_, res) => {
    res.json(generalResponse.ok({
      name: app.get('pkg').name,
      author: app.get('pkg').author,
      description: app.get('pkg').description,
      version: app.get('pkg').version,
      endpoints: endpoints()
    }))
  })

  app.get('/ping', (_, res) => {
    res.status(200).send(generalResponse.ok('🚀'))
  })

  app.use('/api/cities', citiesRouter)
  app.use('/api/types', typesRouter)
  app.use('/api/restrictions', restrictionsRouter)

  app.use((_req, res, _next) => {
    res.status(404).send(generalResponse.error('Error, 404 Not Found'))
  })
}
