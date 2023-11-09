// Циклы и примитивы
// 0. even-or-odd
// function evenOrOdd(number) {
//   return number%2 === 0  ? "even" : "odd"
// }
// console.log(evenOrOdd(2));
// 1. opposite-number
// function opposite(number) {
//   return -number
// }
// 2. century-form-year
// function century(year) {
// 	return Number.isInteger(year/100) ? (year+100)/100 : Math.ceil(year/100) 
 
// }

// console.log(century(2000));
// 3. abbreviate-a-two-word-name
// function abbrevName(name){
// 	return name.split(" ").map(item => item[0]).join(".")
// }
// console.log(abbrevName("Igor Borisenko"));
// 4.  reversed-strings
// function solution(str){
// 	return str.split("").reverse().join("")
// }
// console.log(solution("IGOR"));
// 5. credit-card-mask
// function maskify(cc) {
// 	return cc.toString().split("").slice(0,-4).map(item => item ="#").join("") + cc.toString().split("").slice(-4).join("")
// }
// console.log(maskify(1241425633513157));
// 6. emove-first-and-last-character
// function removeChar(str){
// 	return str.slice(1, str.length-1)
//  };
//  console.log(removeChar("adadaefrwte"));
// 7.create-phone-number
// function createPhoneNumber(numbers){
// 	numbers = numbers.join("")
//   return `(${numbers.slice(0, 3)}) ${numbers.slice(3,6)}-${numbers.slice(6)}`
// }
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
//  8.How many arguments
// function args_count(){
// 	return arguments.length
// }
// console.log(args_count("2", "23"));
// 9.Leap Years
// function isLeapYear(year) {
// 	if(year>=1600 && year<=4000){
// 		return year%4 === 0 ? "yes" : year%100 === 0 ? "no" : year%400 === 0 ? "yes" : "no"
// 	}
// 	return false
// }
// console.log(isLeapYear(2560));
// 10.If you can't sleep, just count sheep
// var countSheep = function (num){
// 	let res = ""
// 	for(i=1;i<=num;i++){
// 		res+= i + " sheep..."
// 	}
//   return res
// }
// console.log(countSheep(3));
// 11. Growth of a Population
// function nbYear(p0, percent, aug, p) {
// 	for(i = 0; p0<p; i++){
// 		p0 = Math.floor(p0 + p0 * percent / 100 + aug);
// 	}
// 	return i
// }
// console.log(nbYear(1500, 5, 100, 5000));
// 12.Perfect Number Verifier
// function isPerfect(n) {
// 	let res = []
//   for(i=0;i<n;i++){
// 		res.push(i)
// 	}
// 	return res.filter(item=>Number.isInteger(n/item)).reduce((acc,item)=>acc+item) === n ? true : false
// }

// console.log(isPerfect(28));

// Массивы и строки I
// 13. list-filtering
// function filter_list(l) {
// 	return l.filter(item => typeof item === "number")	
// }
// console.log(filter_list([1,2,'aasf','1','123',123]));
// 14.shortest-word
// function findShort(s){
// 	return s.split(" ").sort((a,b)=>a.length - b.length)[0].length
// }
// console.log(findShort("Ad ew wer werty q qwe reqrt"));
// 15.sum-of-positive
// function positiveSum(arr) {
// 	return arr.filter(item => item >= 0).reduce((acc, item)=>acc+item, 0)
// }
// console.log(positiveSum([0]));
// 16.Build a square
// function generateShape(integer){
// 	return `${"+".repeat(integer)}\n`.repeat(integer).trim()
// }
// console.log(generateShape(23));
// 17.Vowel Count
// function getCount(str) {
//   return str.split("").filter(item => "aeiou".includes(item)).length
// }
// console.log(getCount("abracadabra"));
// 18.playing-with-digits
// function digPow(n, p){
// 	let res = String(n).split("").reduce((acc,item,index) => acc + Math.pow(item, p + index), 0)
// 	return res % n ? -1 : res/n
// }
// console.log(digPow(46288, 3));
// 19.Smallest value of an array
function min(arr, toReturn) {
	return toReturn === "value" ? arr.sort((a,b)=> a-b)[0] : arr.sort((a,b)=> a-b)
}
console.log(min([23,4,13,3,5], "w"));