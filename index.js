//day 1: 1:53:42;
//day 2: 2:23:08;
//day 3: 3:58:42;
//day 4; 5:17:42;
//day 5: 6:31:46;
//day 6: --N/A--;
//day 7: 6:40:08;
//day 8: 7:34:13;
//day 9: --N/A--;
//day 10:8:31:48;
//day 11:8:48:10;

const get_answer= document.getElementById("get_answer");
const text = document.getElementById("text");
const text2 = document.getElementById("text2");
const submitbtn = document.getElementById("submit");

import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

const new_h1 = document.createElement("h1");

new_h1.textContent= "i like rat";
//document.body.prepend(new_h1);

document.body.insertBefore(new_h1,document.getElementById("box2"));

const boxes = document.querySelectorAll(".box");
document.body.insertBefore(new_h1, boxes[1]);
