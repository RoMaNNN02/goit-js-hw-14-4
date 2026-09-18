// "Порівняння кількох промісів"

// Ви маєте набір функцій, які повертають проміси з випадковими затримками.
// Ваше завдання — виконати всі проміси одночасно за допомогою Promise.all і обробити результати.

const delayedPromise = (arg, time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arg);
    }, time);
  });
};
const promiseMasive = [
  delayedPromise("1", 1000),
  delayedPromise("2", 3000),
  delayedPromise("3", 500),
  delayedPromise("4", 2000),
  delayedPromise("5", 4000),
];
Promise.all(promiseMasive).then((result) => console.log(result));
// Створіть функцію delayedPromise, яка приймає значення і затримку (у мілісекундах) і повертає проміс,
// який вирішується з заданим значенням після затримки.
// Створіть масив з 5 промісів, використовуючи функцію delayedPromise, із різними значеннями та затримками.
// Використайте Promise.all, щоб одночасно виконати всі проміси з масиву.
// Обробіть результати вирішення промісів та виведіть їх у консоль.
//npm run dev для запуску проекту
