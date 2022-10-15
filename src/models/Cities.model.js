export default (sequelize, DataTypes) => {
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
      underscored: false,
    });

  CitiesModel.associate = (models) => {
    CitiesModel.hasMany(models.RestrictionsModel, { foreignKey: 'CityId' });
    models.RestrictionsModel.belongsTo(CitiesModel, { as: 'City' });
  };

  return CitiesModel;
};