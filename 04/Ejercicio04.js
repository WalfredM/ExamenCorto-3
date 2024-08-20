function estanEntre100y200(num1, num2) {
    return (num1 >= 100 && num1 <= 200) && (num2 >= 100 && num2 <= 200) ? "Sí" : "No";
}

console.log(estanEntre100y200(150, 175));
console.log(estanEntre100y200(99, 201)); 
