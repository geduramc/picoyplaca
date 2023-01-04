import db from '../models/models'

export const get = async (): Promise<any> => {
  return db().CitiesModel.findAll({
    where: { Status: 1 }
  })
}

export const getAll = async (): Promise<any> => {
  return db().CitiesModel.findAll()
}

export const getById = async (id: number): Promise<any> => {
  return db().CitiesModel.findAll({
    where: { Id: id }
  })
}
