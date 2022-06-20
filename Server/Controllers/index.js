"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayBuisContacts = exports.DisplayContact = exports.DisplayProjects = exports.DisplayServices = exports.DisplayAbout = exports.DisplayHome = void 0;
function DisplayHome(req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
}
exports.DisplayHome = DisplayHome;
function DisplayAbout(req, res, next) {
    res.render('index', { title: 'About', page: 'about' });
}
exports.DisplayAbout = DisplayAbout;
function DisplayServices(req, res, next) {
    res.render('index', { title: 'Services', page: 'services' });
}
exports.DisplayServices = DisplayServices;
function DisplayProjects(req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects' });
}
exports.DisplayProjects = DisplayProjects;
function DisplayContact(req, res, next) {
    res.render('index', { title: 'Contact', page: 'contact' });
}
exports.DisplayContact = DisplayContact;
const buisContact_1 = __importDefault(require("../Models/buisContact"));
function DisplayBuisContacts(req, res, next) {
    buisContact_1.default.find(function (err, contactColl) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Buisness Contacts', page: 'buisness-contacts', contacts: contactColl });
    });
}
exports.DisplayBuisContacts = DisplayBuisContacts;
//# sourceMappingURL=index.js.map