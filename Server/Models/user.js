"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const passport_local_mongoose_1 = __importDefault(require("passport-local-mongoose"));
const userSchema = new Schema({
    Displayname: String,
    username: String,
    EmailAddress: String,
    Created: {
        type: Date,
        default: Date.now()
    },
    Updated: {
        type: Date,
        default: Date.now()
    }
}, {
    collection: "users"
});
userSchema.plugin(passport_local_mongoose_1.default);
const Model = mongoose_1.default.model("User", userSchema);
exports.default = Model;
//# sourceMappingURL=user.js.map