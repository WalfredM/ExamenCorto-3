function diferenciaCon15(numero) {
    if (numero < 0 || numero === 15) {
        return "Error: Número negativo o igual a 15.";
    }
    return Math.abs(numero - 15);
}

console.log(diferenciaCon15(10)); 
console.log(diferenciaCon15(20)); 
console.log(diferenciaCon15(15)); 
