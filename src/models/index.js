import fs from 'fs'
import { Sequelize } from 'sequelize'

import ParametersModel from '../models/Parameters.model.js'
import CitiesModel from '../models/Cities.model.js'
import TypesModel from '../models/Types.model.js'
import RestrictionsModel from '../models/Restrictions.model.js'

const app_config = JSON.parse(fs.readFileSync('./src/app.config.json', 'utf-8')).dbconfig;
const db = {};

const sequelize = new Sequelize(app_config.database, app_config.usu, app_config.pass, {
  host: app_config.host,
  port: app_config.port,
  dialect: app_config.dialect,
  operatorsAliases: 0,
  define: {
    hooks: {
      beforeFind: (opt) => {
        if (!opt.where) opt.where = { Status: 1 }
        else opt.where.Status = 1;
      }
    }
  }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//models
db.ParametersModel = ParametersModel(sequelize, Sequelize.DataTypes);
db.RestrictionsModel = RestrictionsModel(sequelize, Sequelize.DataTypes);
db.CitiesModel = CitiesModel(sequelize, Sequelize.DataTypes);
db.TypesModel = TypesModel(sequelize, Sequelize.DataTypes);

export default db;
