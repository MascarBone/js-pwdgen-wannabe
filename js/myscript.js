var nameOut = prompt("Inserisci il tuo nome");
console.log("nome = " + nameOut);

var surnameOut = prompt("Inserisci il tuo cognome");
console.log("nome = " + surnameOut);

var colorOut = prompt("Inserisci il tuo colore preferito");
console.log("nome = " + colorOut);

var rans = Math.floor(100 * Math.random());
console.log("numero random :" +rans)

document.getElementById("nameOut").innerHTML += nameOut;
document.getElementById("surnameOut").innerHTML += surnameOut;
document.getElementById("colorOut").innerHTML += colorOut;


document.getElementById("toShow").innerHTML =
    document.getElementById("toShow").innerHTML +
    nameOut + surnameOut + colorOut + rans;
