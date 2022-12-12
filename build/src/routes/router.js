"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const Cities_routes_1 = __importDefault(require("./Cities.routes"));
const Types_routes_1 = __importDefault(require("./Types.routes"));
const Restrictions_routes_1 = __importDefault(require("./Restrictions.routes"));
const Email_routes_1 = __importDefault(require("./Email.routes"));
function router(app) {
    app.get('/', (_, res) => {
        res.json({
            name: app.get('pkg').name,
            author: app.get('pkg').author,
            description: app.get('pkg').description,
            version: app.get('pkg').version
        });
    });
    app.use('/api/cities', (0, Cities_routes_1.default)());
    app.use('/api/types', (0, Types_routes_1.default)());
    app.use('/api/restrictions', (0, Restrictions_routes_1.default)());
    app.use('/api/email', (0, Email_routes_1.default)());
}
exports.router = router;
