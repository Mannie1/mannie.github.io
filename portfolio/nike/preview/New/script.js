// window.addEventListener("load", function(){
//     // alert ("Good Afternoon")
//     x = 1;
//     document.getElementById.innerHTML = "dog";
//     let a = 40;
//     var y = 50;
//     const n = "steve";
//     const b = "20";
//     let name = false;
//     var c = true;
//     let a,b,c;
// });

// function areaofaCircle(radius){
//     const PI = 3.142;
//     return PI*radius*radius;
// }

// areaofaCircle(7);

// const result = areaofaCircle(7);
// console.log(result)

// function dob(age) {
//   const d = new Date();
//   const cy = d.getFullYear();
//   return cy - age;
// }

// let y = dob(22);
// console.log(y);

// document.getElementById("btn").onclick =() => {
//     const age = document.getElementById("ageInput").value;
//     let result = dob(age);
//     document.getElementById("result").innerHTML = result;
// }

// function fig(num){
//     const numb = 1;
//     return numb - num;
// }
// document.getElementById("btn").onclick =() => {
//     const num1 = parseInt (document.getElementById("num1").value);
//     const num2 = parseInt (document.getElementById("num2").value);
//     let result = num1 + num2;
//     document.getElementById("result").innerHTML = "Sum of " + num1 + " and " + num2 + " is = " + result;
// }

document.getElementById("btn").onclick = () => {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var operate = document.getElementById("operate").value;
    var result;

    if (operate === '+') {
        result = num1 + num2;
    } else if (operate === '-') {
        result = num1 - num2;
    } else if (operate === '*') {
        result = num1 * num2;
    } else if (operate === '/') {
        result = num1 / num2;
    };
    document.getElementById("result").value = result;
};