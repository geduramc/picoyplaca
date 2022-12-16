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
exports.router = void 0;
const GeneralResponse = __importStar(require("../utils/GeneralResponse.util"));
const Cities_routes_1 = __importDefault(require("./Cities.routes"));
const Types_routes_1 = __importDefault(require("./Types.routes"));
const Restrictions_routes_1 = __importDefault(require("./Restrictions.routes"));
const Message_routes_1 = __importDefault(require("./Message.routes"));
function router(app) {
    app.get('/', (_, res) => {
        res.json(GeneralResponse.ok({
            name: app.get('pkg').name,
            author: app.get('pkg').author,
            description: app.get('pkg').description,
            version: app.get('pkg').version
        }));
    });
    app.use('/api/cities', (0, Cities_routes_1.default)());
    app.use('/api/types', (0, Types_routes_1.default)());
    app.use('/api/restrictions', (0, Restrictions_routes_1.default)());
    app.use('/api/message', (0, Message_routes_1.default)());
    app.use((_req, res, _next) => {
        res.status(404).send(GeneralResponse.error('Error, 404 Not Found'));
    });
}
exports.router = router;
