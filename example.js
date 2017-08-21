"use strict"

	// document.write("Jared Burks");

	// console.log("24");

	// alert("Wisconsin");

	//worker pay calculator
	// var workerAhours = 34;
	// var workerBhours = 47;
	// var workerApay = 17.24;
	// var workerBpay = 23.43;
	// var weeklyPayA = workerAhours*workerApay;
	// var weeklyPayB = workerBhours*workerBpay;

	//using functions with these 3 variables
	// var hours = prompt("Type in your hours: ");
	// var pay = prompt("Type in your pay rate: ");
	// var weeklyPay = hours*pay;
	
	// function payCalculator(hours,rate){
	// 	if(hours<=40){
	// 		var final = parseFloat(Math.round(weeklyPay * 100) / 100).toFixed(2);
	// 		console.log(final);
	// 		alert("Weekly Pay is: $" + final);
	// 	}
	// 	else if(hours>40){
	// 		var overtime = hours-40;
	// 		hours = hours - overtime;
	// 		weeklyPay = hours * pay;
	// 		var extraPay = overtime * pay*1.5;
	// 		weeklyPay = (extraPay + weeklyPay).toFixed(2);
	// 		console.log(weeklyPay);
	// 		alert("Weekly Pay is: $" + weeklyPay);
	// 	}
	// }
	// payCalculator(hours, pay);

	//below is a way to display single digits with 2 decimal places. Example 1 would be 1.00
	// var result = parseFloat(Math.round(3 * 100) / 100).toFixed(2);
	// console.log(result);


	// if(workerAhours<40){
	// 	console.log(weeklyPayA);
	// }
	// else if(workerAhours>40){
	// 	var workerAovertime = workerAhours-40;
	// 	workerAhours = workerAhours - workerAovertime;
	// 	weeklyPayA = workerAhours * workerApay;
	// 	var workerAextra = workerAovertime * workerApay*1.5;
	// 	weeklyPayA = (workerAextra + weeklyPayA).toFixed(2);
	// 	//weeklyPayA = weeklyPayA.toFixed(2);
	// 	console.log(weeklyPayA);
	// }

	// if(workerBhours<40){
	// 	console.log(weeklyPayB);
	// }
	// else if(workerBhours>40){
	// 	var workerBovertime = workerBhours-40;
	// 	workerBhours = workerBhours - workerBovertime;
	// 	weeklyPayB = workerBhours * workerBpay;
	// 	var workerBextra = workerBovertime * workerBpay*1.5;
	// 	weeklyPayB = (workerBextra + weeklyPayB).toFixed(2);
	// 	//weeklyPayB = weeklyPayB.toFixed(2);
	// 	console.log(weeklyPayB);
	// }

	// //fizzbuzz
	// for(var i = 0; i <= 100; i++){
	// 	if(i===0){
	// 		console.log(i);
	// 	}
	// 	else if(i%3 ===0 && i%5===0){
	// 			console.log("fizzbuzz");
	// 	}
	// 	else if(i%3===0){
	// 		console.log("fizz");
	// 	}
	// 	else if(i%5===0){
	// 		console.log("buzz");
	// 	}
	// 	else{
	// 		console.log(i);
	// 	}
	// }

	//Javascript problem 3. Capitalize 1st character of each word seperated by a space.
	// var userString = prompt("Type some words: ");

	// function bigLetters(){
	// 	var userArray = userString.split(" ");
	// 	//console.log(userArray);
	// 	for(var i = 0 ; i < userArray.length ; i++){
	//         userArray[i] = userArray[i].charAt(0).toUpperCase() + userArray[i].substr(1);
 //    	}
 //    	alert(userArray.join(" "));
	// }

	// bigLetters();

	//failing at this(problem 4), ganna try something different below.
	// function compression(){
	// 	var str = prompt("Type Letters: ");
	// 	var initalChar = str.charAt(0);
	// 	var count = {};
		
	// 	for(var i = 0; i < str.length; i++){
	// 		var currentChar = str[i];
	// 		if(count[currentChar]){
	// 			count[currentChar]++;
	// 		}
	// 		else{
	// 			count[currentChar] = 1;
	// 		}
	// 	}
	// 	console.log(count);
	// 	console.log(Object.keys(count));
	// 	console.log(Object.values(count));
	// 	console.log(count.a);
	// 	alert(JSON.stringify(count));		
	// }

	// compression();

		//Javascript problem 4
		function compression(){
		var str = prompt("Type Letters: ");
		var initalChar = str.charAt(0);
		var count = 0;
		var compressedStr = "";
		
		for(var i = 0; i < str.length; i++){
			var currentChar = str[i];
			if(initalChar === currentChar){
				count++;
			}
			else if(count === 1){
				compressedStr += initalChar;
				initalChar = currentChar;
			}
			else{
				compressedStr += count + initalChar;
				initalChar = currentChar;
				count = 1;
			}
		}

		if(count ===1){
			compressedStr += currentChar;
		}
		else{
			compressedStr += count + currentChar;
		}
		console.log(compressedStr);
	}

	compression();