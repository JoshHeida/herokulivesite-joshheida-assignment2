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
    }).sort({ Name: 1 });
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
    let newContact = new buisContact_1.default({
        "Name": req.body.contactName,
        "phNumber": req.body.contactPhone,
        "Email": req.body.contactEmail
    });
    buisContact_1.default.create(newContact, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/buisness-contacts');
    });
}
exports.ProcessAdd = ProcessAdd;
function ProcessEdit(req, res, next) {
    let id = req.params.id;
    let updateContact = new buisContact_1.default({
        "_id": id,
        "Name": req.body.contactName,
        "phNumber": req.body.contactPhone,
        "Email": req.body.contactEmail
    });
    buisContact_1.default.updateOne({ _id: id }, updateContact, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect("/buisness-contacts");
    });
}
exports.ProcessEdit = ProcessEdit;
function ProcessDelete(req, res, next) {
    let id = req.params.id;
    buisContact_1.default.remove({ _id: id }, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect("/buisness-contacts");
    });
}
exports.ProcessDelete = ProcessDelete;
//# sourceMappingURL=buisness-contacts.js.map