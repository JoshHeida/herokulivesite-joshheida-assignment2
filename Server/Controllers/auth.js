"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessLogout = exports.ProcessRegister = exports.ProcessLogin = exports.DisplayRegister = exports.DisplayLogin = void 0;
const passport_1 = __importDefault(require("passport"));
function DisplayLogin(req, res, next) {
    res.render('index', { title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: '' });
}
exports.DisplayLogin = DisplayLogin;
function DisplayRegister(req, res, next) {
    res.render('index', { title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName: '' });
}
exports.DisplayRegister = DisplayRegister;
function ProcessLogin(req, res, next) {
    passport_1.default.authenticate('local', function (err, user, info) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        if (!user) {
            req.flash('loginMessage', 'Invalid Username or Password');
            return res.redirect('/login');
        }
        req.logIn(user, function (err) {
            if (err) {
                console.error(err);
                res.end(err);
            }
            return res.redirect('/buisness-contacts');
        });
    })(req, res, next);
}
exports.ProcessLogin = ProcessLogin;
function ProcessRegister(req, res, next) {
}
exports.ProcessRegister = ProcessRegister;
function ProcessLogout(req, res, next) {
}
exports.ProcessLogout = ProcessLogout;
//# sourceMappingURL=auth.js.map