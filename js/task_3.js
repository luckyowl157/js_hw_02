const findLongestWord = function(string) {
    let words = string.split(" ");
    let res = words[0];

    for (const word of words) {
        if(word.length > res.length) {
            res = word;
        }
    }
    return res;
  };
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  console.log(findLongestWord('Google do a roll')); // 'Google'
  console.log(findLongestWord('May the force be with you')); // 'force'