"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports.info = exports.ok = void 0;
const ok = (_data) => {
    return {
        ok: true,
        msg: 'Success',
        data: _data
    };
};
exports.ok = ok;
const info = (_msg, _data = null) => {
    return {
        ok: false,
        msg: _msg,
        data: (_data != null) ? _data : []
    };
};
exports.info = info;
const error = (_msg) => {
    return {
        ok: false,
        msg: _msg,
        data: []
    };
};
exports.error = error;
