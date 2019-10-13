module.exports = function zeros(expression) {
    let arr = expression.split('*');
    let five = 0;
    let two = 0;
    let n;
    let number;
    
      arr.map((i) => {
          if (i.includes('!!')) {
              n = 2;
              number = i.slice(0, -2);
          } else {
              n = 1;
              number = i.slice(0, -1);
          }
          
          for (let j = 0; j < number; number -= n) {
              let result = number;  
  
              while (result % 2 === 0) {
                  two++;
                  result = result / 2;
              }
              
              while (result % 5 === 0) {
                  five++;
                  result = result / 5;
              }
          }
      });
  
      return Math.min(two, five);
  }
