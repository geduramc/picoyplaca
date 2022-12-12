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
exports.sendEmail = void 0;
const https_1 = __importDefault(require("https"));
const app_config_json_1 = require("../app.config.json");
const sendEmail = (object) => __awaiter(void 0, void 0, void 0, function* () {
    const message = `${object.date} [${(object.sender.length > 0) ? object.sender : 'user'}] : ${object.message}`;
    const urlString = `https://api.telegram.org/bot${app_config_json_1.telegram_channel.api_token}/sendMessage?chat_id=${app_config_json_1.telegram_channel.chat_id}&text=${message}`;
    // console.log('res :::: ', request.response)
    // const valid = Boolean(request.response.ok)
    // if (!valid) throw new Error(request.response)
    return yield new Promise((resolve, reject) => {
        https_1.default.get(urlString, res => {
            res.setEncoding('utf8');
            res.on('data', data => {
                resolve(JSON.parse(data));
            });
        }).on('error', err => {
            reject(err);
        });
    });
});
exports.sendEmail = sendEmail;
