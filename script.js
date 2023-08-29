// let obj1 = {
//   name: "IGOr",
//   firstNameeaead: "Borisenko",
//   erwtr() {
//     return 0
//   },
//   wetwrywy() {
//     return 0
//   }
// }
// let obj2 = {
//   naewme: 26,
//   lastName: 15,
//   who: 1
// }
// Object задачи
//№1:Напиши функцию, которая принимает объект и возвращает массив его ключей.
// function f1(obj) {
//   return Object.keys(obj)
// }
// console.log(f1(obj1))
//№2:Напиши функцию, которая сливает два объекта вместе и возвращает новый объект со всеми свойствами из обоих объектов.
// function f2(obj1, obj2) {
//   return Object.assign({}, obj1, obj2)
// }
// console.log(f2(obj1, obj2))
//№3:Напиши функцию, которая принимает объект и возвращает сумму всех его значений (числа).
// function f3(obj) {
//   let sum = 0
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       sum += obj[key]
//     }
//   }
//   return sum
// }
// console.log(f3(obj2))
//№4:Напиши функцию, которая считает количество свойств в объекте и возвращает это число.
// function f5(obj) {
//   let i = 0
//   for (let key in obj) {
//     i++
//   }
//   return i
// }
// console.log(f5(obj1))
//№5:Напиши функцию, которая принимает два объекта и сравнивает их свойства. Если у обоих объектов есть одинаковые свойства с одинаковыми значениями, функция должна вернуть true, в противном случае - false.
// function f5(obj1, obj2) {
//   for (let key in obj1, obj2) {
//     if (obj1[key] == obj2[key]) {
//       return true
//     }
//     else {
//       return false
//     }
//   }
// }
// console.log(f5(obj1, obj2))
//№6:Напиши функцию, которая принимает объект и возвращает массив его значений.
// function f6(obj) {
//   return Object.values(obj1)
// }
// console.log(f6(obj1))
// №7:Напиши функцию, которая принимает объект и удаляет определенное свойство из него (ключ свойства передать в параметрах)
// function f7(obj, key) {
//   delete obj[key]
//   return obj
// }
// console.log(f7(obj1, "name"))
// №8:Напиши функцию, которая принимает объект в котором все свойства это строки, и возвращает значение самого длинного свойства.
// function f8(obj) {
//   let res = ""
//   for (let key in obj) {
//     if (obj[key].length > res.length) {
//       res = obj[key]
//     }
//   }
//   return res
// }
// console.log(f8(obj1))
// №10:Напиши функцию, которая принимает объект и выводит имена методов.
// function f10(obj) {
//   let res = ""
//   for (let key in obj) {
//     if (typeof obj[key] === "function") {
//       res += `${key} `
//     }
//   }
//   return res
// }
// console.log(f10(obj1))
// №11:Создай объект car с методами start и stop, которые выводят в консоль сообщения "Starting the car" и "Stopping the car" соответственно.
// Добавь свойство isRunning, которое будет устанавливаться в true при вызове метода start и в false при вызове метода stop.
// const car = {
//   start() {
//     console.log("Starting the car")
//     this.isRunning = true
//   },
//   stop() {
//     console.log("Stopping the car")
//     this.isRunning = false
//   },
//   isRunning: ""
// }
// car.stop()
// console.log(car.isRunning)
// №12:Создай объект book с методами open и close, которые выводят в консоль сообщения "Opening the book" и "Closing the book" соответственно.
// Добавь свойство currentPage, которое будет хранить текущую страницу, на которой находится пользователь.
// Добавь метод turnPage, который увеличивает currentPage на 1 и выводит в консоль сообщение "Turning page {page}",
// где {page} - номер текущей страницы. Используй this для доступа к свойству currentPage внутри метода turnPage.
// const book = {
//   open() {
//     console.log("Opening the book")
//   },
//   close() {
//     console.log("Closing the book")
//   },
//   currentPage: 0,
//   turnPage() {
//     console.log(++this.currentPage)
//   }
// }
// book.turnPage()

// Number задачи ======================================================================================================================
//№13.Напиши функцию, которая принимает два числа и возвращает их сумму.
// function f13(a, b) {
//   return a + b
// }
// console.log(f13(2,5))
//№14.Напиши функцию, которая принимает число и возвращает его квадрат.
// function f14(a){
//   return a**2
// }
// console.log(f14(6))
// №15. Напиши функцию, которая принимает три числа и возвращает наименьшее из них.
// function f15(a,b,c){
//   return Math.min(a,b,c)
// }
// console.log(f15(2,17,1))
// №16.Напиши функцию, которая принимает число и возвращает его факториал.
// function f16(a) {
//   let res = 1
//   for (let i = 1; i < a; i++) {
//     res *= i
//   }
//   return res

// }
// console.log(f16(6))

// №17.Напиши функцию, которая принимает число и возвращает true, если оно четное, и false, если нечетное.
// function f17(a) {
//   if (a % 2 == 0) {
//     console.log(true)
//   }
//   else{
//     console.log(false)
//   }
// }
// f17(3)
// №18.Напиши функцию, которая сгенерирует рандомное число в диапозоне от 1 до 5 (можно и нужно погуглить).
// function f18(a,b) {
//   return Math.round(Math.random(a,b)*(b-a))
// }
// console.log(f18(1,124))
// Object methods задачи ======================================================================================================================
// Создай объект person с свойством name и методом greet, который выводит в консоль строку "Hello, my name is {name}".
// 1 Используй this внутри метода greet для получения значения свойства name объекта person.
// const person = {
//   name: "Igor",
//   greet() {
//     console.log(`Hello, my name is ${this.name}`)
//   }
// }
// person.greet()
// 2 Создай функцию calculate с тремя аргументами: a, b и функцией operation.
// Функция operation должна выполнять определенную операцию(например, сложение, вычитание, умножение или деление) с a и b.
// Используй методы call, apply и bind, чтобы вызвать функцию operation и установить значение this в объект calculator,
// имеющий свойства add, subtract, multiply и divide, которые представляют операции сложения, вычитания, умножения и деления соответственно.
// function calculate(a, b, operation) {
//   return operation.call(calculator, a, b)

// }
// const calculator = {
//   add(a, b) {
//     return a + b
//   },
//   subtract(a, b) {
//     return a - b
//   },
//   multyply(a, b) {
//     return a * b
//   },
//   divide(a, b) {
//     return a / b
//   }
// }
// console.log(calculate(2, 5, calculator.add))
// 3 Создай объект button со свойством text и методом click, который выводит в консоль значение свойства text.
// Используй метод bind, чтобы создать новую функцию boundClick, которая связывает значение this с объектом button.
// Затем вызовите boundClick в качестве обработчика события для клика на кнопке.
// const button = {
//   text: "eqr",
//   click() {
//     console.log(this.text)
//   }
// }
// let boundClick = button.click.bind(button)
// boundClick()

// Создай объект game с методом play, который выводит в консоль "Playing {title} game".
// Используй метод call или apply, чтобы вызвать метод play с объектами basketballGame и chessGame, имеющими свойства title, которые представляют соответствующие игры.
// const game = {
//   play(title) {
//     console.log(`Playing ${title} game`)
//   }
// }
// const basketballGame = {
//   title: "basketball"
// }
// const chessGame = {
//   title: "chess"
// }
// game.play(basketballGame.title)

// Создай объект dog с методом bark, который выводит в консоль "Woof!".Создайте объект cat с методом meow, который выводит в консоль "Meow!".
// Используй метод call или apply, чтобы вызвать методы bark и meow с объектом dog и cat соответственно, чтобы вывести в консоль соответствующие звуки.
// const dog = {
//   bark(){
//     console.log("Woof!")
//   }
// }
// const cat = {
//   meow(){
//     console.log("Meow!")
//   }
// }
// dog.bark.call()
// cat.meow.apply()
// Создай объект calculator с методами add, subtract, multiply и divide, которые выполняют соответствующие операции над двумя аргументами и возвращают результат.
// Добавь свойство result, которое будет хранить текущий результат вычислений. Используй this для доступа к свойству result внутри каждого метода.
// const calculator = {
//   result: 0,
//   add(a, b) {
//     this.result = a + b
//     return this.result
//   },
//   subtract(a, b) {
//     this.result = a - b
//     return this.result
//   },
//   multyply(a, b) {
//     this.result = a * b
//     return this.result
//   },
//   divide(a, b) {
//     this.result = a / b
//     return this.result
//   }
// }
// console.log(calculator.subtract(124,8))
// Создай объект player с методом play, который выводит в консоль сообщение "Playing {game}"
//,где {game} - название игры. Добавь свойство games, которое будет содержать список игр, в которые игрок может играть.
// Используй цикл for...of, чтобы перебрать список игр и вызвать метод play для каждой игры.
// const player = {
//   play() {
//     console.log(`Playing ${this.games[2]}`)
//   },
//   games: ["Terminator", "Harry", "Spider-Man"]
// }
// player.play()



//========STRING задачи===================================
// Напиши функцию, которая ищет индекс первого вхождения заданной подстроки в строку и возвращает его.
// function f19(a, b){
//   return a.indexOf(b)
// }
// console.log(f19("Gavin Bellson", "el"))
//Напиши функцию, которая возвращает длину строки без учета пробелов.
// function f20(a){
//   return a.trim().length
// }
// console.log(f20("   earaAaed  "))
//Напиши функцию, которая возвращает повторенную строку некоторое количество раз.
// function f21(a,b){
//   return a.repeat(b)
// }
// console.log(f21("absfbsf", 5))
//Напиши функцию, которая принимает две строки в качестве аргументов и возвращает true, если первая строка является подстрокой второй строки, и false в противном случае.
// function f22(a, b) {
//   if(a = b.includes(a)){
//     return true
//   }
//   else {
//     return false
//   }
// }
// console.log(f22("bbc", "I am bbc"))
//Напиши функцию, которая принимает строку в качестве аргумента и возвращает количество чисел, которые содержатся в этой строке.
// function f23(a) {
//   let count = 0
//   for (let i = 0; i < a.length; i++) {
//     if (!isNaN(a[i])) {
//       count++;
//     }
//   }
//   return count
// }
// console.log(f23("213ewr12413few34"))
//Напиши функцию, которая принимает число в качестве аргумента и возвращает это число в обратном порядке. Например, если передано число 123, функция должна вернуть число 321.
// function f24(a){
//   return a.split("").reverse().join(" ")
// }
// console.log(f24("12345567890"))
//Напиши функцию, которая принимает строку в качестве аргумента и возвращает количество слов в этой строке.
// function f25(a){
//   return a.split(" ").length
// }
// console.log(f25("My name is Igor Borisenko"))
//Напиши функцию, которая принимает три строки в качестве аргументов: первая строка - исходная строка, вторая строка - строка для поиска, третья строка - строка для замены.
// Функция должна вернуть исходную строку с замененной подстрокой.
// function f25(a, b, c) {
//   const d = a.replace(b,c)
//   return d
// }
// console.log(f25("abc", "b", "beqde"))
// Напиши функцию, которая принимает строку в качестве аргумента и возвращает эту же строку, но со всеми буквами в верхнем регистре.
// function f26(a){
//   return a.toUpperCase()
// }
// console.log(f26("eewrw"))

//======================Массивы================================
// Напиши функцию, которая принимает массив и возвращает сумму четных элементов в массиве чисел.
// const arr = [1, 10, 23, 42, 14, 356]

// function f27(a) {
//   let sum = 0
//   for (let value of a) {
//     if (value % 2 == 0) {
//       sum += value
//     }
//   }
//   return sum
// }
// console.log(f27(arr))

// Напиши функцию, которая принимает массив и возвращает среднее значение элементов в массиве чисел.
// function f28(a) {
//   let sum = 0
//   for (let i = 0; i < a.length; i++) {
//     sum += a[i]
//   }
//   return sum / a.length
// }
// console.log(f28(arr))

// Напиши функцию, которая принимает массив и элемент, а возвращает индекс заданного элемента в массиве.
// function f29(a, b) {
//   return a.indexOf(b)
// }
// console.log(f29(arr,5))

// Напиши функцию, которая принимает массив строк и возвращает самую короткую строку в массиве.
// const arr1 = ["readea", "ewrf", "IgorYES", "welcometohome"]
// function f30(a) {
//   let result = a[0]
//   for (let value of a) {
//     if (value.length < result.length) {
//       result = value
//     }

//   }

//   return result
// }
// console.log(f30(arr1))

// Напиши функцию, которая принимает массив и возвращает новый массив перевернув его задом наперед.
// function f31(a) {
//   let b = []
//   for (let i = a.length - 1; i >= 0; i--) {
//     b.push(a[i])
//   }
//   return b
// }
// console.log(f31(arr1))

// Напиши функцию, которая принимает массив чисел и возвращает новый массив из элементов больше 18.
// function f32(a) {
//   let result = []
//   for (const value of a) {
//     if (value > 18) {
//       result.push(value)
//     }
//   }
//   return result
// }
// console.log(f32(arr))
//==================Массивы=========================
//1) Напиши функцию, которая принимает массив строк и возвращает новый массив, в котором каждая строка записана в верхнем регистре.
// const a = ['efew', 'werew', 'werw']
// function f33(str) {
//   return str.map(item => item.toUpperCase())
// }
// console.log(f33(a))
//2)Напиши функцию, которая принимает массив объектов с полями name и age и возвращает новый массив, в котором каждый объект имеет дополнительное поле greeting,
//содержащее строку вида "Привет, {name} ({age})!".
// const a = [{
//   name: "Igor",
//   age: "23"
// },
// {
//   name: "Vika",
//   age: "22"
// }
// ]
// const f33 = (str) => str.map(item => ({name: item.name, age: item.age, greeting: `Привет, ${item.name} (${item.age})`}))
//   console.log(f33(a))
//3)Напиши функцию, которая принимает массив чисел и возвращает новый массив, в котором каждый элемент преобразован в строку и добавлен префикс "Number: ".
// const a = [1, 2, 3, 4, 5, 6]
// const res = (str) => str.map(item => `Number: ${item.toString()}`)
// console.log(res(a))
//4)Напиши функцию, которая принимает массив строк и возвращает новый массив, в котором каждая строка обрезана до первых трех символов.
// const a = [
//   "afwewwf", "ewrewtw", "ewrwetqcv"
// ]
// const f34 = (str) => str.map(item => item.slice(0, 3))
// console.log(f34(a))
//5)Напиши функцию, которая принимает массив и возвращает новый массив из всех элементов, которые являются числами.
// const a = [1, "erw", 25, "164", 114, true]
// const f35 = (str) => str.filter(item => typeof item === "number").join()
// console.log(f35(a))
//6)Напиши функцию, которая принимает массив и возвращает новый массив из всех элементов в массиве, которые имеют четный индекс.
// const a = ["ewrw", 2, 3, 4, 5, 10, 12]
// const f36 = (str) => str.filter((item, index) => index % 2 === 0)
// console.log(f36(a))
//7)Напиши функцию, которая принимает массив объектов и возвращает новый массив из всех объектов в массиве, у которых свойство age больше 18.
// const a = [
//   { age: 23 },
//   { age: 1 },
//   { age: 19 },
//   { age: 14 },
//   { age: 29 },
//   { age: 108 }
// ]
// const f37 = (str) => str.filter(item => item.age > 18)
// console.log(f37(a))
//8)Напиши функцию, которая принимает массив и возвращает новый массив из всех строк в массиве, которые содержат букву 'a'.
// const a = ["Igor", "Angelika", "Ekaterina", "Vadim"]
// const f37 = (str) => str.filter((item, index) => typeof item === "string" && item.includes("a"))
// console.log(f37(a))
//9)Напиши функцию, которая принимает массив и возвращает новый массив из всех чисел в массиве, которые больше 10.
// const a = [1, 2, 152, "4", "ewer", 24, 74]
// const f38 = (str) => str.filter(item => typeof item === "number" && item > 10)
// console.log(f38(a))
//10)Отсортировать массив объектов по возрастанию значения свойства age.
// const people = [
//   { name: 'Pavel', age: 25 },
//   { name: 'Alex', age: 20 },
//   { name: 'Irina', age: 30 },
// ];
// const f39 = (str) => str.sort((a, b) => a.age - b.age)
// console.log(f39(people))
//11)Напиши функцию, которая принимает массив строк. Посчитать количество повторений каждого элемента в массиве.
// const array = ["a", "b", "c", "b", "a", "b"];
// const counter = arr => arr.reduce((acc, cur) => (acc[cur] = (acc[cur] || 0) + 1, acc), {});
// console.log(counter(array)); // "a:2, b:3, c:1"
//12)Напиши функцию, которая принимает массив чисел и разделяет массив на две группы: четные и нечетные  {even:[], odd:[]} (через reduce)
// const a = [1, 4, 2, 76, 13, 462, 86]
// const f40 = (str) => str.reduce((acc, cur) => (acc[cur % 2 === 0 ? "even" : "odd"].push(cur), acc), { even: [], odd: [] })
// console.log(f40(a))
//================ЗАДАЧИ ОБЩИЕ=================
//1) Допустим, Вы знакомы с понятием "идеальный квадрат". (Например: 12 * 12 = 144). А как найти следующий по очереди идеальный квадрат?
// Напишите функцию findNextSquare, которая находит следующий целочисленный идеальный квадрат после того, как он передан в качестве параметра.
// Напомним, что целочисленный идеальный квадрат - это такое целое число n, sqrt (n) которого тоже является целым числом.
// Если параметр сам по себе не является идеальным квадратом, то должно быть возвращено -1. Вы можете предположить, что параметр положительный.
// function m1(a) {
//   if (Math.sqrt(a) % 1 == 0) {
//     return (Math.sqrt(a) + 1) ** 2
//   }
//   else {
//     return -1
//   }
// }
// console.log(m1(169))
//2)Тролли атакуют ваш раздел комментариев!
// Распространенный способ справиться с этой ситуацией - убрать все гласные из комментариев троллей, нейтрализуя угрозу.
// Ваша задача - написать функцию, которая принимает строку и возвращает новую строку со всеми удаленными гласными.
// deleteVowels('Ваш новый сериал полный отстой!'); //"Вш нвый срл плный тстй!"
// deleteVowels('Что за ужасное фото?!'); //"Чт з жсн фт?!"
// deleteVowels('Этот сайт для лузеров ЛОЛ!'); //"тт сйт дл лзрв ЛЛ!"
// const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
// const deleteVowels = (str) => str.split("").map(char => vowels.includes(char.toLowerCase()) ? '' : char).join("");

// console.log(deleteVowels('Мама сшила мне штаны'))
//3)function list(str) {
//   return
// };
// list("4 5 29 54 4 0 -123 666 -64 1 -3 6 -6"); //"-123 666"
// list("-16 12 -100 5 100 12"); //"-100 100"
// list("-1 2 3 4 -6 66 10"); //"-100 100"
//----------------1 способ (МОЙ)
// const m3 = (str) => `'${str.split(" ").map((item, index, arr) => Math.min(...arr)).filter((item, index, arr) => arr.indexOf(item) === index).join() + " " + str.split(" ").map((item, index, arr) => Math.max(...arr)).filter((item, index, arr) => arr.indexOf(item) === index).join()}'`
//--------------------ChatGPT----------
// const m3 = (str) => {
//   const arr = str.split(" ").map(Number)
//   const min = Math.min(...arr)
//   const max = Math.max(...arr)
//   return `${min} ${max}`
// }

// console.log(m3("4 5 29 54 4 0 -123 666 -64 1 -3 6 -6"))

//4)Ваша задача написать функцию, которая принимает в качестве параметра строку и увеличивает каждую "букву" строки на число позиции, которую она занимает.

// accum("cwAt"); //"C-Ww-Aaa-Tttt"
// accum("abc"); //"A-Bb-Ccc"
// accum("dog"); //"D-Oo-Ggg"
// const accum = (str) => str.split("").map((item, index) => item.toUpperCase() + item.repeat(index).toLowerCase()).join("-")
// console.log(accum("BrAvO"))

//5)Банкоматы допускают 4 или 6-значные ПИН-коды, а ПИН-коды не могут содержать ничего, кроме 4 цифр или 6 цифр.
// Если функции передана правильная строка PIN, верните true, иначе верните false.
// correctPin("5567"); //true
// correctPin("556711"); //true
// correctPin("12312312"); //false
// correctPin("qqqq"); //false
// correctPin("1qqqq"); //false

// const correctPin = (str) => (str.length === 4 || str.length === 6) && !isNaN(str)
// console.log(correctPin("rqer"))
//6)На фабрике принтер печатает этикетки для коробок. Для одного вида коробок принтер должен использовать цвета, которые названы буквами от a до m.
// Цвета, используемые принтером, записываются в управляющую строку. Например, «хорошая» управляющая строка будет 'aaabbbbhaijjjm', что означает,
// что принтер использовал три раза цвет a, четыре раза цвет b, один раз цвет h, а затем один раз цвет a ...
// Иногда возникают проблемы: возникает недостаток цветов, техническая неисправность и «плохая» контрольная строка, например 'aaaxbbbbyyhwawiwjjjwwm' с буквами не от а до м.
// Вы должны написать функцию printer_error, которая для данной строки будет выводить коэффициент ошибок принтера в виде строки, представляющей рациональное число,
// числитель которого равен числу ошибок, а знаменатель - длине управляющей строки. Не уменьшайте эту дробь до более простого выражения.
// Строка имеет длину, большую или равную единице, и содержит только буквы от a до z.
// printer_error('qqqTtssqdqwehwre') // "12/16";
// printer_error('qdqwdqdqqqqwdwwwdasda') // "13/21";
// printer_error('qaaawawweefffsssuuuu') // "11/20";
// function printer_error(str) {
//   const alp = ["a", "b", "c", "d", "e", "f", "g", "i", "j", "k", "l", "m"]
//   return (`"${str.split("").filter(item => alp.includes(item)).map((item, index, arr) => arr.length).filter((item, index, arr) => arr.indexOf(item) === index) + "/" + str.length}"`)
// }
// console.log(printer_error("abcefgtrvx"))
//способ чая=========
// function printer_error(str) {
//   let errors = 0;
//   const validChars = 'abcdefghijklm';
//   for (let i = 0; i < str.length; i++) {
//     if (!validChars.includes(str[i])) {
//       errors++;
//     }
//   }
//   return errors + '/' + str.length;
// }
// Напишите функцию, которая возвращает минимальное и максимальное значение заданного массива
// const a = [14, 10, 514, 652, 142, 9]

// const compare = (arr) => {
//  return [Math.min(...arr), Math.max(...arr)]
// }
// console.log(compare(a))

//Функция simple в качестве параметра принимающая строку слов, возвращает длину самого короткого слова. Строка никогда не будет пустой, и вам не нудно учитывать разные типы данных
// function simple(str) {
//   return str.split(" ").sort((a, b) => a.length - b.length)[0].length
// }
// console.log(simple("dfs wtw wrrtwrye qh"))
//10)Вы можете найти иголку в стоге сена?
// Напишите функцию findNeedle, которая принимает массив, полный мусора, но содержащий одну иголку.
// После того, как ваша функция найдет иголку, она должна вернуть сообщение (в виде строки), которое говорит:
// "Нашел иголку на позиции" плюс индекс, по которому была найдена иголку, например:
// Должна быть возвращена следующая строка «Нашел иголку на позиции 2»
// findNeedle(["bla","wekmvever","needle","bntyn","qwd","qfverv","rtbrtb"])
// findNeedle(["bla","wekmvever","needle","bntyn","qwd","qfverv","rtbrtb"]) // "Нашел иголку на позиции 2"
// findNeedle(["bla","wekmvever","bntyn","needle","qwd","qfverv","rtbrtb"]) // "Нашел иголку на позиции 3"
// findNeedle(["bla","wekmvever","bntyn","rtbrtb","qwd","qfverv","needle"]) // "Нашел иголку на позиции 6"

// function findNeedle(arr) {
//   for (let key in arr) {
//     if (arr[key] === "needle") {
//       return "Нашел иголку на позиции " + arr.indexOf(arr[key])
//     }
//   }
// }
// function findNeedle(arr) {
//   return arr.indexOf("needle") ? "Нашел иголку на позиции " + arr.indexOf("needle") : false
// }
// console.log(findNeedle(["bla", "wekmvever", "bntyn", "rtbrtb", "qwd", "qfverv", "needle"]))
//11)По заданному набору массива чисел вернуть аддитивную инверсию каждого элемента. Каждый позитив становится негативом, а негатив становится позитивом.
// invert([-1,-2,-4,-5]) == [1,2,4,5]
// invert([1,2,4,5]) == [-1,-2,-4,-5]
// invert([1,-2,4,-5]) == [-1,2,-4,5]
// Вы можете предположить, что все значения являются целыми числами. Не изменяйте входной массив / список.
// function invert(arr) {
//   return arr.reduce((acc, item) => (acc.push(-item), acc), [])
// }
// console.log(invert([1, 2, 4, 5]))
//12)В данной задаче Вам нужно удалить из одного массива все элементы второго массива.

// Например:

// arrayDiff([1,2],[1]) ==> [2]
// arrayDiff([1,2,2,2,3,4],[2,3]) ==> [1,4]
// function arrayDiff(originalArray, deleteArray) {
//   return originalArray.filter(item => !deleteArray.includes(item))
// };
// // arrayDiff([1,2],[1]) //[2]
// // arrayDiff([1, 2, 3, 4], [3, 4]) //[1,2]
// // arrayDiff([1, 2, 3, 4], [1, 2, 3, 4]) // []
// console.log(arrayDiff([1, 2, 3, 4], [3, 4]))

// Напиши функцию countWords(str), которая принимает на вход строку и возвращает объект Map, в котором ключами являются слова из строки, а значениями - количество их вхождений в строку.
// Например, для строки "Я люблю маму, а так же я люблю JavaScript" функция должна вернуть Map со следующими парами ключ-значение: "Я" -> 2, "люблю" -> 2, "маму" -> 1, и т.д.
// function countWords(str) {
//   let res = str.split(" ")
//   let map = new Map()
//   for (let key of res) {
//     if (map.has(key)) {
//       map.set(key, map.get(key) + 1)
//     }
//     else (
//       map.set(key, 1)
//     )
//   }
//   return map
// }

// console.log(countWords("Я люблю маму, а так же я люблю JavaScript"))

// 1. Создай массив с элементами [1, 2, 3, 4, 5]. Используя деструктуризацию, присвой значения первых трёх элементов массива переменным a, b и c соответственно.
// const myArray = [1, 2, 3, 4, 5]
// const [a, b, c] = myArray
// console.log(b,c)
// 2. Создай массив с элементами [1, 2, 3, 4, 5]. Используя деструктуризацию, пропусти первые два элемента массива,
// а затем присвой значения следующих двух элементов переменным a и b соответственно.
// const myArray = [1, 2, 3, 4, 5]
// const [, , , a, b] = myArray
// console.log(a,b)
// 3. Создай массив с элементами [1, 2, 3, 4, 5]. Используя деструктуризацию, присвой значение последнего элемента массива переменной a.
// const myArray = [1, 2, 3, 4, 5]
// const [, , , , a] = myArray
// console.log(a);
// 4. Создай массив с элементами [1, 2, 3, 4, 5]. Используя деструктуризацию, присвой значения первых двух элементов массива переменным a и b,
//  а оставшиеся элементы собери в массив rest.
// const myArray = [1, 2, 3, 4, 5]
// const [a, b, ...rest] =myArray
// console.log(rest)
// 5. Создай массив с элементами [1, 2, 3, 4, 5]. Используя деструктуризацию, присвой значения первых двух элементов массива переменным a и b, а оставшиеся элементы проигнорируй.
// const myArray = [1, 2, 3, 4, 5]
// const [a, b] = myArray
// console.log(a, b)
// 1. Создай объект ** `myObject` ** с двумя свойствами - ** `name` ** и ** `age` **.
// Используя деструктуризацию, присвой значение свойства ** `name` ** переменной ** `a` **, а значение свойства ** `age` ** переменной ** `b` **.
// const myObj = {
//   name: "igor",
//   age: 23
// }
// const { name: a, age: b } = myObj
// console.log(a, b)

// 2. Создай объект ** `myObject` ** с одним свойством - ** `name` **.
//  Используя деструктуризацию с установкой значения по умолчанию, присвой значение свойства ** `age` ** переменной ** `b` **.При этом значение по умолчанию должно быть равно 30.
// const myObj = {
//   name: "Igor"
// }
// const { name, age: b = 230} = myObj
// console.log(b)
// 3. Создай объект ** `myObject` ** с тремя свойствами - ** `name` **, ** `age` ** и ** `city` **
// .Используя деструктуризацию, присвой значения свойств ** `name` ** и ** `age` ** переменным ** `a` ** и ** `b` ** соответственно, а все остальные свойства объекта проигнорируй.
// const myObj = {
//   name: "igor",
//   age: 23,
//   city: "Lida"
// }
// const { name: a, age: b } = myObj
// console.log(a, b);

// 4. Создай объект ** `myObject` ** с полями ** `name` **, ** `age` **, ** `city` ** и ** `country` **.
//  Используя деструктуризацию, присвой значения полям ** `name` **, ** `age` ** и ** `city` ** переменным ** `userName` **, ** `userAge` ** и ** `userCity` ** соответственно,
//  а поле ** `country` ** присвой переменной ** `userCountry` ** с помощью значения по умолчанию "Belarus".
// const myObj = {
//   name: "igor",
//   age: 23,
//   city: "Minsk",
//   country: "russia"
// }
// const { name: userName, age: userAge, city: userCity, country: userCountry = Belarus } = myObj

// 1. Напиши функцию, которая принимает два массива и объединяет их. Затем отсортируй полученный массив и верни его.
// const arr1 = [1, 4135, 6536, 2]
// const arr2 = [4, 645, 324, 76478, 3]
// console.log([...arr1, ...arr2].sort((a, b) => a - b))
// 2. Напиши функцию, которая принимает массив чисел и возвращает максимальное число в этом массиве. Используй оператор spread для передачи массива в Math.max().
// function f100(a) {
//   return Math.max(...a)
// }
// console.log(f100([2, 41, 64, 345, 6432, 3, 2, 5443, 452]))
// 3. Напиши функцию, которая принимает произвольное количество аргументов и возвращает массив, содержащий эти аргументы.
// function f101(a) {
//   return [...a]
// }
// console.log(f101(["ada", 34, "eewrer", 34, 42, 76]))
// 4. Напиши функцию, которая принимает два объекта и возвращает новый объект, содержащий свойства из обоих объектов.
// Если свойства с одинаковыми ключами присутствуют в обоих объектах, используй значение свойства из первого объекта.
// function f100(a, b) {
//   const arr3 = { ...b, ...a }
//   return arr3
// }
// console.log(f100({ a: 25, b: "Igor" }, { b: "Matter", name: 23 }))
// 5. Напиши функцию, которая принимает массив и возвращает новый массив с уникальными значениями из первого массива.
// function f102(a) {
//   return [...new Set(a)]
// }
// // console.log(f102([2, 41, 64, 345, 6432, 3, 2, 5443, 452]))
// function transform(arr) {
//   return arr.map((item, index, array) => {
//     if (item === '--double-next') {
//       return array[index + 1]
//     }
//     else if (item === '--double-prev') {
//       return array[index - 1]
//     }
//     else if (item === '--discard-prev') {
//       let myIndex = index - 1

//       array.splice(myIndex, 1)
//       return array

//     }
//     // else if (item === '--discard-next') {
//     //   return arr.splice(array[index + 1])
// //     // }
// //     else {
// //       return item
// //     }
//   })



// }
// console.log(transform([1, 3, '--double-next', 4])) // [1, 3, 4,4];
// console.log(transform([1, 3, '--discard-prev', 4])) // [1, 4];
// console.log(transform([1, 3, "--double-next", 4, "--double-prev", 5, "--discard-prev", 8, "--double-next", 10,]))
//  // [
// //   1, 3,  4,  4,
// //   4, 8, 10, 10
// // ];

//Напиши функцию, которая будет принимать на вход дату и время и возвращать ближайшее время в формате "ЧЧ:ММ", кратное 5 минутам.
// Например, если на вход подано "17.03.2023 12:13", то функция должна вернуть "12:10".
// const now = new Date()
// function f123(a) {
//   return `${a.getHours()}:${a.getMinutes()}`
// }
// console.log(f123(now));
// Напиши функцию, которая будет принимать на вход две даты и возвращать разницу между ними в днях.
// const now = new Date("December 25, 1995 ")
// const no = new Date("December 25, 302 ")
// console.log(now.getDay() - no.getDay())
// Напиши функцию, которая будет принимать на вход дату в формате "ММ/ДД/ГГГГ" или "ГГГГ/ММ/ДД" и возвращать ее представление в формате "ДД.ММ.ГГГГ".
// const now = new Date()
// const newNow = `${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`
// const b = (a) => {
//   if (a === `${now.getDate()}/${now.getMonth()}/${now.getFullYear()}` || a === `${now.getFullYear()}/${now.getMonth()}/${now.getDate()}`) {
//     return `${now.getDate()}:${now.getMonth()}:${now.getFullYear()}`
//   }
// }
// console.log(b(newNow))
//Напиши функцию, которая будет принимать на вход дату и время и возвращать строку,
// содержащую информацию о том, сколько времени прошло с момента заданной даты до текущего момента. Например, "2 дня назад", "3 часа назад", "10 минут назад" и т.д.
// const pastTime = new Date(2015, 2, 15, 14, 35, 0)

// const f125 = (time) => {
//   let now = new Date()
//   return `${now.getFullYear() - time.getFullYear()} лет ${now.getMonth() - time.getMonth()} месяца ${now.getDate() - time.getDate()} дня ${now.getHours() - time.getHours()} часов ${Math.abs(now.getMinutes() - time.getMinutes())} минут назад`
// }

// console.log(f125(pastTime))
// Напиши функцию, которая принимает на вход JSON-строку с объектом и возвращает количество свойств в объекте.
// const obj = {
//   name: "Igor",
//   age: 25,
//   address: "Minsk"
// }

// function f128(a) {
//   return Object.keys(JSON.parse(a)).length
// }
// console.log(f128(JSON.stringify(obj)))

// Напиши функцию, которая принимает на вход JSON-строку, содержащую информацию о студентах (имя, возраст), и возвращает массив их имен.

// const obj = [
//   { name: "Pasha", age: 25 },
//   { name: "Sasha", age: 30 },
//   { name: "Masha", age: 27 }
// ];

// const json = JSON.stringify(obj)
// const func = (json) => {
//   let res = []
//   for (let key of JSON.parse(json)) {
//     res.push(key.name)
//   }
//   return res

// }

// console.log(func(json)); // ["Pasha", "Sasha", "Masha"]
// Создай объект в формате JSON, который содержит информацию о погоде в твоем городе на следующие 5 дней.
// Каждый день должен содержать информацию о температуре, влажности и скорости ветра.
// const obj = {
//   1: {
//     t:
//   },
//   2:,
//   3:,
//   4:,
//   5:
// }
// Напиши функцию, которая принимает на вход JSON-строку, содержащую информацию о пользователях социальной сети, и возвращает только имена пользователей, у которых более 1000 подписчиков.
// const obj = [
//   { name: "Pasha", followers: 777 },
//   { name: "Sasha", followers: 1085 },
//   { name: "Masha", followers: 11435 },
//   { name: "Kasha", followers: 3 }
// ];

// const json = JSON.stringify(obj);

// const func = (json) => {
//   let res = []
//   for (let key of JSON.parse(json)) {
//     if (key.followers > 1000) {
//       res.push(key)
//     }
//   }
//   return res.map(item => item.name)
// }

// console.log(func(json)); // ["Sasha", "Masha"]

// Создать объект с помощью функции-конструктора и добавить ему свойства и методы через прототип.
// const person = {
//   name: "Igor",
//   work() {
//     console.log("His name is " + this.name)
//   }
// }

// const man = Object.create(person)

// man.name = "Vadim"

// man.work()
// Создать цепочку объектов (3 шт.) с помощью прототипов и вызвать методы из всех объектов в цепочке.

// const igor = {
//   work() {
//     console.log("Работает")
//   }
// }
// const man = Object.create(igor)
// man.eat = function () {
//   console.log("кушает")
// }

// const miss = Object.create(man)
// miss.sleep = function () {
//   console.log("Спит")
// }

// miss.sleep()
// miss.eat()
// miss.work()

// const obj = {
//   a: "AAA",
//   __proto__: {
//     a: "BBB",
//     funcA() {
//       return this.a;
//     }
//   }
// }

// console.log(obj.funcA());

// const obj = {
//   a: "AAA",
// }
// const obj3 = {
//   a: "BBB",
//   funcA() {
//     return this.a;
//   }
// }

// obj.__proto__ = obj3;



// Array.prototype.myMap = function (callback, thisArg) {
//   const newMap = []
//   for (let i = 0; i < this.length; i++) {
//     if (this[i]) {
//       newMap.push(this[i] + 1)
//     }
//   }
//   return newMap
// }
// // // console.log(obj.funcA());
// const arr = [1, 2, 3];

// // //такой код должен сработать
// const result = arr.myMap(item => item + 1);

// console.log(result); //[2,3,4]


// Array.prototype.myFilter = function (callback, thisArg) {
//   const newArr = []
//   for (let i = 0; i < this.length; i++) {
//     if (this[i] > 2) {
//       newArr.push(this[i])
//     }
//   }
//   return newArr
// }
// const arr = [1, 2, 3, 4];

// //такой код должен сработать
// const result = arr.myFilter(item => item > 2);

// console.log(result); //[3,4]

// Докажи, что утверждение “в js один тип данных - объект” правдивое.
// const i = 25
// const b = i.__proto__
// console.log(typeof i)
// console.log(typeof b)

// function divide(x, y) {
//   if (y === 0) {
//     throw new Error("Деление на ноль невозможно");
//   }
//   return x / y;
// }

// try {
//   const result = divide(6, 0);
// } catch (error) {
//   console.log(error.message);
// }
// function calculateAverage(grades) {
//   if (grades.some(grade => grade < 0)) {
//     throw "Оценки не могут быть отрицательными!";
//   }

//   const total = grades.reduce((sum, grade) => sum + grade, 0);
//   return total / grades.length;
// }

// try {
//   const result = calculateAverage([4, 5, 3, -2, 6]);
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }

// Напиши функцию, которая принимает на вход два числа и возвращает их сумму. В случае, если аргументы не являются числами, функция должна бросать исключение.

// function f(a, b) {
//   if (isNaN(a) || isNaN(b)) {
//     throw "Ошибка"
//   }
//   return a + b
// }

// try {
//   const res = f(2, 23)
//   console.log(res)
// }
// catch (error) {
//   console.log(error)
// }

// Напиши функцию, которая принимает на вход массив чисел и возвращает среднее арифметическое. В случае, если массив пустой, функция должна бросать исключение.

// function f(a) {
//   if (a.length === 0) {
//     throw "ошибка"
//   }

//   return Math.round(a.reduce((acc, item) => acc + item))
// }
// try {
//   const res = f([2])
//   console.log(res)
// }
// catch (error) {
//   console.log(error)
// }

// Напиши функцию, которая принимает на вход объект с полями x и y и возвращает их сумму. В случае, если объект не содержит полей x и y, функция должна бросать исключение.

// function f(a) {
//   if (a.x === undefined || a.y === undefined) {
//     throw "ошибка"
//   }
//   return a.x + a.y
// }

// const game = {
//   x: 23,
//   y: 36
// }
// try {
//   const res = f(game)
//   console.log(res)
// }
// catch (error) {
//   console.log(error)
// }
// Напиши функцию, которая принимает на вход строку и возвращает ее длину. В случае, если аргумент не является строкой, функция должна бросать исключение.

// function f(a) {
//   if (typeof a !== "string") {
//     throw new Error("Ошибка")
//   }
//   return a.length
// }

// try {
//   let res = f(23)
//   console.log(res)
// }
// catch(error) {
//   console.log(error.message)
// }

// Напиши функцию, которая принимает на вход число и возвращает его факториал. В случае, если аргумент не является положительным целым числом, функция должна бросать исключение.

// function f(a) {
//   if (a < 0) {
//     throw new Error("Ошибочка")
//   }
//   let res = 1
//   for (let i = a; i > 0; i--) {
//     res *= i
//   }
//   return res
// }
// try {
//   let b = f(-2)
//   console.log(b)
// }
// catch (error) {
//   console.log(error)
// }


// Задание на замыкание: Напиши функцию, которая принимает на вход число, а затем возвращает другую функцию,
// которая при каждом вызове будет возвращать сумму переданного числа и того, что передано при первом вызове.

// function f(x) {
//   return function (y) {
//     return x + y
//   }
// }
// console.log(f(10)(1))

// Задание на рекурсию: Напиши рекурсивную функцию, которая принимает на вход массив чисел и возвращает сумму всех элементов в этом массиве.

// function f(a, res = 0) {
//   for (let i = 0; i < a.length; i++) {
//     const item = a[i]
//     if (Array.isArray(item)) {
//       res += f(item)
//     }
//     else {
//       res += item
//     }
//   }
//   return res
// }

// console.log(f([2, 3, 4]))



// const multiply = (a, b, c, d) => a * b * c * d;

// function curry(fn, ...args) {
//   return (...newArgs) => {
//     const allArgs = [...args, ...newArgs]
//     if (allArgs.length >= fn.length) {
//       return fn(...allArgs)
//     }
//     return curry(fn, ...allArgs)
//   }
// }

// console.log(curry(multiply)(2, 3, 4, 5)); // 120


// function transform(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === '--double-next') {
//       arr[i] = arr[i + 1]
//       return arr
//     }
//     else if (arr[i] === '--discard-prev') {
//       arr[i] = 0
//       arr[i - 1] = 0
//       return arr.filter(item => item !== 0)
//     }
//     else if (arr[i] === "--double-prev") {
//       arr[i] = arr[i - 1]
//       return arr
//     }
//     else if (arr[i] === '--discard-prev') {
//       arr[i] = 0
//       arr[i - 1] = 0
//       return arr.filter(item => item !== 0)
//     }
//   }

// }
// console.log(transform([1, 3, '--double-next', 4])) // [1, 3, 4,4];
// console.log(transform([1, 3, '--discard-prev', 4])) // [1, 4];
// console.log(transform([1, 3, "--double-next", 4, "--double-prev", 5, "--discard-prev", 8, "--double-next", 10,])) // [
//   1, 3,  4,  4,
//   4, 8, 10, 10
// ];
// function addBinary(a, b) {
//   return (a+b).toString()
// }
// console.log(addBinary(3, 3))


// Напиши функцию countWords(str) , которая принимает на вход строку и
// возвращает объект Map, в котором ключами являются слова из строки, а
// значениями - количество их вхождений в строку.
// Например, для строки "Я люблю маму, а так же я люблю JavaScript" функция должна
// вернуть Map со следующими парами ключ-значение: "Я" -> 2 , "люблю" -> 2 ,
// "маму" -> 1 , и т.д.
// const a = "Я люблю маму, а так же я люблю JavaScript"
// function countWords(str) {
//   let st = str.split(" ").map(item => item.toLowerCase())
//   let map = new Map()
//   for (let key of st) {
//     if (map.has(key)) {
//       map.set(key, map.get(key) + 1)
//     }
//     else {
//       map.set(key, 1)
//     }
//   }
//   return map
// }
// console.log(countWords(a))

// Напиши функцию, которая принимает на вход массив и возвращает новый
// массив, содержащий только уникальные элементы исходного массива,
// используя коллекцию Set.

// const no = ["afa", 341, [], "erw123"]
// function set(a) {
//   return [...new Set(a)]
// }
// console.log(set(no))


// function transform(arr) {
//     if (!Array.isArray(arr)) {
//         throw new Error('\'arr\' parameter must be an instance of the Array!');
//     }
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         switch (arr[i]) {
//             case '--discard-next':
//                 i++;
//                 break;
//             case '--discard-prev':
//                 if (result.length !== 0 && arr[i - 2] !== '--discard-next') {
//                     result.pop();
//                 }
//                 break;
//             case '--double-next':
//                 if (i + 1 < arr.length) {
//                     result.push(arr[i + 1]);
//                 }
//                 break;
//             case '--double-prev':
//                 if (i - 1 >= 0 && arr[i - 2] !== '--discard-next') {
//                     result.push(arr[i - 1]);
//                 }
//                 break;
//             default:
//                 result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(transform([1, 3, "--discard-next", 4, "--double-prev", 5, "--discard-prev", 8, "--double-next", 10,])) // [
// //     1, 3,  4,  4,
// //     4, 8, 10, 10
// //   ]));


// рекурсия
// function factorial(num) {
// if (num === 1) {
// return num
// }
// else { return num * factorial(num - 1) }
// }
// console.log(factorial(3)) // 6;
// console.log(factorial(5)) // 120;


// function transform(arr) {
// let res = []
// for (let i = 0; i < arr.length; i++) {
//     switch (arr[i]) {
//         case '--double-next':
//             res.push(arr[i + 1])
//             break;
//         case '--discard-prev':
//             res.pop()
//             break;
//         case "--double-prev":
//             res.push(arr[i - 1])
//             break;
//         case '--discard-next':
//             i++
//             break;
//         default: res.push(arr[i])
//     }
// }
// return res
//     // return arr.reduce((acc, item, index, array) => {
//     //     item === '--discard-next' ? index++ :
//     //         item === '--double-next' ? acc.push(array[index + 1]) :
//     //             item === "--double-prev" ? acc.push(array[index - 1]) :
//     //                 item === "--discard-prev" ? acc.pop() : acc.push(item)
//     //     return acc;
//     // }, []);
// }
//   transform([1, 3, '--double-next', 4]) // [1, 3, 4,4];
//   transform([1, 3, '--discard-prev', 4]) // [1, 4];
//   transform([1, 3, "--double-next", 4, "--double-prev", 5, "--discard-prev", 8, "--double-next", 10, ]) // [
//     1, 3,  4,  4,
//     4, 8, 10, 10
//   ];
// console.log(transform([1, 3, '--discard-prev', 4]))


// Напиши функцию, которая будет принимать на вход дату и время и
// возвращать ближайшее время в формате "ЧЧ:ММ", кратное 5 минутам.
// Например, если на вход подано "17.03.2023 12:13", то функция должна вернуть
// "12:10".

// const now = new Date(2022, 2, 24, 11, 45)

// function f(a) {
//     let min = Math.round(a.getMinutes() / 10) *10
//     return `${n(a.getDate())}.${n(a.getMonth() + 1)}.${a.getFullYear()} ${a.getHours()}:${min}`
// }
// console.log(f(now))


// Напиши функцию, которая будет принимать на вход две даты и возвращать
// разницу между ними в днях.

// const now = new Date(2022, 2, 24, 9, 45)
// const last = new Date(2022, 2, 22, 12, 44)
// function f(a, b) {
//     return a.getTime() > b.getTime() ? Math.round((a.getTime() - b.getTime()) / 24 / 3600 / 1000 * 10) / 10 : Math.floor((b.getTime() - a.getTime()) / 24 / 3600 / 1000 * 10) / 10
// }
// console.log(f(now, last))

// Напиши функцию, которая будет принимать на вход дату в формате "ММ/ДД/
// ГГГГ" или "ГГГГ/ММ/ДД" и возвращать ее представление в формате
// "ДД.ММ.ГГГГ".

// const now = new Date(2022, 2, 24)
// function n(c) {
//     return c < 10 ? "0" + c : c
// }
// const c = (a) => {
//     return `${a.getFullYear()}/${n(a.getMonth() + 1)}/${n(a.getDate())}`
// }
// function f(b) {
//     return b.getMonth()
// }
// console.log(f(c(now)))

// Напиши функцию, которая будет принимать на вход дату и время и
// возвращать строку, содержащую информацию о том, сколько времени прошло
// с момента заданной даты до текущего момента. Например, "2 дня назад", "3
// часа назад", "10 минут назад" и т.д.


// Array.prototype.myMap = function (callback, thisArg) {
//     let res = []
//     for (let i = 0; i < this.length; i++) {
//         res.push(callback(this[i], i, this, thisArg))
//     }
//     return res
// }
// console.log([1, 2, 3, 4].myMap(item => item + 1))

// Array.prototype.myFilter = function (callback, thisArg) {
//     let res = []
//     for (let i = 0; i < this.length; i++) {
//         if (callback.call(this[i], i, this, thisArg)) {
//             res.push(this[i])
//         }
//     }
//     return res
// }
// console.log([1, 2, 3, 4, 5, 6, 7].myFilter(item => item > 2))

// Array.prototype.myEvery = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) {
//             return true
//         }
//         else {
//             return false
//         }
//     }
// }
// console.log([1, 2, 3, 4, 5, 6, 7].myEvery(item => item === 6))
// const arr = [1,2,3];
// Array.prototype.myMap = function(callBack, thisArg) {
// 	let res = []
// 	for(let i = 0; i< this.length; i++){
// 	res.push(callBack(this[i], i, this, thisArg))
// 	}	
// 	return res
// }
// const result = arr.myMap(item=> item + 1);

// console.log(result); //[2,3,4]

//=========================Карирование=============================
// const multiply = (a, b, c) => a * b * c ;

// const curry = (fn, ...args) => {
// 	return (...newArgs)=> {
// 		let allArgs = [...args, ...newArgs]
// 		if(allArgs.length >= fn.length){
// 			return fn(...allArgs)
// 		}
// 		else {
// 			return curry(fn, ...allArgs)
// 		}
// 	}
// }

// const curried = curry(multiply)

// console.log(curried(5)(2,3));
// Задание на замыкание: Напиши функцию, которая принимает на вход число, 
// а затем возвращает другую функцию, которая при каждом вызове будет возвращать сумму переданного числа и того, что передано при первом вызове.

// function zam(a){
// 	return function (b){
// 		return a+b
// 	}
// }
// console.log(zam(1)(2));
// Задание на рекурсию: Напиши рекурсивную функцию, которая принимает на вход массив чисел и возвращает сумму всех элементов в этом массиве.

// function f(a, res = 0) {
// 	  for (let i = 0; i < a.length; i++) {
// 	    const item = a[i]
// 	    if (Array.isArray(item)) {
// 	      res += f(item)
// 	    }
// 	    else {
// 	      res += item
// 	    }
// 	  }
// 	  return res
// 	}
	
// 	console.log(Array.isArray(f))

// let str = "js, phyton, .net, phyton"

// const removeDuplicate = (str) => {
// 	return [...new Set(str.split(","))].join("")
// }
// console.log(removeDuplicate(str));
// let a = "Я люблю маму, а так же я люблю JavaScript"

// function countWords(str) {
// 	return [...new Set(str.split(" "))]
// }

// console.log(countWords(a));

// function Man(name){
// 	this.name = name
// }
Man.prototype.sayHello = function(){
// !
	console.log("Hello, " + this.name)
}
Man.prototype.age = 25
const man1 = new Man("igor")

man1.sayHello()
// console.log(man1.age);