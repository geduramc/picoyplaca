import { Sequelize, DataTypes, ModelCtor, Model } from 'sequelize'

export default (sequelize: Sequelize): ModelCtor<Model> => {
  const TypesModel = sequelize.define('Types', {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    TypeName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    TypeDescription: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    Icon: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: false
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
    modelName: 'Types',
    timestamps: false,
    underscored: false
  })

  return TypesModel
}
