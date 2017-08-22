"use strict"

// //Reversing User Input String
// var stuff = "Type something: ";

// function getUserInput(){
// 	return prompt(stuff);
// }

// function reverseInput(){
// 	alert("Your input reversed is " + getUserInput().split("").reverse().join(""));
// }

// reverseInput();
// //console.log("String: " + prompt(stuff, "Type Here"));

// //Below is problem 5, palindrome checker
// var someText = prompt("Type something: ");
// someText = someText.replace(/\s+/g, '');

// function palindrome(){
// 	if(someText === someText.split("").reverse().join("")){
// 		console.log(someText);
// 		console.log("Its a palindrome thingy!");
// 	}	
// 	else{
// 		console.log("Not a palindrome; Lame!");
// 	}	
// }
// palindrome();

////problem 7, prints out all prime #s from 1-100
// var num = 1;
// function primeCheck(){
// 	if(num < 2){
// 		return false;
// 	}
// 	for (var i = 2; i <= num; i++){
// 		for(var i = 1; i <= 100; i++){
// 			if(num%i===0){
// 				return false;
// 			}
// 		}	
// 	}
// 	return true;
// }
// primeCheck();

// function primeCounter(){
// 	for(var i = 0; i < 100; i++){
// 		if(primeCheck(i)){
// 			console.log(i);
// 		}
// 	}
// }
//primeCounter();

//example of problem 7 that works
// function isPrime(num) {
// 	for(var i = 2; i <= 100; i++){
// 	  	var prime = true;
// 	    for(var num = 2; num <= i; num++){
// 	    	if(i%num === 0 && num !== i){
// 	    		prime = false;
// 	    	}
//     	}
//     	if(prime === true){
//     		console.log(i);
//     	}
// 	}
// }
// isPrime();

//Problem 8, fibonacci
// var startNum = 1;
// var savedNum = 1;
// var newSum = startNum + savedNum;

// function fibonacci(){
// 	for(var i = 1; i <= 20; i++){
// 		if(newSum >= savedNum){
// 			console.log(newSum);
// 			startNum = savedNum;
// 			savedNum = newSum;
// 			newSum = startNum + savedNum;
// 		}
// 	}
// }

// fibonacci();

//Problem 8 with user input
var startNum = parseInt(prompt("Enter an integer: "));
var savedNum = startNum;
var newSum = startNum + savedNum;

function fibonacci(){
	for(var i = 1; i <= 20; i++){
		if(newSum >= savedNum){
			console.log(newSum);
			startNum = savedNum;
			savedNum = newSum;
			newSum = startNum + savedNum;
		}
	}
}

fibonacci();