"use strict";
y = 2;
//alert("I am javscript");
//console.log("I am javscript");

/*var a = 10; //Number
var b = 20; //Number
var b = 40;
console.log(b + a);*/
/*
let a = 10;
a--
console.log(a);


let a = 10;
let b = "10";
if (a === b) {
console.log("true");
} else {
console.log("false");
}*/
let a = 11;
let b = 10;
let c;
//console.log(c)
let day = "Thursday";
let nday = "Friday";
let s = `Today is ${day} 

and tomorrow is ${nday}

and tomorrow is ${nday}`;

function viewInhtml(_id) {
  //console.log(`line 35`)
  document.getElementById(_id).innerHTML = s;
}
viewInhtml("mydiv");
viewInhtml("mydiv1");

let myArr = [
  "Canada",
  "AMerica",
  "Brazil",
  "India",
  "UAE",
  1,
  2,
  3,
  4,
  true,
  2.22,
];

//myArr.push("10.24") /* inserting value from end */
//myArr.pop() /* remove value from end */
//myArr.shift() /*remove value from start
//myArr.unshift("10.24") /* inserting value from start */
//myArr[myArr.length-1] last index value from array

//myArr.splice(2,1,"Bhutan")// can add value on specific index & can be delete value by count
//let k = myArr.slice(0,3)// can create new array after copying index values as per mentioned index, it can run from last also with - value.

//console.log(k);
//console.log(myArr)

let obj = {
  name: "k",
  country: "india",
  months: {
    m1: "jan",
    m2: "feb",
    m3: "mar",
  },
  statement: function () {
    return `${this.name.toUpperCase()} stays in ${
      this.country
    } and born in ${this.months.m1.toUpperCase()}.`;
  },
  statement: function () {
    return `${this.name.toUpperCase()} stays in ${
      this.country
    } and born in ${this.months.m2.toUpperCase()}.`;
  },
};

console.log(obj.statement());
console.log(obj.statement());
