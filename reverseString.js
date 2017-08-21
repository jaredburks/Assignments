"use strict"

//Reversing User Input String
var stuff = "Type something: ";

function getUserInput(){
	return prompt(stuff);
}

function reverseInput(){
	alert("Your input reversed is " + getUserInput().split("").reverse().join(""));
}

reverseInput();
//console.log("String: " + prompt(stuff, "Type Here"));

//Below is problem 5, palindrome checker
var someText = prompt("Type something: ");
someText = someText.replace(/\s+/g, '');

function palindrome(){
	if(someText === someText.split("").reverse().join("")){
		console.log(someText);
		console.log("Its a palindrome thingy!");
	}	
	else{
		console.log("Not a palindrome; Lame!");
	}	
}
palindrome();