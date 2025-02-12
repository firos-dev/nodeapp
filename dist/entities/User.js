"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const bcrypt_1 = __importDefault(require("bcrypt"));
let User = class User {
    id;
    firstName;
    lastName;
    dob;
    idCard;
    idCardS3Key;
    phone;
    phoneSecondary;
    email;
    userName;
    password;
    addressLineOne;
    addressLineTwo;
    street;
    location;
    city;
    country;
    postCode;
    photo;
    photoS3Key;
    token;
    status;
    created;
    updated;
    createdAt;
    updatedAt;
    async hashPassword() {
        this.password = this.password ? await bcrypt_1.default.hash(this.password, 10) : null;
    }
    async hashPasswordOnUpdate() {
        this.password = this.password ? await bcrypt_1.default.hash(this.password, 10) : null;
    }
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "first_name", nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "last_name", nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "dob", nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "dob", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "id_card", nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "idCard", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "id_card_s3_key", nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "idCardS3Key", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "phone", nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "phone_secondary", nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "phoneSecondary", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "email", nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "user_name", nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "userName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "password", nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "address_line_one", nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "addressLineOne", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "address_line_two", nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "addressLineTwo", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "street", nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "street", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "location", nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "city", nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "country", nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "post_code", nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "postCode", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "photo", nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "photo", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "photo_s3_key", nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "photoS3Key", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "token", array: true, nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "status",
        default: "Active",
    }),
    __metadata("design:type", Object)
], User.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => User),
    (0, typeorm_1.JoinColumn)([{ name: "created_id", referencedColumnName: "id" }]),
    __metadata("design:type", User)
], User.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => User),
    (0, typeorm_1.JoinColumn)([{ name: "updated_id", referencedColumnName: "id" }]),
    __metadata("design:type", User)
], User.prototype, "updated", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Object)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Object)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "hashPassword", null);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "hashPasswordOnUpdate", null);
exports.User = User = __decorate([
    (0, typeorm_1.Index)("user_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("user", { schema: "public" })
], User);
//# sourceMappingURL=User.js.map