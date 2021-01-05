"use strict";

const fs = require("fs");

let rawData = fs.readFileSync("ssoptions.json");
let optionsTree = JSON.parse(rawData);
console.log(optionsTree.inputCss);