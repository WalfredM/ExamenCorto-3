function sumaCondicionada(num1, num2) {
    let suma = num1 + num2;
    if (suma > 100) {
        console.log(suma);
    } else {
        return suma;
    }
}

sumaCondicionada(50, 70);
console.log(sumaCondicionada(80, 50));
