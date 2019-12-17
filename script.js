
// Chiedo i dati e li salvo nelle variabili
var name = prompt('Come ti chiami?');
var surname = prompt('Qual è il tuo cognome?');
var eta = prompt('E la tua età?');

// Stampo i dati salvati nell'html
document.getElementById('name').innerHTML = name;
document.getElementById('surname').innerHTML = surname;
document.getElementById('eta').innerHTML = eta;

// Genero la password e la stampo nell'html

var pw = name + surname + eta + 19;
document.getElementById('pw').innerHTML = pw;
