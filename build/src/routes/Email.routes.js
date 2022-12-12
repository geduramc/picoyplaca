"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EmailService = __importStar(require("../services/Email.service"));
const general_response_1 = __importDefault(require("../utils/general_response"));
exports.default = () => {
    const router = (0, express_1.Router)();
    router.post('/', (req, res) => {
        try {
            const { sender, date, message } = req.body;
            EmailService.sendEmail({ sender, date, message })
                .then((data) => {
                res.json((0, general_response_1.default)(true, 'Success', data));
            }).catch(err => {
                throw new Error(err);
            });
        }
        catch (err) {
            res.status(400).json((0, general_response_1.default)(false, 'Error sending message', err));
        }
    });
    return router;
};
