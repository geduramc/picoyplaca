import db from '../models/models'

const get = async (): Promise<any> => {
  return db().RestrictionsModel.findAll({
    where: { Status: 1 }
  })
}

const getAll = async (): Promise<any> => {
  return db().RestrictionsModel.findAll()
}

const getByCityType = async (cityId: number, typeId: number): Promise<any> => {
  return db().RestrictionsModel.findAll({
    where: { CityId: cityId, TypeId: typeId },
    include: [{ all: true }]
  })
}

export const restrictionsService = { get, getAll, getByCityType }
