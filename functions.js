import { arrow, rocket } from "./icon.js";

let sumOfArr = (arr = []) => arr.reduce((a, b) => a + b, 0);
let log = (log) => `${rocket} ${log} ${arrow}`;
let print = (data) =>
  console.log(`🚀 ${new Date().toLocaleTimeString()} : ${data}`);
export { sumOfArr, log,print };
