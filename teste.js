const nome = localStorage.getItem("nome");
if (nome === null) {
  console.log("A variável não está definida");
} else {
  console.log(`O valor da variável é ${nome}`);
}
