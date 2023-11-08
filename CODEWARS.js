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

