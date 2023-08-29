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


// ============= Диструктуризация ===================
// --- array ---
// const arr = [1, 2, 3, 4, 5]
// const [a, b, c] = arr
// console.log({b,c})

// const arr2 = [1, 2, 3, 4, 5]
// const [ , , a, b, c] = arr2
// console.log(b,c);

// const arr3 = [1, 2, 3, 4, 5]
// const [ , , , , a] = arr3
// console.log(a);

// const oba4= [1, 2, 3, 4, 5]
// const [a, b, ...rest] = oba4
// console.log(rest);

// const oba5= [1, 2, 3, 4, 5]
// const [a, b] = arr5
// console.log(b);

// --- object ----

// const obj1 = {name: "Igor",	age: 23}
// const {name: a, age: b} = obj1
// console.log(a);

// const obj2= {name: "Igor"}
// const {age: b = 30} = obj2
// console.log(b);


// const obj3 = {name: "Igor",	age: 23, city: "Lida"}
// const {name: a, age: b, ...rest} = obj3
// console.log(rest);

// const obj4 = {name: "Igor",	age: 23, city: "Lida", country: "Russia"}
// const {name: userName, age: userAge, city: userCity, country: userCountry = "Belarus"} = obj4
// console.log(userCountry);

//---- SPREAD ----

// const f1 = (a,b) => [...a,...b].sort((a,b)=> a-b)
// console.log(f1([2,3,4], [4,56,7]));


// const f2 = (a) => Math.max(...a)

// console.log(f2([51,23,156, 24]));

// const f3 = (...args) => args

// console.log((f3(2,3,4,5)));\
// const a = {name: "Igor", surName: "Borisenko"}
// const b = {name: "Andrey",  age: 23}

// const f4 = (a, b) => {
// 	a.name = b.name ? b.name = a.name : b.name
// 	return {...a, ...b}
// }

// console.log(f4(a, b));

// const f5 = (a) => [...new Set(a)]
// console.log(f5([2,2,3,4,5,3,1]));