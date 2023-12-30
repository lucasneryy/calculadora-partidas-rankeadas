let vitorias = 0
let derrotas = 0

let resultadoSaldoVitorias = saldoVitorias(vitorias, derrotas)
let resultadoClassificacaoElo = classificacaoElo(resultadoSaldoVitorias)

function saldoVitorias(vitoria, derrota) {
    saldo = vitoria - derrota
    return saldo
}

function classificacaoElo(i) {
    switch (true) {
        case(i < 10):
            return "Ferro"
            break
        
        case(i >= 10) && (i < 20):
            return "Bronze"
            break

        case(i >= 20) && (i < 50):
            return "Prata"
            break
        
        case(i >= 50) && (i < 80):
            return "Ouro"
            break
            
        case(i >= 80) && (i < 90):
            return "Diamante"
            break
            
        case(i >= 90) && (i <= 100):
            return "Lendário"
            break
        
        case(i > 100):
            return "Imortal"
            break

        default:
            return "indefinido"
            break;
    }
}

console.log("O Herói tem de saldo de %s vitorias e está no nível %s", resultadoSaldoVitorias, resultadoClassificacaoElo)