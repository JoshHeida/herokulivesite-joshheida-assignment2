"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContact = exports.DisplayProjects = exports.DisplayServices = exports.DisplayAbout = exports.DisplayHome = void 0;
const Util_1 = require("../Util");
function DisplayHome(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', displayName: (0, Util_1.UserDisplayName)(req) });
}
exports.DisplayHome = DisplayHome;
function DisplayAbout(req, res, next) {
    res.render('index', { title: 'About', page: 'about', displayName: (0, Util_1.UserDisplayName)(req) });
}
exports.DisplayAbout = DisplayAbout;
function DisplayServices(req, res, next) {
    res.render('index', { title: 'Services', page: 'services', displayName: (0, Util_1.UserDisplayName)(req) });
}
exports.DisplayServices = DisplayServices;
function DisplayProjects(req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects', displayName: (0, Util_1.UserDisplayName)(req) });
}
exports.DisplayProjects = DisplayProjects;
function DisplayContact(req, res, next) {
    res.render('index', { title: 'Contact', page: 'contact', displayName: (0, Util_1.UserDisplayName)(req) });
}
exports.DisplayContact = DisplayContact;
//# sourceMappingURL=index.js.map