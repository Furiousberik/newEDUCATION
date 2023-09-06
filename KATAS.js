// Your Job

// Find the sum of all multiples of n below m
// Keep in Mind

//     n and m are natural numbers (positive integers)
//     m is excluded from the multiples

// Examples

// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

// function sumMul(n,m){
// 	let res = 0
// 	if(n<=0 || m<=0) {
// 		return "INVALID"
// 	}
// 	for(let i = n;i < m;i+=n){
// 		res+=i
// 	}
// 	return res
// }
// console.log(sumMul(77, 10626))

// ====================================================
// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// For example, the score of abad is 8 (1 + 2 + 1 + 4).
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

// function high(x){
// 	return Math.max(...new Set((x.split(" ")
// 					.map((item)=>	item.split("").reduce((acc,item)=>acc + ('abcdefghijklmnopqrstuvwxyz'.indexOf(item.toLowerCase())+1),0)))
// 					))
// }
// console.log(high("I love my mother"));