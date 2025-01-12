// В большинстве редакторов строку кода можно закомментировать, нажав комбинацию клавиш
// Ctrl+/ для однострочного комментария и что-то вроде Ctrl+Shift+/ – для многострочных
// комментариев (выделите кусок кода и нажмите комбинацию клавиш). В системе Mac
// попробуйте Cmd вместо Ctrl и Option вместо Shift.


// можно менять тип данных
// let value = true;
// alert(typeof value); // boolean

// value = String(value); // теперь value это строка "true"
// alert(typeof value); // string


// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

// let a = prompt('Какое «официальное» название JavaScript', 'ECMAScript');
//     let b = (a=='ECMAScript') ? 'Верно!' : 'Не знаете? ECMAScript!';
//     alert(b)


// let c = prompt('Какое «официальное» название JavaScript', 'ECMAScript');
//     if (c=='ECMAScript') {alert("Верно")}
//     else {alert("Не знаете? ECMAScript!")}



// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.
// Предполагается, что пользователь вводит только числа.

// let a = +prompt('получает число через prompt','').replace(",", ".");
//     if (a>0) {alert('1');}
//         else if (a<0) {alert('-1')}
//     else {alert ('0');}

// let a = +prompt('получает число через prompt','').replace(",", ".");
//     let b = (a>0) ? '1' :
//         (a<0) ? '-1': '0';
//     alert(b);
    


// Перепишите конструкцию if с использованием условного оператора '?':

// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// let a = +prompt("a");
// let b = +prompt("b");
// let result = (a + b < 4) ? 'Мало': 'Много';
// alert(result)



// Перепишите if..else с использованием нескольких операторов '?'.

// Для читаемости рекомендуется разбить код на несколько строк.

// let a = prompt('кто','');
// let message = 
//     (a=='Сотрудник') ? 'Привет':
//     (a=='Директор') ? 'Здравствуйте': 
//     (a=='') ? 'Нет логина': 
//     "";
// alert(message);




// let a = prompt('возраст','');
//     let b = 
//         (a<18) ? "Вы слишком молоды" :
//         (18<a<=60) ? "Добро пожаловать" : "Возраст не подходит";
//     alert(b)


// Цикл while
// Этот цикл выполняется до тех пор, пока условие истинно. Его синтаксис:

// javascript
// Copy code
// while (условие) {
//   // код, который будет выполняться
// }

// Цикл for
// Этот цикл удобен, когда известно количество итераций. Синтаксис:

// javascript
// Copy code
// for (начало; условие; шаг) {
//   // код, который будет выполняться
// }


// let i = 0;
// while (i < 3) { // выводит 0, затем 1, затем 2
//   alert( i );
//   i++;
// }

// let a=1
// while (a<5) {
//     alert (a);
//     a++;
// }


// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert( 'Маловато' );
//     break;
//   case 4:
//     alert( 'В точку!' );
//     break;
//   case 5:
//     alert( 'Перебор' );
//     break;
//   default:
//     alert( "Нет таких значений" );
// }


// Напишите "if", аналогичный "switch"
// важность: 5
// Напишите if..else, соответствующий следующему switch:

// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;
  
//     default:
//       alert( 'We hope that this page looks ok!' );
//   }


// let a = prompt("браузер",'');
// if (a=="Edge") {
//     alert( 'You ve got the Edge' );  
// } 
// else if (a=="Chrome", 'Firefox', 'Safari', 'Opera'){
//     alert( 'Okay we support these browsers too' );
// }
// else {
//     alert( 'We hope that this page looks ok!' );
// }

// if(browser == 'Edge') {
//     alert("You've got the Edge!");
//   } 
//   else if (browser == 'Chrome'
//    || browser == 'Firefox'
//    || browser == 'Safari'
//    || browser == 'Opera') {
//     alert( 'Okay we support these browsers too' );
//   } else {
//     alert( 'We hope that this page looks ok!' );
//   }





// Переписать условия "if" на "switch"
// важность: 4
// Перепишите код с использованием одной конструкции switch:

// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }


// const number = +prompt('Введите число между 0 и 3', '');

//  switch (number) {
//     case 0:
//       alert( 'Вы ввели число 0' );
//       break;
//     case 1:
//       alert( 'Вы ввели число 1' );
//       break;
//     case 2:
//     case 3:  
//       alert( 'Вы ввели число 2, а может и 3' );
//       break;
//   }

