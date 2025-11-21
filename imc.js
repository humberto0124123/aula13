let peso = Number(prompt("Digite seu peso (kg): "));
let altura = Number(prompt("Digite sua altura (m): "));

if (!peso || !altura || altura <= 0) {
    console.log("Dados inválidos. Por favor, digite um peso e altura válidos (maiores que zero).");
} else {
    let imc = peso / (altura * altura);
    
    console.log(`Seu IMC é: ${imc.toFixed(2)}`);
    if (imc < 18.5) {
        console.log("Classificação: Abaixo do peso");
    } else if (imc < 25) {
        console.log("Classificação: Peso normal");
    } else if (imc < 30) {
        console.log("Classificação: Sobrepeso");
    } else if (imc < 35) {
        console.log("Classificação: Obesidade grau 1");
    } else if (imc < 40) {
        console.log("Classificação: Obesidade grau 2");
    } else {
        console.log("Classificação: Obesidade grau 3");
    }
}
