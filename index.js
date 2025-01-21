
let vitorias = 18
let derrotas = 8


function calcularSaldoENivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas
    let level = ""

//verifica o número de vitórias e define o nível
  if (saldoVitorias <= 10) {
    level = "Ferro"
} else if (saldoVitorias >= 11 && saldoVitorias<=20) {
    level = "Bronze"
} else if (saldoVitorias >= 21 && saldoVitorias<=50) {
    level = "Prata"
} else if (saldoVitorias >= 51 && saldoVitorias<=80) {
    level = "Ouro" 
} else if (saldoVitorias >= 81 && saldoVitorias<=90) {
    level = "Diamente"
} else if (saldoVitorias >= 91 && saldoVitorias<=100) {
    level = "Ascendente"
} else if (saldoVitorias >= 101) {
    level = "Imortal"
}

    return { saldoVitorias, level }
}
//chamada da função
const resultado = calcularSaldoENivel(vitorias, derrotas)

//saída
console.log("O Herói tem saldo de " + resultado.saldoVitorias + " vitórias e está no nível " + resultado.level)