import db from '../models/models'

export const getAll = async (): Promise<any> => {
  return db().TypesModel.findAll()
}
