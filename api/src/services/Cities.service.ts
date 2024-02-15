import db from '../models/models'

const get = async (): Promise<any> => {
  return db().CitiesModel.findAll({
    where: { Status: 1 }
  })
}

const getAll = async (): Promise<any> => {
  return db().CitiesModel.findAll()
}

const getById = async (id: number): Promise<any> => {
  return db().CitiesModel.findAll({
    where: { Id: id }
  })
}

export const citiesService = { get, getAll, getById }
