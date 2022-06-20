"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Util_1 = require("../Util");
const buisness_contacts_1 = require("../Controllers/buisness-contacts");
router.get('/buisness-contacts', Util_1.AuthGuard, buisness_contacts_1.DisplayBuisContacts);
router.get('/edit/:id', Util_1.AuthGuard, buisness_contacts_1.DisplayEdit);
router.get('/add', Util_1.AuthGuard, buisness_contacts_1.DisplayAdd);
router.post('/edit/:id', Util_1.AuthGuard, buisness_contacts_1.ProcessEdit);
router.post('/add', Util_1.AuthGuard, buisness_contacts_1.ProcessAdd);
router.get('/delete/:id', Util_1.AuthGuard, buisness_contacts_1.ProcessDelete);
exports.default = router;
//# sourceMappingURL=buisness-contacts.js.map