let vitorias = 0
let derrotas = 0

calculadora(vitorias, derrotas)

function calculadora(v, d) {
    let saldo = v - d
    let elo 

    switch (true) {
        case(saldo < 10):
            elo = "Ferro"
            break
        
        case(saldo >= 10) && (saldo < 20):
            elo = "Bronze"
            break

        case(saldo >= 20) && (saldo < 50):
            elo = "Prata"
            break
        
        case(saldo >= 50) && (saldo < 80):
            elo = "Ouro"
            break
            
        case(saldo >= 80) && (saldo < 90):
            elo = "Diamante"
            break
            
        case(saldo >= 90) && (saldo <= 100):
            elo = "Lendário"
            break
        
        case(saldo > 100):
            elo = "Imortal"
            break

        default:
            elo = "indefinido"
            break;
    }
    
    console.log("O Herói tem de saldo de %s vitorias e está no nível %s", saldo, elo)

}