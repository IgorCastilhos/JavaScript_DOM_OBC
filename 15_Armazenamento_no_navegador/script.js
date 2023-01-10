function useLightTheme() {
  document.body.style.color = "#212529";
  document.body.style.backgroundColor = "#f1f5f9";
}

function useDarkTheme() {
  document.body.style.color = "#f1f5f9";
  document.body.style.backgroundColor = "#212529";
}

function switchTheme() {
  document.body.classList.toggle("is-light");
  document.body.classList.toggle("is-dark");
}

document.getElementById("lightBtn").addEventListener("click", useLightTheme);
document.getElementById("darkBtn").addEventListener("click", useDarkTheme);
document.getElementById("switchBtn").addEventListener("click", switchTheme);

document.getElementById("sessionBtn").addEventListener("click", function () {
  const input = document.getElementById("session");
  window.sessionStorage.setItem("info", input.value);
  input.value = "";
});

document.getElementById("readSession").addEventListener("click", function () {
  const info = sessionStorage.getItem("info");
  alert("A informação salva é: " + info);
});

document.getElementById("localBtn").addEventListener("click", function () {
  const input = document.getElementById("local");
  localStorage.setItem("text", input.value);
  input.value = "";
});

document.getElementById("readLocal").addEventListener("click", function () {
  const t = localStorage.getItem("text");
  alert("O texto salvo no local storage é: " + t);
});

document.getElementById("cookieBtn").addEventListener("click", function () {
  const input = document.getElementById("cookie");
  // cookieName=value; expires=UTCStringDate; path=/
  const cookie = "info=" + input.value + ";";
  const expiration = "expires=" + new Date(2023, 10, 1) + ";";
  const path = "path=/; ";
  document.cookie = cookie + expiration + path;
  input.value = "";
});

document.getElementById("cookie2Btn").addEventListener("click", function () {
  const input = document.getElementById("cookie2");
  // cookieName=value; expires=UTCStringDate; path=/
  const cookie = "text=" + input.value + ";";
  const expiration = "expires=" + new Date(2023, 1, 10) + ";";
  const path = "path=/; ";
  document.cookie = cookie + expiration + path;
  input.value = "";
});
