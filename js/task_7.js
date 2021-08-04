const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const isLoginValid = function(login) {
  return login.length >= 4 && login.length <= 16;

};

const isLoginUnique = function(allLogins, login) {
  // твой код
  return !allLogins.includes(login);
};

const addLogin = function(allLogins, login) {
  // твой код
  const valid = isLoginValid(login);
  if(!valid) {
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }
  
  const unique = isLoginUnique(allLogins, login);
  if(!unique) {
    return 'Такой логин уже используется!';
  }

  logins.push(login);
  return 'Логин успешно добавлен!';
 
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'