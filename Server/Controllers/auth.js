"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessLogout = exports.ProcessRegister = exports.ProcessLogin = exports.DisplayRegister = exports.DisplayLogin = void 0;
function DisplayLogin(req, res, next) {
    res.render('index', { title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: '' });
}
exports.DisplayLogin = DisplayLogin;
function DisplayRegister(req, res, next) {
    res.render('index', { title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName: '' });
}
exports.DisplayRegister = DisplayRegister;
function ProcessLogin(req, res, next) {
}
exports.ProcessLogin = ProcessLogin;
function ProcessRegister(req, res, next) {
}
exports.ProcessRegister = ProcessRegister;
function ProcessLogout(req, res, next) {
}
exports.ProcessLogout = ProcessLogout;
//# sourceMappingURL=auth.js.map