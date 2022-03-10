module.exports = function check(str, bracketsConfig) {
  const OPEN_BRACKETS = [];
  const CLOSED_BRACKETS = [];
  const BRACKETS_PAIR = {};

for (let i=0; i< bracketsConfig.length; i++){
  OPEN_BRACKETS.push(bracketsConfig[i][0]);
  CLOSED_BRACKETS.push(bracketsConfig[i][1]);
  BRACKETS_PAIR[bracketsConfig[i][1]] = bracketsConfig[i][0];
  /* const OPEN_BRACKETS = ['(', '{', '[','1','3','5','7','8', "|"]; */

}

    let arr = [];
    console.log(OPEN_BRACKETS);
    console.log(CLOSED_BRACKETS);
    console.log(BRACKETS_PAIR);

    for (let i=0; i < str.length; i++){
      let curSimbol = str[i];

      if(OPEN_BRACKETS.includes(curSimbol)) {
        arr.push(curSimbol);
        
      } else {
        if (arr.length === 0) {
          return false; 
        }
        
    
       let topElement = arr[arr.length - 1];

       if (BRACKETS_PAIR[curSimbol] === topElement) {
         arr.pop();
       } else {
         return false;
       }
    }
}

    return arr.length === 0 ;
}
