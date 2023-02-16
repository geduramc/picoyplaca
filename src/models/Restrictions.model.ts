import { Sequelize, DataTypes, ModelCtor, Model } from 'sequelize'

export default (sequelize: Sequelize): ModelCtor<Model> => {
  const RestrictionsModel = sequelize.define('Restrictions', {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    RestrictionName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    RestrictionValues: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    StartDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    EndDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    StartTime: {
      type: DataTypes.TIME,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    EndTime: {
      type: DataTypes.TIME,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    DayApply: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    Holidays: {
      type: DataTypes.TINYINT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    Status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    modelName: 'Restrictions',
    timestamps: false,
    underscored: false
  })

  return RestrictionsModel
}
