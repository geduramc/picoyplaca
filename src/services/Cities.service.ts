import db from '../models/models'

// export const getAll = (): any[] => [{ service: 'Cities Service' }]

export const getAll = async (): Promise<any> => {
  return db().CitiesModel.findAll()
}
