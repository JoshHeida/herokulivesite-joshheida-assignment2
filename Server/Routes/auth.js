"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../Controllers/auth");
const router = express_1.default.Router();
router.get('/login', auth_1.DisplayLogin);
router.get('/register', auth_1.DisplayRegister);
router.post('/login', auth_1.ProcessLogin);
router.post('/register', auth_1.ProcessRegister);
router.get('/logout', auth_1.ProcessLogout);
exports.default = router;
//# sourceMappingURL=auth.js.map