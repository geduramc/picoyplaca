"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getById = exports.getAll = exports.get = void 0;
const models_1 = __importDefault(require("../models/models"));
const get = () => __awaiter(void 0, void 0, void 0, function* () {
    return (0, models_1.default)().CitiesModel.findAll({
        where: { Status: 1 }
    });
});
exports.get = get;
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return (0, models_1.default)().CitiesModel.findAll();
});
exports.getAll = getAll;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, models_1.default)().CitiesModel.findAll({
        where: { Id: id }
    });
});
exports.getById = getById;
