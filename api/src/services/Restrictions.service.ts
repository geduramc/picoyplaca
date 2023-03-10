import db from '../models/models'

export const get = async (): Promise<any> => {
  return db().RestrictionsModel.findAll({
    where: { Status: 1 }
  })
}

export const getAll = async (): Promise<any> => {
  return db().RestrictionsModel.findAll()
}

export const getByCityType = async (cityId: number, typeId: number): Promise<any> => {
  return db().RestrictionsModel.findAll({
    where: { CityId: cityId, TypeId: typeId },
    include: [{ all: true }]
  })
}
