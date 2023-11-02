//problem 1

var fruits = ['apple', 'banana', 'orange'];

var indeex = fruits.indexOf('banana');
console.log(indeex);
fruits[1]="mango";
console.log(fruits);


fruits.pop();
fruits.push('watermelon');

console.log(fruits);

//problem 2
var result=100;
var suhin=85;
var tom=66;
var jane=95;
var peter=56;
var john=40;

if(result>80){
    console.log('suhin and jane got a+');
}else if(result>60){
    console.log('suhin and jane got b');
}else{
    console.log('c');
}


// problem 3

var num1= 2113;
var num2=739;
var num3=95;

if(num1>num2){
    console.log('num1 is the largest number')
} else if(num2>num3){
    console.log('num2 is the largest number')
}else{
    console.log('num3 is the largest number')
}


// problem solve 4


var side1=9;
var side2=8;
var side3=9;

if(side1==side2){
    console.log('1 is isosceles');
}else if(side2==side3){
    console.log('2 is isosceles');
}else if(side1==side3){
    console.log('3 is isosceles');
}












