
function modulo(a,b){
  let num4 = (a % b);
  alert (num4);
}



function  division(a,b){
  let num3 = (a / b);
  alert(num3);
}

function multiplay(a,b){
  let c = (a * b);
  alert(c);
}



function exponentiation (a,b){
  let num2 = ( Math.pow(a,b));
  alert(num2);
}


function mainFunction(callback){
    let a = +prompt('Введите число?');
    let b = +prompt('В какую степень вы хотите возвести число?');
    callback(a , b);
}

mainFunction(exponentiation);
mainFunction(multiplay);
mainFunction(division);
mainFunction(modulo);
