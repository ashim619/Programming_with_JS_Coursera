function addTaxToPrices(taxRate,...itemsBought){
    return itemsBought.map(item=>item*taxRate)
}
var shoppingCart=addTaxToPrices(1.1,76,46,86,87,44)
console.log(shoppingCart)

// Traditional anonymous function
(function (a) {
    return a + 100;
  });
  
  // 1. Remove the word "function" and place arrow between the argument and opening body brace
  (a) => {
    return a + 100;
  };
  
  // 2. Remove the body braces and word "return" — the return is implied.
  (a) => a + 100;
  
  // 3. Remove the parameter parentheses
  a => a + 100;



// Traditional anonymous function
(function (a, b) {
    return a + b + 100;
  });
  
  // Arrow function
  (a, b) => a + b + 100;
  
  const a = 4;
  const b = 2;
  
  // Traditional anonymous function (no parameters)
  (function () {
    return a + b + 100;
  });
  
  // Arrow function (no parameters)
  () => a + b + 100;


// Traditional anonymous function
(function (a, b) {
    const chuck = 42;
    return a + b + chuck;
  });
  
  // Arrow function
  (a, b) => {
    const chuck = 42;
    return a + b + chuck;
  };

  
// Traditional Function
function bob(a) {
    return a + 100;
  }
  
  // Arrow Function
  const bob2 = (a) => a + 100;
  