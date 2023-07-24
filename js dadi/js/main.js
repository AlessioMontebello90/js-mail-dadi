// COSTANTI DEL GIOCO

const userNumber = Math.floor(Math.random() * 6 + 1); // NUMERO UTENTE
const cpuNumber = Math.floor(Math.random() * 6 + 1); // NUMERO COMPUTER

// COSTANTE PER STAMPO NUMERO SU DOM

const userBox = document.getElementById("user__number");
const cpuBox = document.getElementById("cpu__number");
const results = document.getElementById("results");

// GENERATORE E STAMPO RANDOM NUMERI

userBox.innerHTML = userNumber;
cpuBox.innerHTML = cpuNumber;

// IF CHE CERTIFICA CHI VINCE

if (userNumber > cpuNumber) {
  results.innerHTML =
    "Complimenti, ma la tua è stata solo la fortuna del principiante";
} else {
  results.innerHTML =
    "Ora paga il tuo pegno, HAI PERSO AHAHAHAHAHAHAHAHHAHAHAS";
}
