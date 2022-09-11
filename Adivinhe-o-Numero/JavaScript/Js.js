var numeroSecreto = parseInt(Math.random() * 1000)
var menor = 0
var maior = 1000

function chutar() {
    let chute = parseInt(document.getElementById("valor").value);

    if (chute == numeroSecreto){
        var resultado = document.getElementById("resultado")
        resultado.innerHTML = `Você acertou. O numero era ${numeroSecreto}.`
    } 
    else if(chute > numeroSecreto && chute < maior) {
        maior = chute
        var resultado = document.getElementById("resultado")
        resultado.innerHTML = `Você errou. O numero secreto esta entre ${menor} e ${maior}`
    } 
    else if(chute < numeroSecreto && chute > menor) {
        menor = chute
        var resultado = document.getElementById("resultado")
        resultado.innerHTML = `Você errou. O numero secreto esta entre ${menor} e ${maior}`
    }
    else {
       console.log("Errou")
    }
}