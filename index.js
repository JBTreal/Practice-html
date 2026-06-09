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

//element selector
const fruits = document.getElementsByClassName("fruits");


Array.from(fruits).forEach(friut=> {friut.style.backgroundColor = "yellow"});

const h4elements = document.getElementsByTagName("h4");
const liElement = document.getElementsByTagName("li");

Array.from(h4elements).forEach(root => {root.style.backgroundColor = "green"});
Array.from(liElement).forEach(veggie => {veggie.style.backgroundColor = "lightgreen"});
