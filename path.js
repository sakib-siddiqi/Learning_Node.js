import path from "path";
import OS from "os";
import { log } from "./functions.js";
const indexPath = "E:/Learning_Backend/Node.js/Day_1/index.js";
const newPath = "E:/Learning_Backend";

console.log(log("dirName"), path.dirname(indexPath));
console.log(log("baseName"), path.basename(indexPath));
console.log(log("extName"), path.extname(indexPath));
console.log(log("isAbsolute"), path.isAbsolute(indexPath));
console.log(log("join"), path.join("foo/", "bar/"));
console.log(log("parse"), path.parse(indexPath));
console.log(log("relative"),path.relative(indexPath, newPath));
console.log(log("separetor"),path.sep);