function iniciarJogo() {
  const numeroSecreto = Math.floor(Math.random() * 50) + 1;
  let palpite = null;
  let tentativas = 0;

  do {
    const entrada = prompt("Advinhe o número entre 1 e 50:");

    if (entrada === null) return;

    palpite = parseInt(entrada);

    if (isNaN(palpite)) {
      alert("Digite um número válido!");
      continue;
    }

    tentativas++;

    if (palpite < numeroSecreto) {
      alert("O número secreto é maior!");
    } else if (palpite > numeroSecreto) {
      alert("O número secreto é menor!");
    } else {
      alert(
        `Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativa(s)!`,
      );
    }
  } while (palpite !== numeroSecreto);
}