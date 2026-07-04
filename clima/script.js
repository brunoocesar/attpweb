const API_KEY = "55fe216bc323b4e0f3fd8316ceff93c4";

const input = document.getElementById("cidadeInput");
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") buscarClima();
});

async function buscarClima() {
  const cidade = input.value.trim();
  const erroEl = document.getElementById("erro");
  const resultEl = document.getElementById("result");

  if (!cidade) return;

  erroEl.style.display = "none";
  resultEl.classList.remove("show");

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cidade)}&appid=${API_KEY}&units=metric&lang=pt_br`;
    const res = await fetch(url);

    if (!res.ok) throw new Error("Cidade não encontrada");

    const data = await res.json();

    document.getElementById("nomeCidade").textContent =
      `${data.name}, ${data.sys.country}`;
    document.getElementById("temperatura").textContent =
      `${Math.round(data.main.temp)}°C`;
    document.getElementById("descricao").textContent =
      data.weather[0].description;
    document.getElementById("umidade").textContent = data.main.humidity;
    document.getElementById("vento").textContent = Math.round(
      data.wind.speed * 3.6,
    );
    document.getElementById("sensacao").textContent = Math.round(
      data.main.feels_like,
    );
    document.getElementById("icone").src =
      `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    resultEl.classList.add("show");
  } catch (e) {
    erroEl.style.display = "block";
  }
}