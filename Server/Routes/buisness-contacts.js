"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const buisness_contacts_1 = require("../Controllers/buisness-contacts");
router.get('/buisness-contacts', buisness_contacts_1.DisplayBuisContacts);
exports.default = router;
//# sourceMappingURL=buisness-contacts.js.map