"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    const RestrictionsModel = sequelize.define('Restrictions', {
        Id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        RestrictionName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        RestrictionValues: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        StartDate: {
            type: sequelize_1.DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        EndDate: {
            type: sequelize_1.DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        StartTime: {
            type: sequelize_1.DataTypes.TIME,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        EndTime: {
            type: sequelize_1.DataTypes.TIME,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        DayApply: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        Holidays: {
            type: sequelize_1.DataTypes.TINYINT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        Status: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        TypeId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        CityId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        modelName: 'Restrictions',
        timestamps: false,
        underscored: false
    });
    return RestrictionsModel;
};
