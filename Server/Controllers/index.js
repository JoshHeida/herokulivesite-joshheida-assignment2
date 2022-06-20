"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContact = exports.DisplayProjects = exports.DisplayServices = exports.DisplayAbout = exports.DisplayHome = void 0;
function DisplayHome(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', displayName: '' });
}
exports.DisplayHome = DisplayHome;
function DisplayAbout(req, res, next) {
    res.render('index', { title: 'About', page: 'about', displayName: '' });
}
exports.DisplayAbout = DisplayAbout;
function DisplayServices(req, res, next) {
    res.render('index', { title: 'Services', page: 'services', displayName: '' });
}
exports.DisplayServices = DisplayServices;
function DisplayProjects(req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects', displayName: '' });
}
exports.DisplayProjects = DisplayProjects;
function DisplayContact(req, res, next) {
    res.render('index', { title: 'Contact', page: 'contact', displayName: '' });
}
exports.DisplayContact = DisplayContact;
//# sourceMappingURL=index.js.map