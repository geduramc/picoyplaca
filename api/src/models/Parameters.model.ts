import { Sequelize, DataTypes, ModelCtor, Model } from 'sequelize'

export default (sequelize: Sequelize): ModelCtor<Model> => {
  const ParametersModel = sequelize.define('Parameters', {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    Code: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    Value: {
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
    modelName: 'Parameters',
    timestamps: false,
    underscored: false
  })

  return ParametersModel
}
