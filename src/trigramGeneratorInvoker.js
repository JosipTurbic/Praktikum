const {trigramGenerator} = require("./trigramGenerator");

const fs = require("fs");
const fileName = "datoteka1.txt";
var text = fs.readFileSync(fileName, "utf-8");

console.log(trigramGenerator(text));