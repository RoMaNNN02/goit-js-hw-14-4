// Завдання 2

// "Змагання промісів"

// Ви маєте набір функцій, які повертають проміси з випадковими затримками.
//  Ваше завдання — виконати всі проміси одночасно за допомогою Promise.race
//  і отримати результат найшвидшого проміса.
const getRandomTime = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const randomDelay = (element) => {
  const time = getRandomTime(1000, 5000);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(element);
    }, time);
  });
};
const promiseRaceMasive = [
  randomDelay("проміс 1"),
  randomDelay("проміс 2"),
  randomDelay("проміс 3"),
  randomDelay("проміс 4"),
  randomDelay("проміс 5"),
];
Promise.race(promiseRaceMasive).then((winner) => console.log(winner));
// Створіть функцію randomDelay, яка приймає значення
//  і повертає проміс з випадковою затримкою (від 1000 до 5000 мілісекунд).
// Створіть масив з 5 промісів, використовуючи функцію randomDelay, із різними значеннями.
// Використайте Promise.race, щоб виконати всі проміси з масиву і отримати результат найшвидшого проміса.
// Обробіть результат найшвидшого проміса та виведіть його у консоль.
