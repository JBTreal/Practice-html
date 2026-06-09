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

function func1(callback){
setTimeout(() => {console.log("Task 1"); callback()}, 3000)
}

function func2(){
console.log("Task 2");
console.log("Task 3");
console.log("Task 4");
console.log("Task 5");
}

func1(func2);