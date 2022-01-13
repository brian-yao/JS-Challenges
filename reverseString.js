/* Reverse input string */

let str = "hello";

//Iterative
function reverseString(str) {
	var reverse = "";
	for (let i = str.length - 1; i >= 0; i--) {
		reverse += str[i];
	}
	return reverse;
}
reverseString("hello");

//Recursive
function reverseString(str) {
	if (str === "") return "";
	else return reverseString(str.substr(1)) + str.charAt(0);
}
reverseString(str);

//Built-in Function

let reverse = str.split("").reverse().join("");
