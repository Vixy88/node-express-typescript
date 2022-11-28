"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/server", (req, res) => {
    res.status(200).send("API is Running");
});
router.get("/login", (req, res) => {
    res.status(200).send("This will be the login route");
});
exports.default = router;
