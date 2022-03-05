module.exports = function check(str, bracketsConfig) {
  const OPEN_BRACKETS =bracketsConfig;
  const BRACKETS_PAIR = {
    [')'] : '(',
    ['}'] : '{',
    ['['] : ']',
    ['|'] : '|',
    ['7'] : '7',
  };

  console.log(str);
  console.log(bracketsConfig);

    let arr = [];
    let z = str.length;

    for (let i=0; i < z; i++){
      let curSimbol = str[i];

      if(OPEN_BRACKETS.includes(curSimbol)) {
        arr.push(curSimbol);
      } else {
        if (z === 0) {
          return false;
        }
      }
       let topElement = arr[z - 1];

       if (BRACKETS_PAIR[curSimbol] === topElement) {
         arr.pop();
       } else {
         return false;
       }
    }
  
}
