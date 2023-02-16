import db from '../models/models'

export const get = async (): Promise<any> => {
  return db().TypesModel.findAll({
    where: { Status: 1 }
  })
}

export const getAll = async (): Promise<any> => {
  return db().TypesModel.findAll()
}

export const getById = async (id: number): Promise<any> => {
  return db().TypesModel.findAll({
    where: { Id: id }
  })
}
