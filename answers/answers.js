//I debugged this using node.js and the built in vs code terminal instead of adding the html tags and testing in a browser. I hope thats alright, the workbook didnt specify

// setting and swapping
var myNumber = 42;
var myName = 'Dylan';
var temp;
temp = myNumber;
myNumber = myName;
myName = temp;
console.log(myNumber, myName);

// print -52 to 1066
for(i = -52; i < 1067; i++) {
    console.log(i);
}

//Don't Worry, Be Happy
function beCheerful(){
    for(i = 0; i < 98; i++) {
    console.log ('good morning!');
    }
}
beCheerful();

//multiples of 3
for(i = -300; i < 0; i++){
    if(i == -3) {
        continue;
    }
    if(i == -6){
        continue;
    }
    if(i%3 === 0){
        console.log(i);
    }
}
//intergers with while
var y = 2000
while(y < 5281){
    console.log(y);
    y++;
}
// you say it's your birthday
var input = '';
if(input == '8/1' || input == '1/8'){
    console.log("How did you know?"); 
    }
    else{
        console.log("Just another day....");
    }
// leap year
var year = 24000;
if(year%400 === 0){
    console.log('ribbit');
}
else if(year%4 === 0 && year%100 != 0) {
    console.log('ribbit');
    }
else{
    console.log('not a leap year');
}
//print and count
var count = 0;
for(i = 512; i < 4097; i++){
    if(i%5 === 0){
        console.log(i);
        count++
    }
}
if(i >= 4096){
    console.log(count);
}
//multiples of 6
var i = 6;
var j = 60000;
while(i <= j){
    console.log(i);
    i += 6;
}
//counting, the dojo way
for(i = 1; i < 101; i++){
    if(i%5 === 0 && i%10 === 0){
    
        console.log('Coding Dojo');
    }
        else if(i%5 === 0){
            console.log('Coding');
        }
   
    else{ 
        console.log(i);
    }

}
//what do you know
function inputPrint(incoming){
    console.log(incoming);
}
incoming = 'Coding';

inputPrint(incoming);

//whoa

var count = 0;
for(var i = -300000; i < 300001; i++){
    if(i%3 === 0){
        count += i;
    }
}
console.log(count);

//countdown by fours
for(i=2016; i>=0; i-=4){
        console.log(i);
}
//flexible countdown
var lowNum = 2;
var highNum = 9;
var mult = 3;

for(i=highNum; i>=lowNum; i-=mult){
    console.log(i);
}
//final countdown
var param1=3;//mult
var param2=5;//low
var param3=17;//high
var param4=9;//skip
while(param2 < param3){
    param2++;
    if(param2%param1 === 0 && param2!=param4)
    console.log(param2);
}
//the countdown

function makeArr(input){
    var arr =[];
for(i = input; i >= 0; i--){ 
    arr.push(i);
    }
    return arr;
}
console.log(makeArr(3));


//print and return
function twoVal(input1, input2){
    var arr=[];
    arr.push(input1, input2);
    console.log(arr[0]);
    return arr[1];
}
twoVal(2, 3);


//first plus length

var arr = [];
arr.push('bucks',2,3,'penguin');

function mySum(){
    var sum = arr.length + arr[0];
   console.log(arr);
   console.log(sum);
   return sum;
}
mySum();

//values greater than second

var count = 0;
var arr = [1,3,5,7,9,13];

function valGrt(arr){
  for(i = 0; i < arr.length; i++){
        if(arr[i] > 3){
            count++;
            console.log(arr[i]);
        }
    }
    console.log(count);
}
valGrt(arr);

// values grtr general
var count = 0;
var arr = [7,4,2,1,5,18];
var newArr=[];

function valGen(newArr){
  for(i = 0; i < arr.length; i++){
        if(arr[i] > arr[1]){
            count++;
            newArr.push(arr[i]);
        }
        else if(arr.length == 1){
            console.log("you made the console cry...");
            break;
        }
    }
    console.log(newArr);
    console.log(count);
    return newArr;
}
valGen(newArr);

//this length, that value

function twoNum(input1, input2){
    var arr=[];
    if(input1 === input2){
        console.log("jinx!");
        return arr;
    }
    for(i = 0 ;i < input1; i++){
        arr.push(input2);
    }
    console.log(arr.length);
    console.log(arr);
    return arr;
}
twoNum(17, 18);


//fit the first value
function myGoldi(givenArr){
    if(givenArr[0] > givenArr.length){
        console.log("Too big!");
    }
    else if(givenArr[0] < givenArr.length){
        console.log("Too small!");
    }
    else{console.log("Just right!");}

   console.log(givenArr);
   return givenArr;
}

givenArr = [4,2,3,4]; //input array here

myGoldi(givenArr);

//Fahrenheit to Celsius
function fahrenheitToCelsius(fDegrees){
     cDegrees = (fDegrees - 32) * 5/9
     console.log(cDegrees);
}
fahrenheitToCelsius(545);

//Celsius to Fahrenheit

function celsiusToFahrenheit(cDegrees){
    fDegrees = (cDegrees * 9/5) + 32
    console.log(fDegrees);
}
celsiusToFahrenheit(545);

// biggie size

function bigSwap(arr){
    for(i = 0; i < arr.length; i++){
        if(arr[i] >= 0){
            arr[i] = 'big';
        }
    }
    console.log(arr);
    return arr;
}
arr = [-1,3,5,-5];
bigSwap(arr)

//print low, return high

function lowHigh(arr){
var temp = arr[0];
var temp2 = arr[0];
    for(i = 0; i < arr.length; i++){
        if(arr[i] < temp){
            temp = arr[i];
        }
        if(arr[i] > temp2){
            temp2 = arr[i];
        }
    }
console.log(temp);
return temp2;
}
arr = [-1,3,5,-5];
lowHigh(arr);

// print one, return another
function lowHigh(arr){
    var arrX = arr.length - 2;
    var temp2;
    for(i = 0; i < arr.length; i++){
        if(arr[i]%2 != 0){
            temp2 = arr[i];
        }
    console.log(arr[arrX]);
    return temp2;
    }
}
    arr = [-1,3,5,-5];
    lowHigh(arr);

// Double Vision
function dubArr(arr){
    var newArr = [];
    var temp = arr[0];
    for(i = 0; i < arr.length; i++){
        temp = arr[i]*2
        newArr.push(temp);
    }
    console.log(arr);
    console.log(newArr);
    return newArr;
}

arr =[1,2,3];
dubArr(arr);

// count positives
function countPos(arr){
    var count = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            count++;
        }
    }
    arr.pop([arr.length - 1]);
    arr.push(count);
    console.log(arr);
    return arr;
}
arr = [1,2,-3,4,5];
countPos(arr);

//evens and odds
function countEvenOdd(arr){
    var countOdd = 0;
    var countEven = 0;
    for (i = 0; i < arr.length; i++) {
        if(arr[i]%2 != 0){
            countOdd++;
        }
        else{countOdd = 0;}
        if(arr[i]%2 === 0){
            countEven++;
        }
        else{countEven = 0;}
        if(countOdd == 3){
            console.log("That’s odd!");
            countOdd = 0;
        }
        if(countEven == 3){
            console.log("Even more so!");
            countEven = 0;
        }
    }
}

arr =[3,3,3,2,2,2,5,5,5,5,5,5,8,8,8,8,8,8,5,8,5,8,5,8];
countEvenOdd(arr);

//increment the seconds
function addOne(arr){
for (i = 0; i < arr.length; i++) {
    if(i%2 !=0){
        arr[i] += 1;
        console.log(arr[i]);
        }
    }
    return arr;
}
arr = [1,1,1,1,1,1,1,1];
addOne(arr);

//previous lengths

function arrString(arr){
for (i = 0; i < arr.length; i++){
    var strL = (arr[i]).length;
    arr[i] = strL;
}
arr.unshift(0);
arr.pop();
console.log(arr);
return arr;
}
arr=['banana', 'apple', 'doublebanana', 'bananaslamma'];
arrString(arr);

//add seven to most
function addSev(arr){
    newArr=[];
    for (i = 0; i < arr.length; i++){
        if(i === 0){
            continue;
        }
        else if(arr[i] > 0){
            newArr.push(arr[i]+7);
        }
    }
    console.log(newArr);
    return newArr;
}
arr = [90,2,7,7,14,7];
addSev(arr);

//reverse array
function arrRev(arr){
arr.reverse();
console.log(arr);
return arr;
}
arr = [1,2,3,4,5];
arrRev(arr);

//outlook negative
function makeNeg(arr){
    var newArr = [];
    for (i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            newArr.push(arr[i]);
        }
        else{
            arr[i] *= -1;
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
    return newArr;
}
arr = [1, -2, -3, 4, 5, -6];
makeNeg(arr);

//always hungry
function audTwo(arr){
    var count = 0;
    for (i = 0; i < arr.length; i++){
        if(arr[i] == 'food'){
            console.log('yummy');
            count++;
        }
    }
    if(count === 0){
        console.log('Feed me, Seymour!');
    }
    return arr;
}
arr = [1,1,1,1,1]
audTwo(arr);

//swap toward the center 
/*
function swapCent(arr){
    var temp;
for (i = 0; i < arr.length; i++){
    if(i === 0){
        temp = arr[i];
        arr[i] = arr[arr.length - 1];
        arr[arr.length - 1] = temp;
    }
    if(i%2 != 0)
        continue;
    }
    if(i > 0){
        temp = arr[i];
        arr[i] = arr[arr.length -(i+1)];
        arr[arr.length -(i+1)] = temp;
    }
    console.log(arr);
    return arr;
}
arr = [1,2,3,4,5,6]; 
swapCent(arr); 
*/ // could not solve this on my own

//scale the array
function scaleArr(arr, num){
    for (i = 0; i < arr.length; i++){
        arr[i] *= num;
    }
    console.log(arr);
    return arr;
}
arr =[1,2,3,4,5];
num = 2;
scaleArr(arr, num);