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
  resultInput.value = "ERROR";
  resultInput.classList.add("error");
  // Sempre executa por padrão essas 2 linhas
  const result = eval(input.value);
  // Depois calcula o resultado com eval
  resultInput.value = result;
  // Se funcionar, vai colocar o resultado no input e
  resultInput.classList.remove("error");
  // remover a classe de erro
}

// Adicionando a funcionalidade de Clipboard (copiar o resultado da operação)
document
  .getElementById("copyToClipboard")
  .addEventListener("click", function (ev) {
    // Parâmetro ev (evento) é usado para selecionar o botão e informar que o resultado foi copiado
    const button = ev.currentTarget;
    if (button.innerText === "Copy") {
      button.innerText = "Copied";
      button.classList.add("success");
      navigator.clipboard.writeText(resultInput.value);
      // Propriedade do Objeto Window (navigator) possui a funcionalidade clipboard e é passado o método writeText para escrever o valor do input, que é o resultado da calculadora.
    } else {
      // Quando o texto já tiver sido copiado, o botão Copy voltará ao normal
      button.innerText = "Copy";
      button.classList.remove("success");
    }
  });

// Adicionando a funcionalidade de trocar o tema da calculadora (escuro/claro)
document.getElementById("themeSwitcher").addEventListener("click", function () {
  /**
   * Essa função troca o tema a partir das variáveis do CSS;
   * Basicamente inverte a cor do fundo pela cor da fonte.
   */
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9");
    root.style.setProperty("--border-color", "#aaa");
    root.style.setProperty("--font-color", "#212529");
    root.style.setProperty("--primary-color", "#26834a");
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("--primary-color", "#4dff91");
    main.dataset.theme = "dark";
  }
});
