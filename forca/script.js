const banco = [
  "javascript",
  "python",
  "programacao",
  "computador",
  "internet",
  "teclado",
  "monitor",
  "algoritmo",
  "variavel",
  "funcao",
  "biblioteca",
  "framework",
  "servidor",
  "database",
  "software",
];

function iniciarJogo() {
  const palavra = banco[Math.floor(Math.random() * banco.length)];
  const letras = palavra.split("");
  const espelho = letras.map(() => "_");
  let tentativas = 6;
  let letrasErradas = [];

  while (tentativas > 0 && espelho.includes("_")) {
    const estado = espelho.join(" ");
    const chute = prompt(
      `Tentativas restantes: ${tentativas}\nErradas: ${letrasErradas.join(", ")}\n\n${estado}\n\nDigite uma letra:`,
    );

    if (chute === null) break;

    const letra = chute.toLowerCase().trim();

    if (!letra || letra.length !== 1) {
      alert("Digite apenas uma letra válida!");
      continue;
    }

    if (espelho.includes(letra) || letrasErradas.includes(letra)) {
      alert("Você já tentou essa letra!");
      continue;
    }

    if (letras.includes(letra)) {
      for (let i = 0; i < letras.length; i++) {
        if (letras[i] === letra) {
          espelho[i] = letra;
        }
      }
    } else {
      letrasErradas.push(letra);
      tentativas--;
    }
  }

  if (!espelho.includes("_")) {
    alert(`Parabéns! Você acertou a palavra: ${palavra.toUpperCase()}`);
  } else {
    alert(`Você perdeu! A palavra era: ${palavra.toUpperCase()}`);
  }
}