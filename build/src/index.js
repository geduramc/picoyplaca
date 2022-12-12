"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
require("@babel/polyfill");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
// import db from './models/index.js'
const router_1 = require("./routes/router");
const app_config_json_1 = __importDefault(require("./app.config.json"));
const package_json_1 = __importDefault(require("../package.json"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// server
app.set('port', (process.env.PORT != null) ? process.env.PORT : app_config_json_1.default.app.port);
app.set('pkg', package_json_1.default);
// middlewares
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// routes
(0, router_1.router)(app);
app.listen(app.get('port'), () => {
    console.log(`[port: ${app.get('port')}] server running...`);
});
