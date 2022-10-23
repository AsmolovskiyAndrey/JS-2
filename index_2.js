//! Синхронный и асинхронный код

// В синхронном коде следующая инструкция не может начать свое выполнение пока не выполнится предыдущая.
// То есть инструкции обрабатываются последовательно.
console.log("First log");
console.log("Second log");
console.log("Third log");

//* Следующий код - асинхронный.С функцией setTimeout() мы познакомимся дальше.
// Сейчас о ней нам нужно знать только то, что она принимает два параметра: callback - функцию, которая будет вызвана
// по истечении времени, которое мы передаем вторым аргументом.

// Will run first
console.log("First log");

setTimeout(() => {
  // Will run last, after 2000 milliseconds
  console.log("Second log");
}, 2000);

// Will run second
console.log("Third log");

