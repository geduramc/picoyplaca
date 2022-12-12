"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    const TypesModel = sequelize.define('Types', {
        Id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        TypeName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        TypeDescription: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        Icon: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },
        Status: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        modelName: 'Types',
        timestamps: false,
        underscored: false
    });
    return TypesModel;
};
