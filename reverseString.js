"use strict"

//Reversing User Input String
var stuff = "Type something: ";

function getUserInput(){
	return prompt(stuff);
}

function myFunction(){
	alert("Your input reversed is " + getUserInput().split("").reverse().join(""));
}

myFunction();
//console.log("String: " + prompt(stuff, "Type Here"));

