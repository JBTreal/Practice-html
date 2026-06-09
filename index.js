//day 1: 1:53:42;
//day 2: 2:23:08;
//day 3: 3:58:42;
//day 4; 5:17:42;
//day 5: 6:31:46;
//day 6: --N/A--;
//day 7: 6:40:08;
//day 8: 7:34:13;
//day 9: --N/A--;

const get_answer= document.getElementById("get_answer");
const text = document.getElementById("text");
const text2 = document.getElementById("text2");
const submitbtn = document.getElementById("submit");

import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

try{
const dividend = Number(window.prompt("Enter a dividend: "));
const divisor = Number(window.prompt("Enter your divisor: "));

if(divisor ==0){
    throw new Error("You can't divide by zero");
}
if(isNaN(dividend) || isNaN(divisor)){
    throw new Error("Values must be a number");
}

const result = dividend/divisor;

console.log(result);
}
catch(error){
    console.error(error);
}
console.log("You reach the end");
