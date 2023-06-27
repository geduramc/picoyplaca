import db from '../models/models'

const get = async (): Promise<any> => {
  return db().TypesModel.findAll({
    where: { Status: 1 }
  })
}

const getAll = async (): Promise<any> => {
  return db().TypesModel.findAll()
}

const getById = async (id: number): Promise<any> => {
  return db().TypesModel.findAll({
    where: { Id: id }
  })
}

export const typesService = { get, getAll, getById }
