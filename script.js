let contador = 0;

const contadorEl = document.getElementById("contador");
const btnInc = document.getElementById("btnInc");
const btnDec = document.getElementById("btnDec");

btnInc.addEventListener("click", () => {
  contador++;
  contadorEl.textContent = contador;
});

btnDec.addEventListener("click", () => {
  if (contador === 0) {
    alert("O contador já está em zero!");
    return;
  }
  contador--;
  contadorEl.textContent = contador;
});

const inputTexto = document.getElementById("inputTexto");
const paragrafosDiv = document.getElementById("paragrafos");
const charCount = document.getElementById("charCount");

inputTexto.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (inputTexto.value.trim() !== "") {
      const p = document.createElement("p");
      p.textContent = inputTexto.value.trim();
      paragrafosDiv.appendChild(p);

      inputTexto.focus();
      atualizarContador();
    }
  }
});

inputTexto.addEventListener("input", atualizarContador);

function atualizarContador() {
  const texto = inputTexto.value.replace(/\s/g, "");
  charCount.textContent = texto.length + " caracteres";
}

const tipoLista = document.getElementById("tipoLista");
const btnAdicionarLista = document.getElementById("btnAdicionarLista");
const listasDiv = document.getElementById("listas");

btnAdicionarLista.addEventListener("click", () => {
  const tipo = tipoLista.value;

  const lista = document.createElement(tipo);

  for (let i = 1; i <= 3; i++) {
    const item = document.createElement("li");
    item.textContent = "Item " + i;
    lista.appendChild(item);
  }

  listasDiv.appendChild(lista);
});

const btnReset = document.getElementById("btnReset");

btnReset.addEventListener("click", () => {
  contador = 0;
  contadorEl.textContent = contador;

  inputTexto.value = "";
  charCount.textContent = "0 caracteres";

  paragrafosDiv.innerHTML = "";
  listasDiv.innerHTML = "";
});
