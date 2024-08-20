function concatenarElementos(array) {
    return array[347] + array[222];
}

let ejemploArray = new Array(348).fill("elemento");
ejemploArray[347] = "elemento347";
ejemploArray[222] = "elemento222";

console.log(concatenarElementos(ejemploArray));
