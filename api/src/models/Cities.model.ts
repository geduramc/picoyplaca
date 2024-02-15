import { Sequelize, DataTypes, ModelCtor, Model } from 'sequelize'

export default (sequelize: Sequelize): ModelCtor<Model> => {
  const CitiesModel = sequelize.define('Cities', {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    CityName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    Status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  },
  {
    modelName: 'Cities',
    timestamps: false,
    underscored: false
  })

  return CitiesModel
}
