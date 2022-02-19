import { arrow, rocket } from "./icon.js";

let sumOfArr = (arr = []) => arr.reduce((a, b) => a + b, 0);
let log=(log)=> `${rocket} ${log} ${arrow}` ;
export {sumOfArr,log}