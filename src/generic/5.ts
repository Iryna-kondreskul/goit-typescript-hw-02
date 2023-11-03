/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

// interface KeyValuePair {
//   key;
//   value;
// }
// =====================================


// interface KeyValuePair {
//   [key:string]: string | number;
//   value: string | number;
// }

interface KeyValuePair <T, U>{
  key: T;
  value: U;
}

export {};