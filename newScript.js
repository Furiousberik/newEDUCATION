// ============ Recursion ===================
// ---factorial--

// function rec(n) {
// 	return n ? n * rec(n-1) : 1
// }

// console.log(rec(5));

//  -- alternative --

// function alt(n){
// 	let res = 1
// 	for(let i = n; i > 0; i--){
// 		res *= i
// 	}
// 	return res
// }

// console.log(alt(5));

// ============ Carried ======================

// const car = (a, b, c) => {
// 	return a*b*c
// }

// function carried(fn) {
// 	return function carry(...args){
// 		if(args.length >= fn.length){
// 			return fn.apply(this, args)
// 		}
// 		// return carry.bind(this, ...args)
// 		return function carry2(...newArgs){
// 			return carry.apply(this, args.concat(newArgs))
// 		}
// 	}
// }

// const carriedMul = carried(car)

// console.log(carriedMul(1)(2)(2));
//  -- ALT ---
// const car = (a, b, c) => {
// 	return a*b*c
// }

// function carried(fn, ...args) {
	// return function f(...newArgs){   // задаю первую функцию
// 		const allArgs = [...args, ...newArgs]  // слияние всех аргументов один массив
// 		if(allArgs.length >= fn.length){  // если длина переданных аргументов больше чем длина параметров, то 
// 			return fn(...allArgs)          // срабатывает функция с этими аргументами
// 		}
// 		else {
// 			return carried(fn, ...allArgs)  // если меньше, то возвращаем обратно на вызов всей функции и так до тех пор пока не будет достаточного кол-ва аргументов
// 		}	
// 	}
// }

// const carriedMul = carried(car)

// console.log(carriedMul(1)(2)(2));
// console.log(carriedMul(1,2,3));
// console.log(carriedMul(1,2)(3));
// ================= Zamikanie ===================

// function zam(a) {
// 	return function (b){
// 		return a*b
// 	}
// }
// const a = zam(2)
// console.log(a(23));
//1
