"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const buisContactsSchema = new Schema({
    Name: String,
    PhNumber: String,
    Email: String
});
const Model = mongoose_1.default.model("buisnessContacts", buisContactsSchema);
exports.default = Model;
//# sourceMappingURL=buisContact.js.map