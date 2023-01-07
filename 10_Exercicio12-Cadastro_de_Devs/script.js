/**
 * Função createLabel: recebe como parâmetro um text e um htmlFor(que é o atributo for da label)
 */

function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  // Cria um elemento 'label'
  label.htmlFor = htmlFor;
  // seta o htmlFor pra ser igual o parâmetro recebido(variável disponível dentro da função)
  label.innerText = text;
  // seta o innerText para ser igual ao texto recebido
  return label;
  // Saída do que a função createLabel retorna
}

/**
 * Função createInput: recebe como parâmetro um id, value, name, type e placeholder.
 * Dentro dela é criado um elemento input através do método createElement;
 * São setados os valores de id, value, name, type e placeholder para os seus respectivos;
 */

function createInput(id, value, name, type = "text", placeholder = "") {
  const input = document.createElement("input");
  input.id = id;
  input.value = value;
  input.name = name;
  input.type = type;
  input.placeholder = placeholder;
  return input;
}

const addTechBtn = document.getElementById("addTechBtn");
// Captura o botão da página que exibe os novos inputs
const form = document.getElementById("devForm");
// Captura o formulário inteiro
const developers = [];
// Array para salvar os desenvolvedores
let inputRows = 0;
// Nº de linhas que a lista-não-ordenada terá, inicialmente 0

/**
 * Adiciona um eventListener do tipo click que cria alguns elementos e os exibe em tela.
 */

addTechBtn.addEventListener("click", function (ev) {
  const stackInputs = document.getElementById("stackInputs");
  // Captura a lista-não-ordenada
  const newRow = document.createElement("li");
  // Cria um elemento do tipo 'li' na lista
  const rowIndex = inputRows;
  // Cria um índice para cada linha
  inputRows++;
  // Aumenta o número de linhas
  newRow.id = "inputRow-" + rowIndex;
  // Passa o id como: "inputRow-" + rowIndex. Permitindo rastrear, diferenciar e posteriormente deletar essa linha.
  newRow.className = "inputRow";
  // Aplica uma classe no elemento

  const techNameLabel = createLabel("Nome: ", "techName-" + rowIndex);
  // Cria uma label para aparecer junto com nome do input da tecnologia. Se passa o texto e o htmlFor(que é o id)!
  const techNameInput = createInput("techName-" + rowIndex, null, "techName");
  // Cria um input, passando techName + o índice da linha como Id, valor nulo e o att name será techName

  /**
   * Criando um input de radio para marcar o tempo de experiência
   */
  const expLabel = createLabel("Experiência: ");
  // Cria um label com o texto: "Experiência:"
  const id1 = "expRadio-" + rowIndex + ".1";
  // Cria uma variável com o id baseado no índice da linha
  const expRadio1 = createInput(
    id1,
    "0-2 anos",
    "techExp-" + rowIndex,
    "radio"
  ); // Cria um input com id, experiência de 0-2 anos, nome "techExp-" + rowIndex para diferenciar o name e o type radio
  const expLabel1 = createLabel("0-2 anos", id1);
  // Cria uma label com o texto indicativo de 0-2 anos, junto com o id1

  const id2 = "expRadio-" + rowIndex + ".2";
  const expRadio2 = createInput(
    id2,
    "3-4 anos",
    "techExp-" + rowIndex,
    "radio"
  );
  const expLabel2 = createLabel("3-4 anos", id2);
  // Cria uma label com o texto indicativo de 3-4 anos, junto com o id2

  const id3 = "expRadio-" + rowIndex + ".3";
  const expRadio3 = createInput(id3, "5+ anos", "techExp-" + rowIndex, "radio");
  const expLabel3 = createLabel("5+ anos", id3);
  // Cria uma label com o texto indicativo de 5+ anos, junto com o id3

  const removeRowBtn = document.createElement("button");
  // Cria um elemento botão, que será usado para remover uma linha
  removeRowBtn.type = "button";
  removeRowBtn.innerText = "Remover";
  removeRowBtn.addEventListener("click", function () {
    stackInputs.removeChild(newRow);
    // A função callback remove um filho(newRow) da stackInputs
  });

  newRow.append(
    techNameLabel,
    techNameInput,
    expLabel,
    expRadio1,
    expLabel1,
    expRadio2,
    expLabel2,
    expRadio3,
    expLabel3,
    removeRowBtn
  ); // Acrescenta todos os elementos na linha

  stackInputs.appendChild(newRow);
  // Pega o stackInputs, que é a lista, e adiciona o item com o appendChild
});

// Adicionando o comportamento de submit ao formulário
form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  // Importante! Passar o método preventDefault para que a página não atualize
  const fullnameInput = document.getElementById("fullname");
  // Captura o input com o Id fullname
  const inputRows = document.querySelectorAll(".inputRow");
  // Captura todas as linhas com a classe inputRow
  let technologies = [];
  // Array de tecnologias que armazena as informações que foram preenchidas no form

  inputRows.forEach(function (row) {
    const techName = document.querySelector(
      "#" + row.id + ' input[name="techName"]'
    ).value;
    // #rowId input[name="techName"]

    const techExp = document.querySelector(
      "#" + row.id + ' input[type="radio"]:checked'
    ).value;
    // #rowId input[type="radio"]:checked - assim ele pega a radio que estiver marcada e com o .value, retorna o valor.

    technologies.push({ name: techName, exp: techExp });
    // Adiciona um objeto que vai ter uma prop name(techName) e exp(techExp)
  });

  const newDev = { fullname: fullnameInput.value, technologies: technologies };
  // Objeto com as props fullname e technologies
  developers.push(newDev);
  // Adiciona um novo desenvolvedor no Array developers
  alert("Dev cadastrado com sucesso!");

  // Limpa o valor do input de nome da tecnologia e remove a linha por completo
  fullnameInput.value = "";
  inputRows.forEach(function (row) {
    row.remove();
  });

  console.log(developers);
});
