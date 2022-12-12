import { Dialect, OperatorsAliases, Sequelize } from 'sequelize'
import { dbconfig } from '../app.config.json'
import { dbConfigTypes } from '../types'

import CitiesModel from './Cities.model'
import TypesModel from './Types.model'
import RestrictionsModel from './Restrictions.model'
import ParametersModel from './Parameters.model'

export default (): dbConfigTypes => {
  const db: any = {}
  const sequelize = new Sequelize(dbconfig.database, dbconfig.usu, dbconfig.pass, {
    host: dbconfig.host,
    port: +dbconfig.port,
    dialect: dbconfig.dialect as Dialect,
    operatorsAliases: 0 as unknown as OperatorsAliases,
    define: {
      hooks: {
        beforeFind: (opt: any) => {
          if (opt.where == null) opt.where = { Status: 1 }
          else opt.where.Status = 1
        }
      }
    }
  })

  db.Sequelize = Sequelize
  db.sequelize = sequelize

  // models
  db.CitiesModel = CitiesModel(sequelize)
  db.TypesModel = TypesModel(sequelize)
  db.RestrictionsModel = RestrictionsModel(sequelize)
  db.ParametersModel = ParametersModel(sequelize)

  return db
}
