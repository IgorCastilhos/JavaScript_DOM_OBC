// Variáveis globais úteis. Permite que o jogador clique e coloque o X ou O
const boardRegions = document.querySelectorAll("#gameBoard span");

// Tabuleiro virtual para analisar o jogo no console do JavaScript. Também será usado para gerenciar a situação do tabuleiro real, sempre igual e fazendo as verificações necessárias.
let vBoard = [];

// Var que dita o jogador da vez
let turnPlayer = "";

// Função que serve para mostrar na tela o jogador da vez
function updateTitle() {
  const playerInput = document.getElementById(turnPlayer);
  // Passa a var como parâmetro, pois ela será sempre player1 ou player2
  document.getElementById("turnPlayer").innerText = playerInput.value;
  // Pega o elemento span com Id 'turnPlayer' e passa o valor do texto como o nome do jogador que o usuário digitou
}

function intializeGame() {
  // Inicializa as variáveis globais
  vBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  turnPlayer = "player1";
  // Ajusta o título da página (caso seja necessário)
  document.querySelector("h2").innerHTML =
    'Vez de: <span id="turnPlayer"></span>';
  updateTitle();
  // Limpa o tabuleiro (caso seja necessário) e adiciona os eventos de clique
  boardRegions.forEach(function (element) {
    element.classList.remove("win");
    element.innerText = "";
    element.classList.add("cursor-pointer");
    element.addEventListener("click", handleBoardClick);
  });
}

// Verifica se existem três regiões iguais em sequência e devolve as regiões
function getWinRegions() {
  const winRegions = [];
  if (
    vBoard[0][0] &&
    vBoard[0][0] === vBoard[0][1] &&
    vBoard[0][0] === vBoard[0][2]
  )
    winRegions.push("0.0", "0.1", "0.2");
  if (
    vBoard[1][0] &&
    vBoard[1][0] === vBoard[1][1] &&
    vBoard[1][0] === vBoard[1][2]
  )
    winRegions.push("1.0", "1.1", "1.2");
  if (
    vBoard[2][0] &&
    vBoard[2][0] === vBoard[2][1] &&
    vBoard[2][0] === vBoard[2][2]
  )
    winRegions.push("2.0", "2.1", "2.2");
  if (
    vBoard[0][0] &&
    vBoard[0][0] === vBoard[1][0] &&
    vBoard[0][0] === vBoard[2][0]
  )
    winRegions.push("0.0", "1.0", "2.0");
  if (
    vBoard[0][1] &&
    vBoard[0][1] === vBoard[1][1] &&
    vBoard[0][1] === vBoard[2][1]
  )
    winRegions.push("0.1", "1.1", "2.1");
  if (
    vBoard[0][2] &&
    vBoard[0][2] === vBoard[1][2] &&
    vBoard[0][2] === vBoard[2][2]
  )
    winRegions.push("0.2", "1.2", "2.2");
  if (
    vBoard[0][0] &&
    vBoard[0][0] === vBoard[1][1] &&
    vBoard[0][0] === vBoard[2][2]
  )
    winRegions.push("0.0", "1.1", "2.2");
  if (
    vBoard[0][2] &&
    vBoard[0][2] === vBoard[1][1] &&
    vBoard[0][2] === vBoard[2][0]
  )
    winRegions.push("0.2", "1.1", "2.0");
  return winRegions;
}

// Desabilita uma região do tabuleiro para que não seja mais clicável
function disableRegion(element) {
  element.classList.remove("cursor-pointer");
  element.removeEventListener("click", handleBoardClick);
}

// Pinta as regiões onde o jogador venceu e mostra seu nome na tela
function handleWin(regions) {
  regions.forEach(function (region) {
    document
      .querySelector('[data-region="' + region + '"]')
      .classList.add("win");
  });
  const playerName = document.getElementById(turnPlayer).value;
  document.querySelector("h2").innerHTML = playerName + " venceu!";
}

// Serve para reagir à região que o jogador clica
function handleBoardClick(ev) {
  // Obtém os índices da região clicada
  const span = ev.currentTarget;
  // Obtém a região que foi clicada(span)
  const region = span.dataset.region; // N.N
  // Divide a String onde tiver um ponto, transformando ela em um Array
  const rowColumnPair = region.split("."); // ["N", "N"]
  // Pega a linha
  const row = rowColumnPair[0];
  // Pega a coluna
  const column = rowColumnPair[1];
  // Marca a região clicada com o símbolo do jogador
  if (turnPlayer === "player1") {
    span.innerText = "X";
    vBoard[row][column] = "X";
  } else {
    span.innerText = "O";
    vBoard[row][column] = "O";
  }
  // Limpa o console e exibe o tabuleiro virtual
  console.clear();
  // Array vBoard exibe o conteúdo em formato de tabela
  console.table(vBoard);
  // Desabilita o jogador de clicar na mesma região
  disableRegion(span);
  // Verifica se alguém venceu
  const winRegions = getWinRegions();
  if (winRegions.length > 0) {
    handleWin(winRegions);
  } else if (vBoard.flat().includes("")) {
    turnPlayer = turnPlayer === "player1" ? "player2" : "player1";
    updateTitle();
  } else {
    document.querySelector("h2").innerHTML = "Empate!";
  }
}

// Adiciona ao botão Start a função de inicializar o jogo
document.getElementById("start").addEventListener("click", intializeGame);
