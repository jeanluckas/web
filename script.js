const btnBoasVindas = document.querySelector("#btnBoasVindas");
btnBoasVindas.addEventListener("click", () => {
    alert("Seja bem vindo!");
});

const btnMudaTitulo = document.querySelector("#btnMudaTitulo");
let estadoTitulo = 0;
btnMudaTitulo.addEventListener("click", () => {
    const titulo = document.querySelector(".titulo");
    if (titulo.style.color != "blue") {
        titulo.style.color = "blue";
    } else {
        titulo.style.color = "darkslategrey";
    }
});

const input = document.querySelector("#input");
const lerInput = document.querySelector("#lerInput");
const mensagem = document.querySelector("#mensagem");

lerInput.addEventListener("click", () => {
    mensagem.textContent = "Olá, " + input.value + "! Seja bem-vindo!";
});