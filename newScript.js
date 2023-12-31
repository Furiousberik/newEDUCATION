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

//====================== JSON =======================

// const json1 = (a) => {
// 	return Object.entries(JSON.parse(a)).length
// }

// console.log(json1('{"name": "Igor", "age": 23}'));

// const obj = [
//   { name: "Pasha", age: 25 },
//   { name: "Sasha", age: 30 },
//   { name: "Masha", age: 27 }
// ];

// const json = JSON.stringify(obj)

// const func = (json) => {
// 		let res = []
// 		for(let key of JSON.parse(json)){
// 			res.push(key.name)
// 		}
// 		return res
// }

// console.log(func(json)); // ["Pasha", "Sasha", "Masha"]

// const temp = {
// 	Monday: "25 C",
// 	Tuesday: " 26 C",
// 	Wednesday: "22 C",
// 	Thirsday: "23 C",
// 	Friday: "20 C"
// }
// const vlag = {
// 	Monday: "64%",
// 	Tuesday: "58%",
// 	Wednesday: "72%",
// 	Thirsday: "67%",
// 	Friday: "54%"
// }

// const speed = {
// 	Monday: "2.3 m/s",
// 	Tuesday: "4.2 m/s",
// 	Wednesday: "3.4 m/s",
// 	Thirsday: "2.3 m/s",
// 	Friday: "4.3 m/s"
// }

// const weather = {day: {
// 	Monday: {
// 		temp: `${temp.Monday}`,
// 		vlag: `${vlag.Monday}`,
// 		speed: `${speed.Monday}`
// 	},
// 	Tuesday: {
// 		temp: `${temp.Tuesday}`,
// 		vlag: `${vlag.Tuesday}`,
// 		speed: `${speed.Tuesday}`
// 	},
// 	Wednesday: {
// 		temp: `${temp.Wednesday}`,
// 		vlag: `${vlag.Wednesday}`,
// 		speed: `${speed.Wednesday}`
// 	},
// 	Thirsday: {
// 		temp: `${temp.Thirsday}`,
// 		vlag: `${vlag.Thirsday}`,
// 		speed: `${speed.Thirsday}`
// 	},
// 	Friday: {
// 		temp: `${temp.Friday}`,
// 		vlag: `${vlag.Friday}`,
// 		speed: `${speed.Friday}`
// 	},
// }}

// console.log(weather);


// const obj = [
//   { name: "Pasha", followers: 777 },
//   { name: "Sasha", followers: 1085 },
//   { name: "Masha", followers: 11435 },
//   { name: "Kasha", followers: 3 }
// ];

// const json = JSON.stringify(obj)

// const func = (json) => {
// 	const res = []
// 	for(let key of JSON.parse(json)){
// 		if(key.followers > 1000){
// 			res.push(key.name)
// 		}
// 	}
// 	return res
// }

// console.log(func(json)); // ["Sasha", "Masha"]


// const obj = [
//   { name: "Pasha", followers: 5777 },
//   { name: "Sasha", followers: 6085 },
//   { name: "Masha", followers: 16435 },
//   { name: "Kasha", followers: 5003 }
// ];

// const json = JSON.stringify(obj);

// const func = (json) => {
// 	let res = []
// 	for(let key of JSON.parse(json)){
// 		res.push({name: `${key.name}`, followers: `${key.followers+5000}`})
// 	}
// 	return res
// }!

// console.log(func(json)); 

// Вывод:
// [
//   { name: "Pasha", followers: 5777 },
//   { name: "Sasha", followers: 6085 },
//   { name: "Masha", followers: 16435 },
//   { name: "Kasha", followers: 5003 }
// ]

//================= try catch finally ===================

// function sum(a,b) {
// 	if(typeof a === "string" || typeof b === "string"){
// 		throw new Error("Не число")
// 	}
// 	return a+b
// }
// try {
// 		const result = sum("string", 3)
// 		console.log(result);
// 	} catch(error) {
// 		console.log(error)
// 	}


// console.log(sum(2,3));

// function arifm(a) {
// 	if(a.length === 0){
// 		throw new Error("Array is null")
// 	}
// 	return a.reduce((acc,item) => acc+item)/a.length
// }

// console.log(arifm([2,3,4,5,6]));


// function sum2(a){
// 	if(a.x === undefined || a.y === undefined){
// 		throw new Error("Нет нужных свойств")
// 	}
// 	return a.x + a.y
// }

// console.log(sum2({x: 2, y: 25}));

// function string(a) {
// 	if(typeof a !== "string"){
// 		throw new Error("Ошибка, это не строка")
// 	}
// 	return a.length
// }

// try{
// 	const res = string(23)
// 	console.log(res);
// } catch (error){
// 	console.log(error);
// }

// console.log(string("I'm working right now"));

// const factorial = (a) => {
// 	if(a < 0 || a %1  !== 0){
// 		throw new Error("Ошибка, число не подходит")
// 	}
// 	return a ? a * factorial(a-1) : 1
// }

// console.log(factorial(10));

// Object.prototype.newMap = function(callBack, thisArg) {
// 	const res = []
// 	for(let i = 0; i < this.length; i++){
// 		res[i] = callBack(this[i], i, this, thisArg)
// 	}
// 	return res
// }

// console.log([1,2,3].newMap(item => item*2));

// Object.prototype.myFilter = function(callBack, thisArg){
// 	const res = []
// 	for(let i = 0;i<=this.length;i++){
// 		if(callBack.call(thisArg, this[i],i, this)){
// 			res.push(this[i])
// 		}
// 	}
// 	return res
// }

// console.log([1,3,4,4,5,5].myFilter((ite, index)=> index >1));

//=====================call, bind, apply=======================

// Создай объект person с свойством name и методом greet, который выводит в консоль строку "Hello, my name is {name}". 
// Используй this внутри метода greet для получения значения свойства name объекта person.

// const person = {
// 	name: "Igor",
// 	greet(){
// 		return "Hello, my name is " + this.name
// 	}
// }
// console.log(person.greet());

// Создай объект calculator с методами add, subtract, multiply и divide, которые выполняют соответствующие операции над двумя аргументами и возвращают результат. 
// Добавь свойство result, которое будет хранить текущий результат вычислений. Используй this для доступа к свойству result внутри каждого метода.

// const calculator = {
// 	result: 0,
// 	add(a,b){
// 		this.result = a+b
// 		return this.result
// 	},
// 	subtract(a,b){
// 		this.result = a-b
// 		return this.result
// 	},
// 	multiply(a,b){
// 		this.result = a*b
// 		return this.result
// 	},
// 	divide(a,b){
// 		this.result = a/b
// 		return this.result
// 	}
// }

// console.log(calculator.divide(120,5))

// Создай объект game с методом play, который выводит в консоль "Playing {title} game". 
// Используй метод call или apply, чтобы вызвать метод play с объектами basketballGame и chessGame, имеющими свойства title, которые представляют соответствующие игры.

// const game ={
// 	play(){
// 		return `Playing ${this.title} game`
// 	}
// }
// const basketballGame = {
// 	title: "basketball"
// }
// const chessGame = {
// 	title: "chessGame"
// }

// console.log(game.play.apply(basketballGame));

// Необходимо создать объект calculator с двумя числовыми свойствами: а и b. Инициализировать значениями по умолчанию.
// Так же нужно создать функцию calculate, которая принимает один аргумент operation (пример “add”, “subtract“, “multiply“ или “divide“). 
// Функция должна выполнять математические операции на числах а и b в зависимости от значения аргумента operation.

// const calculator = {
// 	add(a,b){
// 		return a+b
// 	},
// 	subtract(a,b){
// 		return a-b
// 	},
// 	multiply(a,b){
// 		return a*b
// 	},
// 	divide(a,b){
// 		return a/b
// 	}
// }
// function calculate(operation,a,b){
// 	return operation.call(calculator,a, b)
// }
// console.log(calculate(calculator.add,2,2));

// Cоздай объект dog со свойством petName и методом bark. Метод bark должен возвращать строку, состоящую из значения petName и звука "Woof!". 
// Cоздать объект cat со свойством petName и методом meow. Метод meow должен возвращать строку, состоящую из значения petName и звука "Meow!". 
// Используя метод call, вызвать методы meow и bark с разными контекстами:
// Вызвать метод meow с контекстом объекта dog с помощью. Результат должен быть строкой, соответствующей звуку кошки с именем собаки.
// Вызвать метод bark с контекстом объекта cat с помощью. Результат должен быть строкой, соответствующей звуку собаки с именем кошки.
// const dog = {
// 	petName(){
// 		return "barsik"
// 	},
// 	bark(){
// 		return "Woof!"
// 	}
// }
// const cat = {
// 	petName(){
// 		return "liza"
// 	},
// 	meow(){
// 		return "Meow!"
// 	}
// }
// console.log(cat.meow.call())


// ===========================CLASS==========================
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHello() {
//     console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет.`);
//   }
// }

// const b = new Person("igor",23)
// b.sayHello()

// class Person {
//   #name;
//   constructor(name) {
//     this.#name = name;
//   }
//   getName() {
//     return this.#name;
//   }
//   setName(name) {
//     this.#name = name;
//   }
// }
// const person = new Person("Pavel");
// console.log(person.getName()); // "Pavel"
// person.setName("Alina");
// console.log(person.getName()); // "Alina"
// console.log(person.#name); // SyntaxError: Private field '#name' must be declared in an enclosing class

// Создай класс Rectangle с двумя свойствами: width и heigh и метод getArea(), который будет возвращать площадь прямоугольника.

// class Rectangle {
// 	constructor(width,height){
// 		this.width = width;
// 		this.height = height;
// 	}

// 	getArea(){
// 		return this.width * this.height
// 	}
// }

// const q = new Rectangle(23,3)

// console.log(q.getArea());
// Создай класс Square, который наследует свойства и методы класса Rectangle и имеет дополнительное свойство sideLength. 
// Переопредели метод getArea() так, чтобы он возвращал площадь квадрата.

// class Square extends Rectangle {
// 	constructor(sideLength, width){
// 		super(width)
// 		this.sideLength = sideLength
// 	}
// 	getArea(){
// 		return this.sideLength**2
// 	}
// }

// const w = new Square(20)

// console.log(w.getArea());
// Создай класс Teacher с свойствами name и ratings , а так же методом gradeStudent(grade), который будет добавлять оценку grade в массив оценок студента ratings.

// class Teacher {
// 	constructor(name, ratings = []){
// 		this.name = name;
// 		this.ratings = ratings
// 	}
// 	gradeStudent(grade){
// 		this.ratings.push(grade)
// 		console.log(this.name +  " ----- " + this.ratings)
// 	}
// }

// const e = new Teacher("Igor")

// e.gradeStudent(10)
// e.gradeStudent(2)

// Создай класс BankAccount с двумя свойствами: balance и ownerName. Добавь методы deposit(amount) и withdraw(amount), 
// которые будут добавлять и снимать сумму amount со счета соответственно. Добавь метод getBalance(), который будет возвращать текущий баланс счета.

// class BankAccount {
// 	constructor(balance , ownerName){
// 		this.balance = balance;
// 		this.ownerName =ownerName;
// 	}
// 	deposit(amount){
// 		this.balance += amount
// 	}
// 	withdraw(amount){
// 		this.balance -= amount
// 	}
// 	getBalance(){
// 		return this.balance +` (${this.ownerName})`
// 	}
// }

// const r = new BankAccount(2500, "Redev")

// r.deposit(1500)
// r.withdraw(550)
// console.log(r.getBalance());

// Создай класс Product с двумя свойствами: name и price. Добавь метод priceWithTax, который будет возвращать цену товара с учетом налога на продажи в размере 10%. 
// Процентную ставку нужно хранить в приватном свойстве.

// class Product{
// 	#allPrice;
// 	constructor(name, price, allPrice){
// 		this.name = name;
// 		this.price = price;
// 		this.#allPrice = allPrice
// 	}
// 	priceWithTax(){
// 		this.#allPrice = Math.round(this.price + this.price * 0.1)
// 		return `allPrice of ${this.name} = ${this.#allPrice}$`
// 	}
// 	setAllPrice(allPrice){
// 		this.#allPrice = allPrice
// 	}
// 	getAllPrice(){
// 		return this.#allPrice
// 	}
// }

// const t = new Product("VacuumCleaner", 2500)

// console.log(t.priceWithTax());
// console.log(t.getAllPrice())

// Дополнительное задание для монстров программирования! 
// Дополнительное задание для монстров программирования! 
// 1) Написать валидацию для каждого свойства.
// - name. Только латиница. Не меньше 2-х символов и не больше 15-ти включительно;
// - age. Только цифры. От 18 до 65 включительно;
// - isMan. Boolean. true || false;
// - reatedDate. Дата создания студента. Формат(dd/mm/yyyy);
// 2) Информацию по допустимому возрасту и доступным полам хранить в приватных свойствах.
// #validAge = {min: 18, max:65}
// 3) Написать метод showInfo, который вернет всю информацию экземпляра класса.
// (имя, возраст, пол в виде male||female, дату создания в формате (dd-mm-yyyy))
// 4) Исходные данные для создания студентов хранить в JSON (минимум 5 студентов из них 3 не валидных). То есть к примеру массив объектов.
// const JSON = "[{name: 'pasha',...},{}, {}]";
// 5) По необходимости использовать деструктуризацию и оператор spread, где это необходимо.
const JSON = [{name: "Igor", age: 23, isMan: "Man", createdDate: "11/11/1999"},
						  {name: "Lera", age: 23, isMan: "Woman", createdDate: "02/12/1999"},
 							{name: "M", age: 25, isMan: "Man", createdDate: "11/11/1999"},
						  {name: "Andrew", age: 66, isMan: "Man", createdDate: "11/11/1999"}, 
							{name: "Misha", age: 23, isMan: "Man", createdDate: "11a1131999"}]

class validateStudents {
	#validAge = {"min": 18, "max":65}
	#validIsMan = ["Man", "Woman"]
	constructor(json){
		this.name = json.name;
		this.age = json.age;
		this.isMan = json.isMan;
		this.createdDate = json.createdDate;
	}
	showInfo(){
		const a = this._isMan.split().map(item=>item === this.#validIsMan[0]? item = "Male" : item === this.#validIsMan[1] ? item = "Female" : "Что ты nакое").join()
		const b = this._createdDate.split("/").join("-")
		console.log(this._name, this._age, a, b);
	}
	set name(value){
		if(value.length <= 2 || value.length >= 15){
			console.log("Неправильно, длина должна быть не меньше 2 и не больше 15 символов")
		}
		this._name = value
	}
	set age(value){
		
		if(value >= this.#validAge.min && this.#validAge.max <= 65){
			 this._age = value
		}
		return
		
	}
	set isMan(value){
		this._isMan = value
		if(value === this.#validIsMan[0] || value === this.#validIsMan[1]){
			return true
		}
		else	return false
	}
	set createdDate(value){
		this._createdDate = value
		const [,,a,,,b] = value
		if(a !== "/" || b !== "/"){
			console.log('Не угадал, пиши через "/"');
		}
	}
	get name(){
		console.log(this._name);
	}
	get age(){
		console.log(this._age);
	}
	get isMan(){
		console.log(this._isMan);
	}
	get createdDate(){
		console.log(this._createdDate)
	}
}

const firstStudent = new validateStudents(JSON[0])
const secondStudent = new validateStudents(JSON[1])
const thirdStudent = new validateStudents(JSON[2])
const fourthStudent = new validateStudents(JSON[3])
const fifthStudent = new validateStudents(JSON[4])


firstStudent.showInfo()
secondStudent.showInfo()
thirdStudent.showInfo()
fourthStudent.showInfo()
fifthStudent.showInfo()

