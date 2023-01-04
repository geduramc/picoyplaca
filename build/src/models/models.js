"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const app_config_json_1 = require("../app.config.json");
const Cities_model_1 = __importDefault(require("./Cities.model"));
const Types_model_1 = __importDefault(require("./Types.model"));
const Restrictions_model_1 = __importDefault(require("./Restrictions.model"));
const Parameters_model_1 = __importDefault(require("./Parameters.model"));
exports.default = () => {
    const db = {};
    const sequelize = new sequelize_1.Sequelize(app_config_json_1.dbconfig.database, app_config_json_1.dbconfig.usu, app_config_json_1.dbconfig.pass, {
        host: app_config_json_1.dbconfig.host,
        port: +app_config_json_1.dbconfig.port,
        dialect: app_config_json_1.dbconfig.dialect,
        operatorsAliases: 0
        // define: {
        //   hooks: {
        //     beforeFind: (opt: any) => {
        //       if (opt.where == null) opt.where = { Status: 1 }
        //       else opt.where.Status = 1
        //     }
        //   }
        // }
    });
    db.Sequelize = sequelize_1.Sequelize;
    db.sequelize = sequelize;
    // models
    db.CitiesModel = (0, Cities_model_1.default)(sequelize);
    db.TypesModel = (0, Types_model_1.default)(sequelize);
    db.RestrictionsModel = (0, Restrictions_model_1.default)(sequelize);
    db.ParametersModel = (0, Parameters_model_1.default)(sequelize);
    return db;
};
