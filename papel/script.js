function iniciarJogo() {
  const escolha = prompt("Escolha: pedra, papel ou tesoura");

  if (escolha === null) return;

  const jogador = escolha.toLowerCase().trim();

  if (jogador !== "pedra" && jogador !== "papel" && jogador !== "tesoura") {
    alert("Opção inválida! Digite pedra, papel ou tesoura.");
    return;
  }

  const opcoes = ["pedra", "papel", "tesoura"];
  const sorteio = Math.floor(Math.random() * 3);
  const computador = opcoes[sorteio];

  let resultado = "";

  if (jogador === computador) {
    resultado = "Empate!";
  } else if (
    (jogador === "pedra" && computador === "tesoura") ||
    (jogador === "papel" && computador === "pedra") ||
    (jogador === "tesoura" && computador === "papel")
  ) {
    resultado = "Você venceu!";
  } else {
    resultado = "Você perdeu!";
  }

  alert(
    `Você escolheu: ${jogador}\nComputador escolheu: ${computador}\n\n${resultado}`,
  );
}