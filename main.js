const name = "Kamil";
const siteName = "Koza Inc.";

console.log(
  `Witaj na ${siteName}! Mam na imię ${name} i będę Twoim przewodnikiem`
);

const inner = document.querySelector(".js-inner");
console.log(inner);
inner.innerHTML = `${siteName} wstawione za pomocą innerHTML w JavaScript`;
