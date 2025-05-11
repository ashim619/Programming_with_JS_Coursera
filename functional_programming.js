var currencyOne=100;
var exchangeRate=1.2;
var currencyTwo=0;
function convertCurrency(amount, rate){
    return amount*rate;
}
currencyTwo=convertCurrency(currencyOne, exchangeRate);
console.log(currencyTwo)