
/*
1) Calculate the Cube
Write a function `calculateCube` that takes a single number
and prints the volume of a cube made from that number.

console.log(calculateCube(5));
> => 125

*/

/*
function calculateCube(num) {
	return num * num * num; 
}

console.log(calculateCube(9));
*/

/*
2) Is a Vowel?
Write a function `isAVowel` that takes a character
(i.e. a string of length 1) and returns true if it is a vowel,
false otherwise. The vowel could be upper or lower case.


console.log(isAVowel("a"));
> => true
*/



/*
const isAVowel = (letter) => {
const testLetter = letter.toLowerCase();
let result = false

let vowels = ["a", "e", "i", "o", "u"];
for (let i = 0; i <= vowels.length; i++) {
 if (testLetter === vowels[i]) {
 	result = true;
 }
}
return result;
}
console.log(isAVowel('E'));
*/
//const isAVowel = (letter) => {
	

/*
3) Get Two Lengths
Write a function `getTwoLengths` that accepts two parameters (strings).
 The function should return an _array_ of numbers where each number
 is the length of the corresponding string.


console.log(getTwoLengths("Hank", "Hippopopalous"));
> => [4, 13]

*/

/*const getTwoLengths = (word1, word2) => {
	let count1 = word1.length; 
	let count2 = word2.length;
	console.log([count1, count2])

}

getTwoLengths("Hank", "Hippopopalous");
*/

/*
4) Get Multiple Lengths

Write a function `getMultipleLengths` that accepts a single parameter
as an argument: an **array of strings**. The function should return an
array of **numbers** where each number is the length of
the corresponding string.



console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
> => [5, 4, 2, 2, 4]
*/

/*const getMultipleLengths = (array) => {
	let returnArray = []
	for (let i = 0; i < array.length; i += 1) {
  let number = array[i].length;
  returnArray.push(number);
}
console.log(returnArray);
}
getMultipleLengths(["hello", "what", "is", "up", "dude"]);

*/
/*
5) Maximum of Three Numbers
Define a function `maxOfThree` that takes three numbers as
arguments and returns the largest of them. If all numbers are
the same, it doesn't matter which one is returned. If the two
largest numbers are the same, one of them should be returned.


console.log(maxOfThree(6, 9, 1));
> => 9
*/
/*
const maxOfThree = (par1, par2, par3) => {
	let max = Math.max(par1, par2, par3);
	return max;
	if (max == par1 && par2 && par3) {
		return par1;
	} else if ((par1 === par3) && (par1 > par2)) {
		return par1;
	} else if ((par1 === par2) && (par1 > par3)) {
		return par2;
	} else if ((par2 === par3) && (par2 > par1) ) {
		return par3;
	} 

}


console.log(maxOfThree(6, 9, 1));
*/
/*
6) Print Longest Word

Write a function `printLongestWord` that accepts a single argument, an
**array of strings**. The method should return the longest word in the array.
 In case of a tie, the method should return the word that appears first in
 the array.


console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
> => "Peanutbutter"
*/

const array = ["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"];

function printLongestWord(arrayOfStrings) {	
	let longestWord = "";
	for (let i = 0; i < arrayOfStrings.length; i++) {
		if (arrayOfStrings[i].length > longestWord.length) {
			longestWord = arrayOfStrings[i]; 
		}
	}
	return longestWord; 

}
		
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
//THE REDUCE METHOD SAVED ME A LOT OF TIME AND CODE. IT TURNS EACH ITEM IN THE ARRAY INTO A SINGLE VALUE AND COMPARES THE ITEMS IN THE ARRAY BASED ON THE STATEMENT WITHIN THE FUNCTION. IT CONTINUES TO PERFORM THIS ACTION UNTIL IT GETS TO THE END OF THE ARRAY.  IN THIS CASE I HAD THE REDUCE METHOD COMPARE THE LENGTH OF EACH ITEM IN THE ARRAY UNTIL IDENTIFYING THE LARGEST VALUE. 


//console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));


/*
7) Transmogrify the Numbers
Write a Javascript function called `transmogrify`.
This function should accept three arguments, which you
can assume will be numbers. Your function should return the
"transmogrified" result.

The transmogrified result of three numbers is the product of the
first two numbers, raised to the power of the third number.

For example, the transmogrified result of 5, 3, and 2 is
(5 times 3) to the power of 2 is 225.


console.log(transmogrify(5, 3, 2));
> => 225
*/
/*
const transmogrify = (num1, num2, num3) => {

	return (num1 * num2) ** num3; 
}
console.log(transmogrify(5, 3, 2));
*/
/*
8) A Needle in the Haystack
Write a function `findNeedle()` that takes an array full of junk
but contains one `"needle"`

After your function finds the needle it should return a message
(as a string) that says:
"found the needle at postition {index of needle}"

console.log(find_needle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))
> => "found the needle at position 5"
*/
/*
function findNeedle(haystack) {
	return "found the needle at position" + " " + haystack.indexOf("needle");
}

console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))	
*/




/*
9) Sum the Positive
Write a function sumPositive() that takes an array of positive and negative numbers and returns the sum of only the positive numbers

console.log(sumPositive([1, -4, 7, 12]))
> => 20
*/

function sumPositive(arrayOfNumber)  {
	let negativeNumbers = [];
	let sum = 0; 

	for (let i = 0; i < arrayOfNumber.length; i++) {
		if (arrayOfNumber[i] < 0) {
			negativeNumbers.push(negativeNumbers[i]);
		} else {
			sum += arrayOfNumber[i];
		}
	}
	return sum; 
}
console.log(sumPositive([1, -4, 7, 12]));