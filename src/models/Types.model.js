export default (sequelize, DataTypes) => {
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
        underscored: false,
    });

    TypesModel.associate = (models) => {
        TypesModel.hasMany(models.RestrictionsModel, { foreignKey: 'TypeId' });
        models.RestrictionsModel.belongsTo(TypesModel, { as: 'Type' });
    };

    return TypesModel;
};