"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const csv_parser_1 = __importDefault(require("csv-parser"));
const fs_1 = __importDefault(require("fs"));
const results = [];
//
const headers = [
    "id",
    "name",
    "username",
    "price",
    "number2",
    "number3",
    "number4",
    "location",
    "type",
    "percentage",
];
//
const stream = fs_1.default
    .createReadStream("csv100.csv")
    .pipe((0, csv_parser_1.default)({
    headers: headers,
}))
    .on("data", (data) => results.push(data));
exports.default = stream;
