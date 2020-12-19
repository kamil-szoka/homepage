const name = "Kamil";
const siteName = "Koza Inc.";

console.log(
  `Witaj na ${siteName}! Mam na imię ${name} i będę Twoim przewodnikiem`
);

const inner = document.querySelector(".main__paragraph--js");
inner.innerHTML = `${siteName} wstawione za pomocą innerHTML w JavaScript`;
console.log(inner.innerHTML);

// ------------------FAT ARROW----------------------------
const greeting = (name, age) => {
  console.log(
    `Witaj na mojej stronie internetowej. Ja jestem ${name}, mam ${age} lat`
  );
};

greeting("Andrzej", 758);

// Deklaracja funkcji - pamiętaj, że jeżeli nie dasz w instrukcji funkcji słowa kluczowego return, to potem przy próbie przypisania wywołania funkcji do zmiennej dostaniesz undefined - funkcja wtedy niczego nie zwraca, wykonuje w środku obliczenia, ale nie ma zdefiniowanego tego co ta funkcja ma nam zwrócić i ewentualnie przekazać do jakiejś zmiennej

// function greeting(name, age, result) {
//   console.log(
//     `Witaj na mojej stronie internetowej. Ja jestem ${name}, mam ${age} lat`
//   );
//   return result * 3;
//   console.log(`Wynik to ${result}`);
// }

// const result = greeting("Andrzej", 758, 3);
// console.log(result);
