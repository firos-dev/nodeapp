"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
dotenv_1.default.config();
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
const User_1 = require("./entities/User");
const AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    entities: [
        User_1.User,
    ],
    logging: false,
    migrations: [__dirname + "/migrations/*.ts"],
    synchronize: true,
});
exports.default = AppDataSource;
//# sourceMappingURL=db.js.map