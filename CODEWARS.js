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
// function min(arr, toReturn) {
// 	return toReturn === "value" ? Math.min(...arr) : toReturn === "index" ? arr.indexOf(Math.min(...arr)) : -1
// }
// console.log(min([23,4,13,10,5], "value"));
// 20. array-dot-diff
// function arrayDiff(a, b) {
//   return a.filter(item=>!b.includes(item))
// }
// console.log(arrayDiff([1,2,2,2,3],[2]));
// 21.find-the-capitals-1
// var capitals = function (word) {
// 	return word.split("").map((item,index)=> item == item.toUpperCase() ? index : false).filter(item => item !== false)
// };
// console.log(capitals("CodEWaRs" ));
// 22.insert-dashes
// function insertDash(num) {
// 	return num.toString().split("").map((item,index,arr) => arr[index]%2 === 1 && arr[index+1]%2===1 ? item+"-" : item).join("")
// }
// console.log(insertDash(454793));
// 23.homogenous-arrays
// function filterHomogenous(arrays) {
//   // Alea iacta est, code legionary!
//   return arrays.filter(item=> item.length > 0 && item.every((item,index,array) => typeof item === typeof array[array.length-1]))
// }
// console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]));
// 24. lottery-ticket
// function bingo(ticket, win){
// 	return ticket.filter(item=> item.filter((item, index, arr) => arr[0].charCodeAt(0) === arr[1]).length > 0).length >= win ? "Winner!" : "Loser!"
// }
// console.log(bingo([['ABC', 65], ['BYHT', 74]], 2));
// 25.row-weights
// function rowWeights(array){
//   return [array.filter((item,index)=> index%2 === 0).reduce((acc,item)=> acc+item, 0), array.filter((item,index)=> index%2 !== 0).reduce((acc,item)=> acc+item, 0)]
// }
// console.log(rowWeights([2,3,123]));
// 26.  scrolling-text
// function scrollingText(text){
//   let result = []
  
//   for( var i = 0; i < text.length; i++){
//     result.push((text.slice(i) + text.slice(0,i)).toUpperCase())
//   }
//   return result
// }
// console.log(scrollingText("codewars"));
// 27.Write Number in Expanded Form
// function expandedForm(num) {
// 	return num.toString().split("").reverse().map( (a, i) => a * Math.pow(10, i)).filter(a => a > 0).reverse().join(" + ");
// }
// console.log(expandedForm(70504));
// 28.is-every-value-in-the-array-an-array
// const arrCheck = value => value.every(item=> Array.isArray(item))
// console.log(arrCheck([[1],"2"]));
// 29.	make-a-square-box
// function box(n) {
//   const outB = '-'.repeat(n);
//   const inB = `-${' '.repeat(n-2)}-`;

//   return [outB, ...Array(n-1).fill(inB), outB];
// }
// console.log(box(4));
// 30.magic-index
// function findMagic(arr){
// 	return Number(arr.filter((item, index)=> item === index).join("")) || -1
// }
// console.log(findMagic([-20,-10,2,10,20]));
// 31. Email Address Obfuscator
// const obfuscate = function(email) {
//   return email.replaceAll("."," [dot] ").replaceAll("@", " [at] ")
// }
// console.log(obfuscate("borisenko.igor2017@mail.ru"));
// 32. Check the exam
// function checkExam(array1, array2) {
// 	let x = array1.map((item,index)=>array2[index].includes(item)  ? 4 : array2[index] === "" ? 0 : -1).reduce((acc,item)=>acc+item, 0) 
// 	return x < 0 ? 0 : x
// }
// console.log(checkExam(["a", "a", "b", "b"], ["d", "c", "", "d"]));
// 33. Count the smiley faces
// function countSmileys(arr) {
// 	let count = 0
// 	let validSmileys = [":D", ";D", ":)", ";)", ":-D", ";-D", ":-)", ";-)", ":~D", ";~D", ":~)", ";~)"];
// 	for(let i =0; i<arr.length;i++){
// 		if(validSmileys.includes(arr[i])){
// 			count++
// 		}
// 	}
// 	return count
// }
// console.log(countSmileys([';D', ':-(', ':-)', ';~)']));
// 34. Small enough?
// function smallEnough(a, limit){
// 	return a.every(item=>item<=limit)
// }
// console.log(smallEnough([20,31,5], 20));