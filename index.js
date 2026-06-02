let time1 = {
    nome: "Sport",
    pontos: 0,
    golsFeitos: 0,
    golsSofridos: 0,
    saldoDeGols: 0,
    cartoesAmarelos: 0,
    cartoesVermelhos: 0,
    nomeArtilheiro: "Coutinho",
    golsArtilheiro: 0
}

let time2 = {
    nome: "Nautico",
    pontos: 0,
    golsFeitos: 0,
    golsSofridos: 0,
    saldoDeGols: 0,
    cartoesAmarelos: 0,
    cartoesVermelhos: 0,
    nomeArtilheiro: "Paulo Sergio",
    golsArtilheiro: 0
}

let time3 = {
    nome: "Santa Cruz",
    pontos: 0,
    golsFeitos: 0,
    golsSofridos: 0,
    saldoDeGols: 0,
    cartoesAmarelos: 0,
    cartoesVermelhos: 0,
    nomeArtilheiro: "Pipico",
    golsArtilheiro: 0
}

let time4 = {
    nome: "Retro",
    pontos: 0,
    golsFeitos: 0,
    golsSofridos: 0,
    saldoDeGols: 0,
    cartoesAmarelos: 0,
    cartoesVermelhos: 0,
    nomeArtilheiro: "Giva",
    golsArtilheiro: 0
}

function sortearGols() {
    let numAleatorio = Math.random()
    let numVezesQuatro = numAleatorio * 4
    let golArredondado = Math.floor(numVezesQuatro)
    return golArredondado
}

function sortearCartaoAmarelo() {
    let numAleatorio = Math.random()
    let numVezesTres = numAleatorio * 3
    let cartaoArredondado = Math.floor(numVezesTres)
    return cartaoArredondado
}

function sortearCartaoVermelho() {
    let numAleatorio = Math.random()
    let numVezesDois = numAleatorio * 2
    let cartaoArredondado = Math.floor(numVezesDois)
    return cartaoArredondado
}

function jogarPartida(t1, t2) {

    let golsT1Tempo1 = sortearGols()
    let golsT1Tempo2 = sortearGols()
    let totalGolsT1 = golsT1Tempo1 + golsT1Tempo2

    let golsT2Tempo1 = sortearGols()
    let golsT2Tempo2 = sortearGols()
    let totalGolsT2 = golsT2Tempo1 + golsT2Tempo2

    let varSorteio1 = Math.random() * 10
    let varTime1 = Math.floor(varSorteio1) + 1
    if (varTime1 == 1) {
        if (totalGolsT1 > 0) {
            totalGolsT1 = totalGolsT1 - 1
            console.log(`VAR ACIONADO! Gol anulado do ${t1.nome}`)
        }
    }

    let varSorteio2 = Math.random() * 10
    let varTime2 = Math.floor(varSorteio2) + 1
    if (varTime2 == 1) {
        if (totalGolsT2 > 0) {
            totalGolsT2 = totalGolsT2 - 1
            console.log(`VAR ACIONADO! Gol anulado do ${t2.nome}`)
        }
    }

    t1.golsFeitos = t1.golsFeitos + totalGolsT1
    t2.golsFeitos = t2.golsFeitos + totalGolsT2

    t1.golsSofridos = t1.golsSofridos + totalGolsT2
    t2.golsSofridos = t2.golsSofridos + totalGolsT1

    t1.saldoDeGols = t1.golsFeitos - t1.golsSofridos
    t2.saldoDeGols = t2.golsFeitos - t2.golsSofridos

    let sorteioArtilheiro1 = Math.random() * (totalGolsT1 + 1)
    let golsMarcadosArt1 = Math.floor(sorteioArtilheiro1)
    t1.golsArtilheiro = t1.golsArtilheiro + golsMarcadosArt1

    let sorteioArtilheiro2 = Math.random() * (totalGolsT2 + 1)
    let golsMarcadosArt2 = Math.floor(sorteioArtilheiro2)
    t2.golsArtilheiro = t2.golsArtilheiro + golsMarcadosArt2

    let amarelo1 = sortearCartaoAmarelo()
    let vermelho1 = sortearCartaoVermelho()
    t1.cartoesAmarelos = t1.cartoesAmarelos + amarelo1
    t1.cartoesVermelhos = t1.cartoesVermelhos + vermelho1

    let amarelo2 = sortearCartaoAmarelo()
    let vermelho2 = sortearCartaoVermelho()
    t2.cartoesAmarelos = t2.cartoesAmarelos + amarelo2
    t2.cartoesVermelhos = t2.cartoesVermelhos + vermelho2

    console.log(`Resultado: ${t1.nome} ${totalGolsT1} x ${totalGolsT2} ${t2.nome}`)

    if (totalGolsT1 > totalGolsT2) {
        t1.pontos = t1.pontos + 3
        console.log(`Vitoria do ${t1.nome}!`)
    } else if (totalGolsT2 > totalGolsT1) {
        t2.pontos = t2.pontos + 3
        console.log(`Vitoria do ${t2.nome}!`)
    } else {
        t1.pontos = t1.pontos + 1
        t2.pontos = t2.pontos + 1
        console.log("A partida terminou em Empate")
    }

    console.log("")
}

console.log("CAMPEONATO PERNAMBUCANO - FASE DE GRUPOS")
console.log("")

console.log("Rodada 1")
jogarPartida(time1, time2)
jogarPartida(time3, time4)

console.log("Rodada 2")
jogarPartida(time1, time3)
jogarPartida(time2, time4)

console.log("Rodada 3")
jogarPartida(time1, time4)
jogarPartida(time2, time3)

let listaDeTimes = [time1, time2, time3, time4]

listaDeTimes.sort(function(a, b) {
    if (a.pontos == b.pontos) {
        return b.saldoDeGols - a.saldoDeGols
    } else {
        return b.pontos - a.pontos
    }
})

console.log("")
console.log("CLASSIFICACAO DO CAMPEONATO PERNAMBUCANO")
console.log("")

let pos1 = listaDeTimes[0]
console.log(`1 lugar: ${pos1.nome} | Pontos: ${pos1.pontos} | Saldo: ${pos1.saldoDeGols} | GF: ${pos1.golsFeitos} | GS: ${pos1.golsSofridos}`)

let pos2 = listaDeTimes[1]
console.log(`2 lugar: ${pos2.nome} | Pontos: ${pos2.pontos} | Saldo: ${pos2.saldoDeGols} | GF: ${pos2.golsFeitos} | GS: ${pos2.golsSofridos}`)

let pos3 = listaDeTimes[2]
console.log(`3 lugar: ${pos3.nome} | Pontos: ${pos3.pontos} | Saldo: ${pos3.saldoDeGols} | GF: ${pos3.golsFeitos} | GS: ${pos3.golsSofridos}`)

let pos4 = listaDeTimes[3]
console.log(`4 lugar: ${pos4.nome} | Pontos: ${pos4.pontos} | Saldo: ${pos4.saldoDeGols} | GF: ${pos4.golsFeitos} | GS: ${pos4.golsSofridos}`)

console.log("")
console.log("GRANDE FINAL DO CAMPEONATO PERNAMBUCANO")
console.log("")

let finalista1 = listaDeTimes[0]
let finalista2 = listaDeTimes[1]

console.log(`A final vai ser disputada por: ${finalista1.nome} e ${finalista2.nome}`)
console.log("")

let golsFinal1Tempo1 = sortearGols()
let golsFinal1Tempo2 = sortearGols()
let golsFinal1 = golsFinal1Tempo1 + golsFinal1Tempo2

let golsFinal2Tempo1 = sortearGols()
let golsFinal2Tempo2 = sortearGols()
let golsFinal2 = golsFinal2Tempo1 + golsFinal2Tempo2

let varFinalSorteio1 = Math.random() * 10
let varFinal1 = Math.floor(varFinalSorteio1) + 1
if (varFinal1 == 1) {
    if (golsFinal1 > 0) {
        golsFinal1 = golsFinal1 - 1
        console.log(`VAR ACIONADO! Gol anulado do ${finalista1.nome}`)
    }
}

let varFinalSorteio2 = Math.random() * 10
let varFinal2 = Math.floor(varFinalSorteio2) + 1
if (varFinal2 == 1) {
    if (golsFinal2 > 0) {
        golsFinal2 = golsFinal2 - 1
        console.log(`VAR ACIONADO! Gol anulado do ${finalista2.nome}`)
    }
}

console.log(`Placar final: ${finalista1.nome} ${golsFinal1} x ${golsFinal2} ${finalista2.nome}`)
console.log("")

let campeaoDoTorneio = ""

if (golsFinal1 > golsFinal2) {
    campeaoDoTorneio = finalista1.nome
} else if (golsFinal2 > golsFinal1) {
    campeaoDoTorneio = finalista2.nome
} else {

    console.log("Empate no tempo normal! Vai para os penaltis...")
    console.log("")

    let golsPenT1 = 0
    let golsPenT2 = 0

    for (let i = 1; i <= 5; i++) {
        let bateuT1 = Math.random()
        if (bateuT1 > 0.3) {
            golsPenT1 = golsPenT1 + 1
            console.log(`Cobranca ${i} do ${finalista1.nome}: GOL!`)
        } else {
            console.log(`Cobranca ${i} do ${finalista1.nome}: defendido`)
        }

        let bateuT2 = Math.random()
        if (bateuT2 > 0.3) {
            golsPenT2 = golsPenT2 + 1
            console.log(`Cobranca ${i} do ${finalista2.nome}: GOL!`)
        } else {
            console.log(`Cobranca ${i} do ${finalista2.nome}: defendido`)
        }
    }

    while (golsPenT1 == golsPenT2) {
        console.log("Ainda empatado! Morte subita...")

        let bateuT1Extra = Math.random()
        if (bateuT1Extra > 0.3) {
            golsPenT1 = golsPenT1 + 1
            console.log(`${finalista1.nome}: GOL!`)
        } else {
            console.log(`${finalista1.nome}: defendido`)
        }

        let bateuT2Extra = Math.random()
        if (bateuT2Extra > 0.3) {
            golsPenT2 = golsPenT2 + 1
            console.log(`${finalista2.nome}: GOL!`)
        } else {
            console.log(`${finalista2.nome}: defendido`)
        }
    }

    console.log("")
    console.log(`Resultado Penaltis: ${finalista1.nome} ${golsPenT1} x ${golsPenT2} ${finalista2.nome}`)

    if (golsPenT1 > golsPenT2) {
        campeaoDoTorneio = finalista1.nome
    } else {
        campeaoDoTorneio = finalista2.nome
    }
}

console.log("")
console.log(`CAMPEAO PERNAMBUCANO: ${campeaoDoTorneio}`)
console.log("")

console.log("ARTILHEIRO DO CAMPEONATO PERNAMBUCANO")
console.log("")

let artilheiroDoTorneio = time1

if (time2.golsArtilheiro > artilheiroDoTorneio.golsArtilheiro) {
    artilheiroDoTorneio = time2
}

if (time3.golsArtilheiro > artilheiroDoTorneio.golsArtilheiro) {
    artilheiroDoTorneio = time3
}

if (time4.golsArtilheiro > artilheiroDoTorneio.golsArtilheiro) {
    artilheiroDoTorneio = time4
}

console.log(`Bota de Ouro: ${artilheiroDoTorneio.nomeArtilheiro} do time ${artilheiroDoTorneio.nome} com ${artilheiroDoTorneio.golsArtilheiro} gols marcados!`)

console.log("")
console.log("CARTOES DO CAMPEONATO PERNAMBUCANO")
console.log("")

console.log(`${time1.nome} - Amarelos: ${time1.cartoesAmarelos} | Vermelhos: ${time1.cartoesVermelhos}`)
console.log(`${time2.nome} - Amarelos: ${time2.cartoesAmarelos} | Vermelhos: ${time2.cartoesVermelhos}`)
console.log(`${time3.nome} - Amarelos: ${time3.cartoesAmarelos} | Vermelhos: ${time3.cartoesVermelhos}`)
console.log(`${time4.nome} - Amarelos: ${time4.cartoesAmarelos} | Vermelhos: ${time4.cartoesVermelhos}`)