//! Синхронный и асинхронный код

// В синхронном коде следующая инструкция не может начать свое выполнение пока не выполнится предыдущая.
// То есть инструкции обрабатываются последовательно.
// console.log("First log");
// console.log("Second log");
// console.log("Third log");

//* Следующий код - асинхронный.С функцией setTimeout() мы познакомимся дальше.
// Сейчас о ней нам нужно знать только то, что она принимает два параметра: callback - функцию, которая будет вызвана
// по истечении времени, которое мы передаем вторым аргументом.

// // Will run first
// console.log("First log");

// setTimeout(() => {
//   // Will run last, after 2000 milliseconds
//   console.log("Second log");
// }, 2000);

// // Will run second
// console.log("Third log");

//! Таймаут

//* Метод setTimeout() позволяет запланировать запуск функции через определённое время.
// Метод setTimeout() позволяет запланировать запуск функции через определённое время.

// const timerId = setTimeout(callback, delay, arg1, arg2, ...);

// callback - функция, выполнение которое необходимо запланировать.
// delay - время в миллисекундах, через которое callback-функция будет вызвана один раз.

//* ClearTimeout(идентификотор setTimeout) - очистит таймаут, т.е. не произойдёт

// const show = () => {
//   console.log('Вызов отложенной функции');
// };
// // function show() {
// //   console.log('Вызов отложенной функции');
// // }
// const time = setTimeout(show, 500);
// clearTimeout(time); //* не выполнится поскольку есть отмена clearTimeout

//! Интервал

// Метод setInterval() - это простой способ повторения кода снова и снова с установленным промежутком времени повторений.
// Синтаксис и параметры такие же как у setTimeout().В отличие от setTimeout(), интервал запускает выполнение функции не один раз,
// а регулярно повторяет её через указанный промежуток времени.Остановить исполнение можно вызовом метода clearInterval(id).

// const timerId = setInterval(callback, delay, arg1, arg2, ...);




//! ===================================================== Дата и время =========================================

// Класс Date абстрагирует большую часть работы с датами напрямую.Это позволяет нам представлять моменты во времени как объекты
// и манипулировать ими заранее определёнными методами.Используя возможности класса Date можно создавать часы, счетчики,
// календари и другие интерактивные элементы интефрейса.

//? Создание даты
// Экземпляр объекта Date это объект представляющий определённый момент времени. Создание даты без аргументов,
// возвращает объект хранящий дату и время на момент его инициализации, то есть текущие.
// В строчном преобразовании объект возвращает результат вызова метода toString(), поэтому в первом логе мы получим строку,
// а не объект.Создание даты

//* без объявления класса в милисекундах
// const myDate = Date.now();

//* С объявлением ЭК
// const date = new Date();

// console.log(date);
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// console.log(date.toString());
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// //? Unix время

// // Метод getTime() возвращает числовое представление даты(timestamp) - количество миллисекунд прошедших
// // с полночи 1 января 1970 года.

// const date1 = new Date();
// console.log(date1.getTime()); // 1666525662942

//? Установка даты

// При создании экземпляра класса Date, можно установить дату строкой или числами.
// Строка может описывать только дату или дату и время.

// const teamMeetingDate = new Date("March 16, 2030");
// console.log(teamMeetingDate);
// // "Mon Mar 16 2030 00:00:00 GMT+0200 (Eastern European Standard Time)"

// const preciseTeamMeetingDate = new Date("March 16, 2030 14:25:00");
// console.log(preciseTeamMeetingDate);
// // "Mon Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"

// // Другой способ создания новых объектов - это передать семь чисел, которые описывают год, месяц(начинается с 0), день, часы,
// // минуты, секунды и миллисекунды.Обязательны только первые три.
// const date3 = new Date(2023, 2, 16, 14, 25, 0, 0);
// console.log(date3);
// // Thu Mar 16 2023 14:25:00 GMT+0100 (Центральная Европа, стандартное время)

//? Методы

//? Геттеры
// Геттеры используются для чтения всей даты или отдельной составляющей. Возвращаемое значение зависит от текущего часового
// пояса установленного на вашем компьютере.

// const date4 = new Date();
// console.log("Date: ", date4);

// // Возвращает день месяца от 1 до 31
// console.log("getDate(): ", date4.getDate());

// // Возвращает день недели от 0 до 6
// console.log("getDay(): ", date4.getDay());

// Возвращает месяц от 0 до 11
// console.log("getMonth(): ", date4.getMonth());

// // Возвращает год из 4 цифр
// console.log("getFullYear(): ", date4.getFullYear());

// // Возвращает час
// console.log("getHours(): ", date4.getHours());

// // Возвращает минуты
// console.log("getMinutes(): ", date4.getMinutes());

// // Возвращает секунды
// console.log("getSeconds(): ", date4.getSeconds());

// // Возвращает миллисекунды
// console.log("getMilliseconds(): ", date4.getMilliseconds());

//? Сеттеры

// Все, что можно прочитать можно записать, методы для записи называются также как геттеры, но начинаются с приставки set

// const date5 = new Date("March 16, 2030 14:25:00");

// date5.setMinutes(50);
// // "Sat Mar 16 2030 14:50:00 GMT+0200"

// date5.setFullYear(2040, 4, 8);
// "Tue May 08 2040 14:50:00 GMT+0300"

//? Форматирование даты
// Объект даты может быть представлен в разных строчных и числовых форматах. Для этого существует целый набор методов.
// Например, toString(), toDateString() и toTimeString() возвращают стандартное строчное представление, не заданное жёстко
// в стандарте, а зависящее от браузера.Единственное требование к нему - читаемость человеком.
// Метод toString() возвращает дату целиком, а toDateString() и toTimeString() - только дату и время соответственно.

// const date6 = new Date("March 16, 2030 14:25:00");

// date6.toString();
// // "Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"

// date6.toTimeString();
// // "14:25:00 GMT+0200 (Eastern European Standard Time)"

// date6.toLocaleTimeString();
// // "2:25:00 PM"

// date6.toUTCString();
// // "Sat, 16 Mar 2030 12:25:00 GMT"

// date6.toDateString();
// // "Sat Mar 16 2030"

// date6.toISOString();
// // "2030-03-16T12:25:00.000Z"

// date6.toLocaleString();
// // "3/16/2030, 2:25:00 PM"

// date6.getTime();
// // 1899894300000


//! ===================================  Промисы  =================================================

//? Создание
// Промис создается как экземпляр класса Promise, который принимает функцию(executor) в качестве аргумента и сразу вызывает её,
// ещё до создания и возврата промиса.

// const promise = new Promise((resolve, reject) => {
//   // Asynchronous operation
// });

// Функция executor оповещает экземпляр (промис), когда и как операция, с которой он связан, будет завершена.
// В ней можно выполнять любую асинхронную операцию, по завершении которой нужно вызвать resolve() при успешном
// выполнении(состояние fulfilled), или reject() при ошибке(состояние rejected).Значение возвращаемое этой функции игнорируется.

// resolve(value) - функция для вызова при успешной операции. Переданный ей аргумент будет значением выполненного промиса.
// reject(error) - функция для вызвова в случае ошибки. Переданный ей аргумент будет значением отклоненного промиса.

// Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => { 
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });
// console.log(promise);

//? Метод then()

// Метод then() принимает два аргумента - callback - функции которые будут вызваны когда промис изменит своё состояние.
// Результат промиса, значение или ошибку, они получат как аргументы.

// promise.then(onResolve, onReject)

// onResolve(value) - будет вызвана при успешном выполнении промиса и получит его результат как аргумент.
// onReject(error) - будет вызвана при выполнении промиса с ошибкой и получит её как аргумент.

//? Метод catch()

// На практике в методе then() обрабатывают только успешное выполнение промиса, а ошибку его выполнения в специальном методе catch() для «отлова» ошибок.

// promise.catch(error => {
  // Promise rejected
// });

//? Метод finally()

// Этот метод может быть полезен если необходимо выполнить код после того, как обещание будет разрешено(fulfilled или rejected),
// независимо от результата.Позволяет избежать дублирования кода в обработчиках then() и catch ().

// promise.finally(() => {
//   // Promise fulfilled or rejected
// });

//todo ===================== Примеры =================================================

//? Пример 1

const makeOrder = (dish) => {
  const promise = new Promise((resolve, reject) => {
    const passed = Math.random() > 0.5;

    setTimeout(() => {
      if (passed) {
        resolve('Вот ваше блюдо')
      }
      reject('Извините у нас закончились продукты')
    }, 1000);
  });
  return promise;
};

const order = makeOrder('пирожок');

order.then(onMakeOrderSuccess).catch(onMakeOrderError);

function onMakeOrderSuccess(result) {
  console.log('OrderSuccess', result); // OrderSuccess Вот ваше блюдо
}

function onMakeOrderError(error) {
  console.log('OrderError', error); // OrderError Извините у нас закончились продукты
}


//? Пример 2 Ипподром ==================================================

const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
]

let raceCounter = 0;

const refs = {
  startBtn: document.querySelector('.js-start-race'),
  winnerFiels: document.querySelector('.js-winner'),
  progressFiels: document.querySelector('.js-progress'),
  tableBody: document.querySelector('.js-results-table'),
}

refs.startBtn.addEventListener('click', onStart);

function onStart() {
  raceCounter += 1;
  const promises = horses.map(run); //! создаст массив из промисов всез лошадей из массива horses

  updateWinnerField(''); 
  updateProgressField('Заезд начался, ставки не принимаются !');
  determineWinner(promises);
  waitForAll(promises);
}

function determineWinner(horsesP) { // ! Найдёт самый быстрый промис из всех
  Promise.race(horsesP).then(({ horse, time }) => {
    updateWinnerField(`Победил ${horse}, финишировав за ${time} времени`);
    updateResultsTable({ horse, time, raceCounter });
  })
}

function waitForAll(horsesP) { //! Доделаем все промисы чтобы можно было сделать новый забег
  Promise.all(horsesP).then(() => {
    updateProgressField('Заезд окончен, принимаются ставки.');
  });
}

function updateWinnerField(message) { //! очистит поле при новом забеге
  refs.winnerFiels.textContent = message;
}

function updateProgressField(message) { //! Запишем о начале заезда 
  refs.progressFiels.textContent = message;
}

function updateResultsTable({ horse, time, raceCounter }) { //! вывод сообщения в DOM
  const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
  refs.tableBody.insertAdjacentHTML('beforeend', tr);
}

function run(horse) { //! функция вернёт промис одной лошади с её именем и рандомным временем
  return new Promise(resole => {
    const time = getRandomTime(2000, 3500);

    setTimeout(() => {
      resole({ horse, time });
    }, time);
  });
}

function getRandomTime(min, max) { // ! Функция рандомного числа от min до max
  return Math.floor(Math.random() * (max - min + 1) + min);
}