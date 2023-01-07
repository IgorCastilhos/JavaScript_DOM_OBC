// Selecionando elementos da tela

const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.getElementById("input");
const resultInput = document.getElementById("result");

// Impedindo que o usuário digite palavras fora do escopo da calculadora, criando um Array com todos os caracteres permitidos e fazendo uma verificação

const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

// Adicionando um evento para todos os botões
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });
});

// Adicionando a tecla 'Clear' à Calculadora
document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
  input.focus();
});

// Adiciona um Event Listener de 'keydown' para o input; Previne o comportamento padrão do evento (Não quero que qualquer caractere pressionado seja inserido)
input.addEventListener("keydown", function (ev) {
  ev.preventDefault();

  // SE o Array de teclas inclui o caractere pressionado (ev.key), junta-se o valor do input com a tecla
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }

  // Adicionando a tecla 'Backspace' à Calculadora
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }

  // Adicionando a tecla 'Enter' à Calculadora
  if (ev.key === "Enter") {
    calculate();
  }
});

// Adicionando a tecla 'igual' à Calculadora
document.getElementById("equal").addEventListener("click", calculate);

function calculate() {
  const result = eval(input.value);
  resultInput.value = result;
}
