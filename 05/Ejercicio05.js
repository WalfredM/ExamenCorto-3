function estanEnRango(num1, num2) {
    const enRango1 = (num1 >= 0 && num1 <= 50) && (num2 >= 0 && num2 <= 50);
    const enRango2 = (num1 >= 100 && num1 <= 150) && (num2 >= 100 && num2 <= 150);
    return (enRango1 || enRango2) ? "Sí" : "No";
}

console.log(estanEnRango(30, 45));
console.log(estanEnRango(120, 130));
console.log(estanEnRango(60, 70));
