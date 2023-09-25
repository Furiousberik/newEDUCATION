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
// console.log(high("I love my mother"))

// const b = (a,b,c) => a*b*c

// function curry(fn){
// 	return function carried(...newArgs) {
// 		if(newArgs.length >= fn.length){
// 			return fn.apply(this, args)
// 		}
// 		else{
// 			return carried.bind(this, ...args)
// 		}
// 	}
// }


// console.log(curry(b));

// const b = [1,2,3,4]

// const [,,a = 1] = b

// const now = new Date()
// now.setDate(now.getDate()-2)
// now.setHours(now.getHours()-2)
// console.log(now);


// const c = {
// 	name: "Igor",
// 	age: 23
// }
// console.log(JSON.stringify(c, ["name"]));

function z(a) {
	return function v(b){
		return a+b
	}
}

// console.log(z(2)(3))

function rec(n){
	return n ? n*rec(n-1) : 1
}

// console.log(rec(5));

// const car = (a,b,c) => {
// 	return a*b*c
// }

// function curry(fn){
// 	return function carried(...args){
// 		if(args.length>=fn.length){
// 			return fn.call(this, ...args)
// 		}
// 		else {
// 			return carried.bind(this, ...args)
// 		}
// 	}
// }

// const curryCar = curry(car)

// console.log(curryCar(3,4));



// Call//Bind//Apply
function Person(name,age){
	this.name = name
	this.age = age
}

const b = new Person("Igor", 23)