"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db"));
const app = (0, express_1.default)();
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!process.env.PORT) {
            throw new Error("Environment variables are missing");
        }
        yield db_1.default.initialize()
            .then((con) => {
            con.runMigrations();
            console.log("Data Source has been initialized!");
        })
            .catch((err) => {
            console.error("Error during Data Source initialization", err);
        });
        app.use(express_1.default.json());
        app.use(express_1.default.urlencoded({ extended: false }));
        app.get("/", (req, res) => {
            res.status(200).json({
                success: true,
                message: "This is your sample request"
            });
        });
        const port = process.env.PORT;
        app.listen(port, () => {
            console.log(`App running on port ${port}`);
        });
    }
    catch (error) {
        console.error(error);
        throw new Error("Unable to connect to db");
    }
}))();
//# sourceMappingURL=index.js.map