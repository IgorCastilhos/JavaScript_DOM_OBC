/**
 * Precisa-se pegar o conteúdo dos Inputs que retornam posição, nome, número e fazer as devidas operações.
 */

function addPlayer() {
  const position = document.getElementById("position").value;
  // Pega o valor em texto dentro do input Position
  const name = document.getElementById("name").value;
  // Pega o valor em texto dentro do input Name
  const number = document.getElementById("number").value;
  // Pega o valor em texto dentro do input Number

  const confirmacao = confirm(
    "Escalar " + name + " Nº: " + number + " na posição de " + position + " ?"
  ); // Caso se confirme, retorna um valor booleano true

  if (confirmacao) {
    // SE verdadeiro (true)
    const teamList = document.getElementById("teamList");
    // Obter a lista de jogadores
    const playerItem = document.createElement("li");
    // Criar um item Jogador na lista
    playerItem.id = "player-" + number;
    // 1ª Propriedade vai ser igual a: player - number(que é o número da camisa dele, l10)
    playerItem.innerText = position + ": " + name + " (" + number + ")";
    // 2ª Propriedade vai ser o texto dentro do item Jogador na lista: Atacante: Pelé (10)
    teamList.appendChild(playerItem);
    // Adiciona o item Jogador à lista
    document.getElementById("position").value = "";
    // Obtém o valor do input position e o repassa como uma string vazia ao finalizar a operação
    document.getElementById("name").value = "";
    // Obtém o valor do input name e o repassa como uma string vazia ao finalizar a operação
    document.getElementById("number").value = "";
    // Obtém o valor do input number e o repassa como uma string vazia ao finalizar a operação
  }
}

// Para remover um Jogador, precisa-se referenciar os elementos que criamos ao Escalar Jogadores
function removePlayer() {
  const number = document.getElementById("numberToRemove").value;
  // Pega o valor do input, com o número do jogador que deseja Remover
  const playerToRemove = document.getElementById("player-" + number);
  // Seleciona o li (id do item Jogador, l23) que tá na lista
  const confirmation = confirm(
    "Remover o jogador " + playerToRemove.innerText + "?"
  );

  if (confirmation) {
    // SE verdadeiro
    playerToRemove.remove();
    // Apaga o código do elemento especificado
    document.getElementById("numberToRemove").value = "";
    // Limpa o input, colocando o valor dele como uma String vazia
  }
}
