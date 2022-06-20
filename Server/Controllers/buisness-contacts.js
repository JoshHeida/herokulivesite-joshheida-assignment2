"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDelete = exports.ProcessEdit = exports.ProcessAdd = exports.DisplayEdit = exports.DisplayAdd = exports.DisplayBuisContacts = void 0;
const buisContact_1 = __importDefault(require("../Models/buisContact"));
const Util_1 = require("../Util");
function DisplayBuisContacts(req, res, next) {
    buisContact_1.default.find(function (err, contactColl) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Buisness Contacts', page: 'buisness-contacts', contacts: contactColl, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayBuisContacts = DisplayBuisContacts;
function DisplayAdd(req, res, next) {
    res.render('index', { title: 'Add', page: 'edit', contacts: '', displayName: (0, Util_1.UserDisplayName)(req) });
}
exports.DisplayAdd = DisplayAdd;
function DisplayEdit(req, res, next) {
    let id = req.params.id;
    buisContact_1.default.findById(id, {}, {}, function (err, contactEdit) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Edit', page: 'edit', contacts: contactEdit, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayEdit = DisplayEdit;
function ProcessAdd(req, res, next) {
}
exports.ProcessAdd = ProcessAdd;
function ProcessEdit(req, res, next) {
}
exports.ProcessEdit = ProcessEdit;
function ProcessDelete(req, res, next) {
}
exports.ProcessDelete = ProcessDelete;
//# sourceMappingURL=buisness-contacts.js.map