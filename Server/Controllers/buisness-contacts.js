"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayBuisContacts = void 0;
const buisContact_1 = __importDefault(require("../Models/buisContact"));
function DisplayBuisContacts(req, res, next) {
    buisContact_1.default.find(function (err, contactColl) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Buisness Contacts', page: 'buisness-contacts', contacts: contactColl, displayName: '' });
    });
}
exports.DisplayBuisContacts = DisplayBuisContacts;
//# sourceMappingURL=buisness-contacts.js.map