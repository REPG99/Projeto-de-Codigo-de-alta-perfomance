# Projeto-de-Codigo-de-alta-perfomance
Simulador de Campeonato Pernambucano - Desafio Node.js

Projeto desenvolvido como Desafio Prático da disciplina de Programação Web. Trata-se de um simulador do Campeonato Pernambucano em Node.js, contendo fase de grupos, tabela de classificação detalhada, fase eliminatória (final) e eventos dinâmicos como cartões e intervenção do VAR.

Integrantes do Grupo
Roberto Eugenio Palacios Gomes 01241270
Caio Peryandro Tavares de Almeida 01756197
Igor Bernardo De Oliveira 01846617
Ruan Luiz Batista De Lima 01821025
Caio luiz Batista De Lima 01516982

Turma
Ciência da Computação, 3º Período

Projeto Desenvolvido
Foi escolhido o desenvolvimento do Simulador de Campeonato de Futebol, sugerido nas instruções do desafio. A temática foi adaptada para o Campeonato Pernambucano, com os times Sport, Náutico, Santa Cruz e Retrô.

Ferramentas Utilizadas
JavaScript (ES6+)
Node.js v24.16.0 (Execução no terminal)

Instruções de Instalação e Execução
Certifique-se de ter o Node.js instalado em sua máquina.
Clone o repositório ou baixe os arquivos para o seu computador.
Abra o terminal na pasta raiz do projeto.
Execute o comando abaixo para iniciar o simulador:

bash
node index.js

Funcionalidades Obrigatórias Implementadas
Modelagem dos dados dos times utilizando objetos JS (contendo pontos, gols, saldo e cartões).
Sorteio de gols separados por 1º e 2º tempo utilizando Math.random().
Sistema de pontuação automático utilizando operadores lógicos e if/else (3 pontos para vitória, 1 para empate).
Controle de fluxo com loops (for) para as cobranças de pênalti.
Manipulação de Arrays utilizando métodos como .sort() e .forEach().

Desafios Extras e Inovações Implementadas
Além do escopo básico, o projeto conta com as seguintes melhorias focadas na regra de negócio real do futebol:

1. Adição de Cartões: Sorteio automático de cartões amarelos e vermelhos (expulsões) por partida.
2. Grupo com 4 Times: Ampliação para 4 times jogando no modelo "Todos contra Todos" (6 partidas).
3. Fase Eliminatória (Mata-mata): Criação de uma Grande Final com os dois melhores classificados, incluindo decisão por pênaltis em caso de empate.
4. Artilharia da Competição: Rastreamento de gols individuais e exibição do artilheiro no final da execução.
5. Sistema de VAR (Inovação): Lógica matemática de probabilidade (10% de chance) criada para anular gols durante a partida, simulando intervenções da arbitragem de vídeo.
6. Critério de Desempate Real (Inovação): Adição dos atributos golsSofridos e saldoDeGols nos objetos. O método .sort() foi incrementado com uma estrutura condicional para priorizar o saldo de gols em caso de pontuação empatada.

Exemplo de Saída Esperada no Console

text
Campeonato Pernambucano fase de grupos

Rodada 1
Var acionado! Gol anulado do Nautico
Resultado: Sport 2 x 1 Nautico
Vitoria do Sport!

Resultado: Santa Cruz 3 x 1 Retro
Vitoria do Santa Cruz!

Rodada 2
Resultado: Sport 1 x 1 Santa Cruz
A partida terminou em Empate

Resultado: Nautico 2 x 3 Retro
Vitoria do Retro!

Rodada 3
Resultado: Sport 4 x 2 Retro
Vitoria do Sport!

Resultado: Nautico 0 x 2 Santa Cruz
Vitoria do Santa Cruz!

Classificação do Campeonato Pernambucano

1 lugar: Sport | Pontos: 7 | Saldo: 3 | GF: 7 | GS: 4
2 lugar: Santa Cruz | Pontos: 7 | Saldo: 2 | GF: 6 | GS: 4
3 lugar: Retro | Pontos: 3 | Saldo: 0 | GF: 6 | GS: 7
4 lugar: Nautico | Pontos: 1 | Saldo: 0 | GF: 3 | GS: 7

Final do Campeonato Pernambucano

A final vai ser disputada por: Sport e Santa Cruz

Placar final: Sport 1 x 1 Santa Cruz

Empate no tempo normal! Vai para os penaltis

Cobranca 1 do Sport: GOL!
Cobranca 1 do Santa Cruz: defendido
Cobranca 2 do Sport: GOL!
Cobranca 2 do Santa Cruz: GOL!

Resultado Penaltis: Sport 4 x 3 Santa Cruz

Campeao Pernambucano: Sport

Artilheiro do Campeonato Pernambucano
Bota de Ouro: Paulo do time Sport com 5 gols marcados!

Cartões do Campeonato Pernambucano

Sport    Amarelos: 3 | Vermelhos: 1
Nautico  Amarelos: 4 | Vermelhos: 0
Santa Cruz  Amarelos: 2 | Vermelhos: 1
Retro    Amarelos: 5 | Vermelhos: 2

Os resultados variam a cada execução pois são sorteados aleatoriamente.
