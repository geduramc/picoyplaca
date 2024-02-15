import db from '../models/models'

const getAll = async (): Promise<any> => {
  return db().ParametersModel.findAll()
}

export const parametersService = { getAll }
