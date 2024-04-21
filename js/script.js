"use strict";
//1.Вывести числа от 654 до 0 на экран.
// let out = document.getElementById("out");
// let str = "";
// for (let i=654; i>=0; i=i-1){
// 	str = str + i + " ";
// }
// out.innerHTML = str;
// let out = document.getElementById("out");
// let number = 654;
// let str = "";
// while(number >= 0) {
// 	str +=number + " ";
// 	number--;
// }
// Елочка вариант 2 (сложный)
// let line = 6;
// let symbol = "*";
// let delimetr = " ";
// let maxLength = line * 2 - 1;
// for (let i = 1; i <= line; i++) {
// 	let string = " ";
// 	for (let j = 0; j <= maxLength; j++) {
// 		let quantitySymbol = i * 2 - 1;
// 		let quantityDelimetr = maxLength - quantitySymbol;
// 		if (j <= quantityDelimetr / 2) {
// 			string = string + delimetr;
// 		}
// 		if (j > quantityDelimetr / 2 && j <= maxLength - quantityDelimetr / 2) {
// 			string = string + symbol;
// 		}
// 		if (j > maxLength - quantityDelimetr / 2) {
// 			string = string + delimetr;
// 		}
// 	}
// 	console.log(string);
// }
// Apprendre les boucles en JavaScript
//for
//while
// for (старт; работаем пока верно; счетчик)

// for (let i = 0; i < 10; i++) {
// 	if (i == 9) break;
// 	console.log(i);
// }//i
// *
// **
// ***
// ****
// *****
// ******
// let result = "";
// const length  = 7;
// for (let i = 1; i < length; i++) {
// 	for (let j = 2; j < i; j++) {
// 		result += "*";
// 	}
// 	result += "\n";
// }
// console.log(result);

// МЕТКИ
first: for (let i = 0; i < 5; i++) {
	console.log(`First level: ${i}`);
	for (let j = 0; j < 5; j++) {
		console.log(`Second level: ${j}`);
		for (let k = 0; k < 5; k++) {
			if (k <= 4) continue first;
			console.log(`Third level: ${k}`);
		}
	}
}
// let str = "";
// loop1: for (let i = 0; i < 5; i++) {
// 	if (i === 1) {
// 		continue loop1;
// 	}
// 	str = str + i;
// }
// console.log(str);
// // Expected output: "0234"