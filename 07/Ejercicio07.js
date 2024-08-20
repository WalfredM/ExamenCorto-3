function descomponerNumero(numero) {
    let unidadesDeMillar = Math.floor(numero / 1000) * 1000;
    let centenas = Math.floor((numero % 1000) / 100) * 100;
    let decenas = Math.floor((numero % 100) / 10) * 10;
    let unidades = numero % 10;

    return `Unidades de millar: ${unidadesDeMillar}, centenas: ${centenas}, decenas: ${decenas}, unidades: ${unidades}`;
}

console.log(descomponerNumero(1541));
