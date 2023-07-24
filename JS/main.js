//INDIRIZZI EMAIL ACCETTATI

const validEmails = [
  "raffaello@admin.it",
  "donatello@admin.it",
  "michelangello@email.it",
  "leonardo@email.it",
];
const userMail = prompt("Qual è il tuo indirizzo email ?");

// ELEMENTO HTML NEL QUALE SCRIVERE SE L'INPUT E' OK O NO
const textEl = document.getElementById("user");

// INDIVIDUAZIONE INDIRIZZI AUTORIZZATI

for (let i = 0; i < validEmails.length; i++) {
  const validEmail = validEmails[i];

  if (validEmail === userMail) {
    textEl.innerHTML = "Benvenuto il maestro Shredder ti aspetta";
    break;
  } else {
    textEl.innerHTML = "NON PUIOI ENTRARE. Hai almeno una fetta di piazza?";
  }
}
