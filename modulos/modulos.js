"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const retangulo_1 = __importDefault(require("./retangulo"));
const circunferencia_1 = require("./circunferencia");
const circunferencia_2 = require("./circunferencia");
console.log((0, retangulo_1.default)(7, 8));
console.log((0, circunferencia_1.areaCircunferencia)(2));
console.log((0, circunferencia_2.areaCircunferencia)(2));
const { digaOi } = require("./novo");
console.log(digaOi('Ana'));
