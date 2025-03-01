                                               // Завдання  1
// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

//const styles = ["jazz", "blues"];
//styles.push("rock - n - roll")
//styles[1] = "classic";
//console.log(styles)
//function logItems(array) {
//    for (let i = 0; i < styles.length; i += 1) {
// //     console.log(`${i + 1} - ${array[i]}`);
//}
//}
//logItems(styles);

                                                    // Завдання 2
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];
//function checkLogin(array) {
   // const name = prompt("Введіть ім'я користувача:")

  //  if (array.includes(name)) {
   //     alert(`Welcome, ${name}!`);
   // } else {
    //    alert("User not found");
  //  }
//}

//const logins = ["Peter", "John", "Igor", "Sasha"];
//checkLogin(logins)


                                               // Завдання 3
                                                    
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

function caclculateAverage(...args) {
    for (const arg of args) {
        if (typeof arg !== 'number') {
            continue
        }
    }
    const sum = args.reduce((total, num) => total + num, 0);
    return sum / args.length;


}

console.log(caclculateAverage(10, 40));
console.log(caclculateAverage(10, 20, ));

                                               
