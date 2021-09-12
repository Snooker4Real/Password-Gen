const dataLowerCase = "azertyuiopqsdfghjklmwxcvnb";
const dataUpperCase = dataLowerCase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = '!ù:;,é"-çèê@#$%^&*()_+';
const rangevalue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

function generatePassword() {
  let data = [];
  let password = "";

  // ... add data to data array ... // spread operator
  if (lowercase.checked) data.push(...dataLowerCase);
  if (uppercase.checked) data.push(...dataUpperCase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Veuillez sélectionner des critères");
    return;
  }

  for (i = 0; i < rangevalue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }

  passwordOutput.value = password;

  passwordOutput.select();
  document.execCommand("copy");

  generateButton.innerHTML = "Copié ✔️";

  setTimeout(() => {
    generateButton.textContent = "Générer mot de passe 🤖";
  }, 2000);
}

generateButton.addEventListener("click", generatePassword);
