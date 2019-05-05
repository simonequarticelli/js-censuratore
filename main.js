// - Il software riceve in input un lungo testo e una serie di parole da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un “badword index” calcolato come il numero di parole censurate
//  su il numero di parole totali

//creo input utente
var testo = prompt('inserisci un testo');
//console.log(testo);

//uso funzione per convertire in "array"
testo = testo.split(' ');
//console.log(testo);

//creo array di parole vietate
var censura = ['blu', 'rosso', 'giallo', 'verde', 'arancione'];
//console.log(censura);

//creo array popolato dalle parole censurate inserite dall'utente
var word_user = [];

//creo contatore di parole censurate inserite
var contatore = 0;


var prova = false;
var i = 0;
while (i <= testo.length) {
  if (censura.includes(testo[i])) {
    prova = true;
    word_user.push(testo[i]);
    testo[i] = 'xxx';
    contatore = contatore + 1;
  }
  i++;
}

alert(testo);
alert('hai inserito ' + contatore + ' parole vietate su ' + testo.length);
console.log('hai inserito ' + contatore + ' parole vietate su ' + testo.length);
console.log(testo);
console.log(word_user);
